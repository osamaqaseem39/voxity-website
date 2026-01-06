"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Project = { 
  name: string; 
  image: string;
  description?: string;
  deliverables?: string[];
  services?: string[];
};

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Calculate max index based on showing 5 cards at a time
  const maxIndex = Math.max(0, projects.length - 5);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSwipeDirection('right');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => {
      setIsTransitioning(false);
      setSwipeDirection(null);
    }, 700);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSwipeDirection('left');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => {
      setIsTransitioning(false);
      setSwipeDirection(null);
    }, 700);
  };

  // Auto-scroll carousel
  useEffect(() => {
    if (projects.length <= 5) return; // Don't auto-scroll if all projects are visible
    if (isHovered) return; // Pause auto-scroll when any card is hovered
    const interval = setInterval(() => {
      if (!isTransitioning && !isHovered) {
        setSwipeDirection('left');
        setIsTransitioning(true);
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
          setSwipeDirection(null);
        }, 700);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length, maxIndex, currentIndex, isTransitioning, isHovered]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const getVisibleProjects = () => {
    // Always show 5 cards, duplicate if needed for smooth carousel effect
    const visible: Project[] = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();
  const rotations = [-15, -8, 0, 8, 15]; // degrees for each card position
  const zDepths = [-120, -60, 0, -60, -120]; // z-axis depth: outer cards further back, center closest
  const scales = [0.85, 0.92, 1, 0.92, 0.85]; // scale: outer cards smaller, center full size
  const blurs = [8, 1.5, 0, 1.5, 8]; // blur: outer cards blurry, cards next to center less blurry, center sharp
  const opacities = [0.6, 0.8, 1, 0.8, 0.6]; // opacity: outer cards more transparent

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <motion.div 
        className="flex justify-center items-center gap-6 md:gap-8 px-12 md:px-20"
        style={{ perspective: '1200px' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = Math.abs(offset.x) * velocity.x;

          if (swipe < -8000) {
            goToNext();
          } else if (swipe > 8000) {
            goToPrevious();
          }
        }}
      >
        {visibleProjects.map((project, index) => {
          const rotationY = rotations[index];
          const zDepth = zDepths[index];
          const cardScale = scales[index];
          const blurAmount = blurs[index];
          const cardOpacity = opacities[index];
          
          // Calculate position for smooth one-by-one scrolling
          // All cards move in the same direction
          const getInitialX = () => {
            if (!swipeDirection || !isTransitioning) return 0;
            // All cards start from the same direction based on swipe
            if (swipeDirection === 'left') {
              // Swiping left: all cards start from right and slide left
              return 400;
            } else {
              // Swiping right: all cards start from left and slide right
              return -400;
            }
          };
          
          return (
            <motion.div
              key={`${project.name}-${currentIndex}-${index}`}
              initial={{
                x: swipeDirection && isTransitioning ? getInitialX() : 0,
                opacity: swipeDirection && isTransitioning ? (index === (swipeDirection === 'left' ? 4 : 0) ? 0 : cardOpacity) : cardOpacity,
                scale: cardScale,
                rotateY: rotationY,
                z: zDepth,
                filter: `blur(${blurAmount}px)`
              }}
              animate={{ 
                opacity: cardOpacity, 
                scale: cardScale, 
                rotateY: rotationY, 
                z: zDepth,
                x: 0,
                filter: `blur(${blurAmount}px)`
              }}
              transition={{ 
                duration: 0.7,
                delay: swipeDirection && isTransitioning ? (index * 0.1) : 0,
                type: "spring",
                stiffness: 150,
                damping: 25,
                mass: 0.7
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                z: 50,
                filter: 'blur(0px)',
                opacity: 1
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                width: '380px',
                height: '380px',
                flexShrink: 0,
                perspective: '1000px'
              }}
              className="glass rounded-2xl text-center group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Techy glow effect on center card */}
              {index === 2 && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e21b1b]/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }}
                  style={{ pointerEvents: 'none', zIndex: 1 }}
                />
              )}
              
              {/* Card Container with Flip Effect */}
              <motion.div
                className="relative w-full h-full"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(0deg)'
                }}
                whileHover={index >= 1 && index <= 3 ? { rotateY: 180 } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Front Side - Logo */}
                <div 
                  className="absolute inset-0 flex flex-col items-center gap-4 p-6 justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill 
                      className="object-contain" 
                      sizes="192px"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-[#e21b1b] transition-colors">
                    {project.name}
                  </h3>
                </div>

                {/* Back Side - Description & Deliverables */}
                <div 
                  className="absolute inset-0 flex flex-col items-start gap-2 p-4 justify-start overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  {/* Logo at top */}
                  <div className="relative w-24 h-24 mx-auto mb-2 flex items-center justify-center">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill 
                      className="object-contain" 
                      sizes="96px"
                    />
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2 w-full text-center border-b border-white/20 pb-1">
                    {project.name}
                  </h3>
                  
                  {project.description && (
                    <p className="text-white/80 text-xs leading-relaxed mb-2">
                      {project.description}
                    </p>
                  )}
                  
                  {/* Deliverables and Services in same row */}
                  {((project.deliverables?.length ?? 0) > 0 || (project.services?.length ?? 0) > 0) && (
                    <div className="w-full flex gap-2 mt-1">
                      {project.deliverables && project.deliverables.length > 0 && (
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[#e21b1b] font-semibold text-xs mb-1 whitespace-nowrap">Deliverables:</h4>
                          <ul className="list-disc list-inside space-y-0.5">
                            {project.deliverables.map((item, idx) => (
                              <li key={idx} className="text-white/80 text-[10px] leading-tight break-words">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {project.services && project.services.length > 0 && (
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[#e21b1b] font-semibold text-xs mb-1 whitespace-nowrap">Services:</h4>
                          <ul className="list-disc list-inside space-y-0.5">
                            {project.services.map((item, idx) => (
                              <li key={idx} className="text-white/80 text-[10px] leading-tight break-words">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {!project.description && !project.deliverables && !project.services && (
                    <p className="text-white/60 text-xs italic text-center w-full mt-2">
                      More details coming soon
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
