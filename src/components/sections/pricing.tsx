"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Shield, Zap } from "lucide-react"

const features = [
  {
    text: "কাস্টম ডিজাইন ল্যান্ডিং পেজ",
    icon: Zap,
  },
  {
    text: "মোবাইল রেসপনসিভ ডিজাইন",
    icon: null,
  },
  {
    text: "এসইও অপটিমাইজেশন",
    icon: null,
  },
  {
    text: "কন্টাক্ট ফর্ম ইন্টিগ্রেশন",
    icon: null,
  },
  {
    text: "৩টি ফ্রি রিভিশন",
    icon: null,
  },
  {
    text: "৭ দিন ফ্রি সাপোর্ট",
    icon: Shield,
  },
  {
    text: "২৪-৪৮ ঘন্টায় ডেলিভারি",
    icon: Clock,
  },
]

const additionalServices = [
  "অতিরিক্ত রিভিশন - আলোচনা সাপেক্ষে",
  "নতুন সেকশন যোগ - আলোচনা সাপেক্ষে",
  "বিশেষ ইন্টিগ্রেশন - আলোচনা সাপেক্ষে",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.5)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4"
          >
            আমাদের প্রাইসিং
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            সহজ ও{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              স্বচ্ছ মূল্য
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            আপনার ব্যবসার জন্য পারফেক্ট প্যাকেজ - কোন লুকানো খরচ নেই
          </motion.p>
        </div>

        {/* Main Pricing Section - Desktop Optimized */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">কেন আমাদের বেছে নিবেন?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">১০০% কাস্টম ডিজাইন</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">কোন টেমপ্লেট ব্যবহার করি না</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">দ্রুত ডেলিভারি</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">২৪-৪৮ ঘন্টায় সম্পন্ন</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">আজীবন সাপোর্ট</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">যেকোনো সমস্যায় আমরা আছি</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Money Back Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-emerald-600" />
                <h4 className="font-bold text-emerald-800 dark:text-emerald-300">১০০% মানি ব্যাক গ্যারান্টি</h4>
              </div>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                সন্তুষ্ট না হলে সম্পূর্ণ টাকা ফেরত। কোন প্রশ্ন করা হবে না।
              </p>
            </motion.div>
          </motion.div>

          {/* Center Column - Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden h-full">
              {/* Header */}
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">প্রফেশনাল ল্যান্ডিং পেজ</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    ১০০০
                  </span>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">৳</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">একবার পেমেন্ট</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300">সম্পূর্ণ ল্যান্ডিং পেজ সলিউশন</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">যা যা পাবেন:</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300 flex-1">{feature.text}</span>
                      {feature.icon && <feature.icon className="h-4 w-4 text-emerald-500 flex-shrink-0" />}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Additional Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700"
              >
                <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4" />
                  অতিরিক্ত সেবা:
                </h4>
                <ul className="space-y-1">
                  {additionalServices.map((service, index) => (
                    <li key={index} className="text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <Button className="w-full text-lg py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg rounded-md">
                  অর্ডার দিতে আমাদের মেসেজ করুন
                </Button>
              </motion.div>

              {/* Bottom Line Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            </div>
          </motion.div>

          {/* Right Column - Payment & Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Process Steps */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">কাজের প্রক্রিয়া</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "অর্ডার প্লেস করুন",
                    desc: "আপনার প্রয়োজনীয়তা জানান",
                    gradient: "from-emerald-500 to-teal-500",
                  },
                  { step: "2", title: "ডিজাইন শুরু", desc: "২৪ ঘন্টার মধ্যে কাজ শুরু", gradient: "from-teal-500 to-cyan-500" },
                  { step: "3", title: "ডেলিভারি", desc: "৪৮ ঘন্টার মধ্যে সম্পন্ন", gradient: "from-cyan-500 to-blue-500" },
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${process.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                    >
                      {process.step}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">{process.title}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{process.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-700"
            >
              <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-3">দ্রুত যোগাযোগ</h4>
              <div className="space-y-2">
                <p className="text-sm text-emerald-700 dark:text-emerald-400">📱 হোয়াটসঅ্যাপ: +8801613-980323</p>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">📧 ইমেইল: ekpata@gmail.com</p>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">⏰ সাপোর্ট: ২৪/৭</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
