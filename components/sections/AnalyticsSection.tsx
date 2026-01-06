"use client";

import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import {
  Users,
  DollarSign,
  TrendingUp,
  Share2,
  Activity,
  BarChart3,
  MousePointerClick,
  Clock,
  Target,
  MessageSquare,
} from "lucide-react";

export default function AnalyticsSection() {
  return (
    <section className="py-20 relative grid-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-3">
            Analytics
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">Decoding Web3 Impact with Analytics</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Data-driven insights to measure and optimize your Web3 growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { value: "200+", label: "Satisfied Customers", icon: Users },
            { value: "195+ MILLION", label: "Raised By Clients", icon: DollarSign },
            { value: "10+ YEARS", label: "Marketing Experience", icon: TrendingUp },
            { value: "150+", label: "Network Partners", icon: Share2 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 cursor-pointer group text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#880c0c]/20 to-[#e21b1b]/20">
                  <stat.icon className="text-[#e21b1b]" size={24} />
                </div>
              </div>
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:text-[#e21b1b] transition-colors"
              >
                {stat.value}
              </motion.h3>
              <p className="text-white text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <GlassCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">Engagement Metrics</h3>
              <Activity className="text-[#e21b1b]" size={28} />
            </div>
            <div className="space-y-6">
              {[
                { label: "Daily Active Users", value: 85, color: "#e21b1b" },
                { label: "Message Engagement", value: 72, color: "#aa0f0f" },
                { label: "Content Interactions", value: 91, color: "#880c0c" },
              ].map((metric, index) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className="text-white font-semibold">{metric.value}%</span>
                  </div>
                  <div className="relative h-2 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: metric.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">Performance Metrics</h3>
              <BarChart3 className="text-[#e21b1b]" size={28} />
            </div>
            <div className="space-y-6">
              {[
                { icon: MousePointerClick, label: "Click-Through Rate", value: "12.4%", trend: "up" },
                { icon: Clock, label: "Avg. Session Duration", value: "8.5 min", trend: "up" },
                { icon: Target, label: "Conversion Rate", value: "6.8%", trend: "up" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#880c0c]/20 to-[#e21b1b]/20">
                      <metric.icon className="text-[#e21b1b]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300 text-base">{metric.label}</p>
                      <p className="text-white text-2xl font-bold group-hover:text-[#e21b1b] transition-colors">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                  <TrendingUp className="text-green-400" size={20} />
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        <GlassCard className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Growth Trajectory</h3>
              <p className="text-gray-400 text-base">Last 6 months performance</p>
            </div>
            <div className="flex gap-2">
              {["6M", "3M", "1M"].map((period) => (
                <button
                  key={period}
                  className="px-4 py-2 rounded-lg text-base font-medium bg-[#e21b1b]/10 text-[#e21b1b] hover:bg-[#e21b1b]/20 transition-colors"
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="relative h-64 flex items-end justify-between gap-2">
            {[65, 72, 68, 85, 78, 92].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex-1 bg-gradient-to-t from-[#880c0c] via-[#aa0f0f] to-[#e21b1b] rounded-t-lg cursor-pointer group relative"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  {height}%
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Community Growth",
              description: "3x increase in active community members over the past quarter",
              icon: Users,
              stat: "250%",
            },
            {
              title: "Engagement Boost",
              description: "Significant improvement in daily engagement metrics",
              icon: MessageSquare,
              stat: "87%",
            },
            {
              title: "ROI Improvement",
              description: "Better return on investment across all marketing channels",
              icon: DollarSign,
              stat: "340%",
            },
          ].map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#880c0c]/20 to-[#e21b1b]/20">
                  <insight.icon className="text-[#e21b1b]" size={24} />
                </div>
                <span className="text-2xl font-bold text-[#e21b1b]">{insight.stat}</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#e21b1b] transition-colors">
                {insight.title}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
