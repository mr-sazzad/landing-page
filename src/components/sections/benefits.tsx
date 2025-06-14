"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, DollarSign, TrendingUp, Zap } from "lucide-react"
import { useState } from "react"

const benefits = [
  {
    title: "প্রমাণিত ফলাফল",
    description: "আমাদের ল্যান্ডিং পেজগুলি ব্যবসাগুলিকে 300% পর্যন্ত বিক্রি বাড়াতে সহায়তা করেছে।",
    icon: TrendingUp,
    highlight: "300%",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "দ্রুত ডেলিভারি",
    description: "24-48 ঘন্টার মধ্যে আপনার পেশাদার ল্যান্ডিং পেজ পান।",
    icon: Clock,
    highlight: "24-48h",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    title: "সাশ্রয়ী মূল্য",
    description: "বড় এজেন্সির তুলনায় অর্ধেক খরচে উন্নত মানের ল্যান্ডিং পেজ পাবেন।",
    icon: DollarSign,
    highlight: "50%",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "ঝামেলা নেই",
    description: "আমরা সমস্ত প্রযুক্তিগত ঝামেলা পরিচালনা করি - আপনি কেবল আপনার সামগ্রী সরবরাহ করুন।",
    icon: Zap,
    highlight: "100%",
    gradient: "from-blue-500 to-violet-500",
  },
]

export function BenefitsSection() {
  const [showConsultationDialog, setShowConsultationDialog] = useState(false)

  return (
    <>
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              কেন ছোট ব্যবসাগুলো{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                আমাদের বেছে নেয়
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              আমাদের অভিজ্ঞ টিম আপনার ব্যবসাকে অনলাইনে সফল হতে সাহায্য করার জন্য প্রস্তুত
            </p>
          </div>

          {/* Benefits Cards - Redesigned */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 opacity-100"></div>

                {/* Highlight Circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title with Highlight */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
                    <span
                      className={`text-xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}
                    >
                      {benefit.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section - Enhanced */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="absolute left-0 top-0 h-full"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                      <circle cx="0" cy="0" r="1" fill="white"></circle>
                      <circle cx="50" cy="50" r="1" fill="white"></circle>
                      <circle cx="100" cy="0" r="1" fill="white"></circle>
                      <circle cx="0" cy="100" r="1" fill="white"></circle>
                      <circle cx="100" cy="100" r="1" fill="white"></circle>
                    </pattern>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"></rect>
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  আপনার ব্যবসার সাফল্যের জন্য প্রস্তুত?
                </h3>
                <p className="text-white/90 text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
                  আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার ব্যবসার জন্য একটি কার্যকর ল্যান্ডিং পেজ তৈরি করুন।
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-6 bg-white text-emerald-600 font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-50"
                    onClick={() => setShowConsultationDialog(true)}
                  >
                    ফ্রি কনসালটেশন বুক করুন
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showConsultationDialog} onOpenChange={setShowConsultationDialog}>
        <DialogContent className="sm:max-w-[400px] border border-emerald-100/50 dark:border-emerald-900/20 shadow-lg overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-xl"></div>

          <DialogHeader className="space-y-3 relative z-10">
            <div className="mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md shadow-emerald-500/20 dark:shadow-emerald-500/10 ring-4 ring-white/80 dark:ring-slate-800/80">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ফ্রি কনসালটেশন বুক করুন
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-slate-600 dark:text-slate-400 max-w-[280px] mx-auto">
              আপনার ব্যবসার চাহিদা নিয়ে আলোচনা করতে নিচের যেকোনো মাধ্যমে যোগাযোগ করুন
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-3 relative z-10">
            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://calendly.com/social-sazzad/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2.5 px-4 rounded-md transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="h-4 w-4" />
                <span>অনলাইন অ্যাপয়েন্টমেন্ট বুক করুন</span>
              </a>
            </div>

            <div className="pt-1 pb-1">
              <p className="text-xs text-center text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 py-2 px-3 rounded-md border border-slate-200/50 dark:border-slate-700/50">
                <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
                  ৩০ মিনিটের ফ্রি কনসালটেশন
                </span>{" "}
                - আপনার ব্যবসার চাহিদা বুঝতে সাহায্য করবে
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
