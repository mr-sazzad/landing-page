"use client"

import { Award, Check, Clock, Shield, Sparkles, Star, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section
      id="cta-section"
      className="relative py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Background Pattern - Similar to Hero Section */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Geometric Shapes - Similar to Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-teal-400/15 to-emerald-500/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 rotate-45 blur-sm animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay - Similar to Hero Section */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.5)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700 px-4 py-2 text-sm font-medium rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />🚀 আপনার ব্যবসা বাড়ানোর সময়
            </div>
          </div>

          {/* Main Heading */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            আপনার ব্যবসা বাড়ানোর জন্য{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                প্রস্তুত?
              </span>
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            শত শত ছোট ব্যবসার সঙ্গে যুক্ত হোন, যারা আমাদের প্রোফেশনাল ল্যান্ডিং পেজ ব্যবহার করে আরও বেশি গ্রাহক পেয়েছে ও বিক্রি বাড়িয়েছে।
          </p>

          {/* Enhanced Stats Section - Similar to Hero Section */}
          <div
            className={`grid sm:grid-cols-3 gap-2 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">98%</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">সাফল্যের হার</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:border-teal-200 dark:hover:border-teal-700 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">24h</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">দ্রুত ডেলিভারি</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:border-cyan-200 dark:hover:border-cyan-700 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">20+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">সন্তুষ্ট ক্লায়েন্ট</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center gap-4 sm:gap-6 mt-12 sm:mt-16 transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100/50 dark:border-emerald-900/30 shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">৫.০ রেটিং</span>
            </div>

            <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100/50 dark:border-emerald-900/30 shadow-sm">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                ১০০% সন্তুষ্টির গ্যারান্টি
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100/50 dark:border-emerald-900/30 shadow-sm">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">৭ দিন ফ্রি সাপোর্ট</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
