"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, MessageCircle, Sparkles, Target, Zap } from "lucide-react"
import { useMemo, useState } from "react"

export function HeroSection() {
  const [showDialog, setShowDialog] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Memoize animation variants to prevent recreation
  const animationVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    [],
  )

  // Disable animations if user prefers reduced motion
  const getAnimationProps = (delay = 0) => {
    if (shouldReduceMotion) {
      return {}
    }
    return {
      initial: "hidden",
      animate: "visible",
      variants: animationVariants,
      transition: { duration: 0.6, delay },
    }
  }

  const handleStartProject = () => {
    setShowDialog(true)
  }

  const statsData = useMemo(
    () => [
      {
        icon: Target,
        number: "২০+",
        text: "প্রজেক্ট সম্পন্ন",
        gradient: "from-emerald-500 to-teal-500",
        bgGradient: "from-emerald-500/10 to-teal-500/10",
        hoverBorder: "hover:border-emerald-200 dark:hover:border-emerald-700",
      },
      {
        icon: Sparkles,
        number: "৯৮%",
        text: "ক্লায়েন্ট সন্তুষ্টি",
        gradient: "from-teal-500 to-cyan-500",
        bgGradient: "from-teal-500/10 to-cyan-500/10",
        hoverBorder: "hover:border-teal-200 dark:hover:border-teal-700",
      },
      {
        icon: Zap,
        number: "৪৮ ঘন্টা",
        text: "গড় ডেলিভারি",
        gradient: "from-cyan-500 to-blue-500",
        bgGradient: "from-cyan-500/10 to-blue-500/10",
        hoverBorder: "hover:border-cyan-200 dark:hover:border-cyan-700",
      },
    ],
    [],
  )

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-28 xl:py-36 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Optimized Background Pattern */}
        <div className="absolute inset-0 opacity-30 will-change-transform">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        </div>

        {/* Reduced floating shapes for better performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-teal-400/15 to-emerald-500/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div {...getAnimationProps(0)} className="inline-flex items-center mb-6 sm:mb-8">
              <Badge className="inline-flex items-center bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700 px-4 py-2 text-sm font-medium rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />🚀 প্রফেশনাল ল্যান্ডিং পেজ
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              {...getAnimationProps(0.2)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 leading-tight"
            >
              আরও বেশি ভিজিটরকে{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  গ্রাহকে রূপান্তর
                </span>
              </span>{" "}
              করুন
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...getAnimationProps(0.4)}
              className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              আপনার ছোট ব্যবসার জন্য একটি হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি করুন। প্রফেশনাল ডিজাইন, দ্রুত লোডিং, এবং মোবাইল অপটিমাইজড।
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...getAnimationProps(0.6)}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 justify-center items-center"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={handleStartProject}
              >
                আপনার প্রজেক্ট শুরু করুন
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div {...getAnimationProps(0.8)} className="grid sm:grid-cols-3 gap-2 max-w-4xl mx-auto">
              {statsData.map((stat, index) => (
                <div key={index} className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                  ></div>
                  <div
                    className={`relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 ${stat.hoverBorder} transition-all duration-300`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-full`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{stat.text}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[400px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-emerald-200/50 dark:border-emerald-800/50 overflow-hidden">
          <div className="relative z-10">
            <DialogHeader className="space-y-2">
              <div className="mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <DialogTitle className="text-xl font-bold text-center text-slate-900 dark:text-white">
                আমাদের সাথে যোগাযোগ করুন
              </DialogTitle>
              <DialogDescription className="text-center text-sm text-slate-600 dark:text-slate-400">
                আপনার প্রজেক্ট সম্পর্কে আলোচনা করতে নিচের কন্টাক্ট বার ব্যবহার করুন
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
