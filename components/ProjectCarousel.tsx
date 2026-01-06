"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";

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

// Constants moved outside component to avoid recreation
const rotations = [-15, -8, 0, 8, 15];
const zDepths = [-120, -60, 0, -60, -120];
const scales = [0.85, 0.92, 1, 0.92, 0.85];
const blurs = [8, 1.5, 0, 1.5, 8];
const opacities = [0.6, 0.8, 1, 0.8, 0.6];
const minSwipeDistance = 50;

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate max index based on showing 5 cards at a time
  const maxIndex = useMemo(() => Math.max(0, projects.length - 5), [projects.length]);

  // Memoize visible projects calculation
  const visibleProjects = useMemo(() => {
    const visible: Project[] = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  }, [currentIndex, projects]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSwipeDirection('right');
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setSwipeDirection(null);
    }, 500);
  }, [isTransitioning, maxIndex]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSwipeDirection('left');
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setSwipeDirection(null);
    }, 500);
  }, [isTransitioning, maxIndex]);

  // Auto-scroll carousel with optimized dependencies
  useEffect(() => {
    if (projects.length <= 5 || isHovered || isTransitioning) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      return;
    }

    autoScrollIntervalRef.current = setInterval(() => {
      setSwipeDirection('left');
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setSwipeDirection(null);
      }, 500);
    }, 5000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [projects.length, maxIndex, isHovered, isTransitioning]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  }, [touchStart, touchEnd, goToNext, goToPrevious]);

  const handleDragEnd = useCallback((e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -8000) {
      goToNext();
    } else if (swipe > 8000) {
      goToPrevious();
    }
  }, [goToNext, goToPrevious]);

  // Memoize initial X calculation
  const getInitialX = useCallback((direction: 'left' | 'right' | null) => {
    if (!direction || !isTransitioning) return 0;
    return direction === 'left' ? 400 : -400;
  }, [isTransitioning]);

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <motion.div 
        className="flex justify-center items-center gap-6 md:gap-8 px-12 md:px-20"
        style={{ perspective: '1200px', willChange: 'transform' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        onDragEnd={handleDragEnd}
      >
        {visibleProjects.map((project, index) => {
          const rotationY = rotations[index];
          const zDepth = zDepths[index];
          const cardScale = scales[index];
          const blurAmount = blurs[index];
          const cardOpacity = opacities[index];
          const initialX = getInitialX(swipeDirection);
          const initialOpacity = swipeDirection && isTransitioning 
            ? (index === (swipeDirection === 'left' ? 4 : 0) ? 0 : cardOpacity) 
            : cardOpacity;
          
          return (
            <motion.div
              key={`${project.name}-${index}`}
              initial={{
                x: initialX,
                opacity: initialOpacity,
                scale: cardScale,
                rotateY: rotationY,
                z: zDepth,
              }}
              animate={{ 
                opacity: cardOpacity, 
                scale: cardScale, 
                rotateY: rotationY, 
                z: zDepth,
                x: 0,
              }}
              transition={{ 
                duration: 0.5,
                delay: swipeDirection && isTransitioning ? (index * 0.08) : 0,
                type: "tween",
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                z: 50,
                opacity: 1
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                width: '380px',
                height: '380px',
                flexShrink: 0,
                perspective: '1000px',
                willChange: 'transform, opacity',
                filter: `blur(${blurAmount}px)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
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
                  style={{ pointerEvents: 'none', zIndex: 1, willChange: 'transform' }}
                />
              )}
              
              {/* Card Container with Flip Effect */}
              <motion.div
                className="relative w-full h-full"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(0deg)',
                  willChange: 'transform'
                }}
                whileHover={index >= 1 && index <= 3 ? { rotateY: 180 } : {}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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
                      loading={index <= 2 ? "eager" : "lazy"}
                      priority={index === 2}
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
                      loading="lazy"
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
