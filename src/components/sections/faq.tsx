"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "একটি ল্যান্ডিং পেজ তৈরি করতে কতক্ষণ লাগে?",
    answer: "বেশিরভাগ পেজ 24-48 ঘন্টার মধ্যে সম্পন্ন হয়। জটিল গুলিতে 5 কার্যদিবস পর্যন্ত সময় লাগতে পারে।",
  },
  {
    question: "আপনারা কি হোস্টিং প্রদান করেন?",
    answer:
      "আমরা আপনার জন্য হোস্টিং সেটআপ করতে বা আপনার বিদ্যমান হোস্টিং সার্ভিসে ল্যান্ডিং পেজ হোস্ট করতে সাহায্য করি। হোস্টিং খরচ আমাদের ডিজাইন ফি থেকে আলাদা।",
  },
  {
    question: "পেজ ডেলিভারি হওয়ার পরে আমি কি পরিবর্তন করতে পারি?",
    answer: "হ্যাঁ! সমস্ত প্যাকেজে রিভিশন রাউন্ড অন্তর্ভুক্ত রয়েছে এবং প্রয়োজনীয় কোনও অতিরিক্ত পরিবর্তনের জন্য আমরা সহায়তা প্রদান করি।",
  },
  {
    question: "আমার ল্যান্ডিং পেজটি কি মোবাইল ডিভাইসে কাজ করবে?",
    answer: "আমাদের সমস্ত ল্যান্ডিং পেজ সম্পূর্ণরূপে রেসপন্সিভ এবং মোবাইল, ট্যাবলেট ও ডেস্কটপ ডিভাইসের জন্য অপ্টিমাইজ করা।",
  },
  {
    question: "পেমেন্ট কিভাবে করতে হবে?",
    answer: "আমরা bKash, Nagad, এবং ব্যাংক ট্রান্সফার গ্রহণ করি। কাজ শুরুর আগে 50% এবং সম্পূর্ণ হওয়ার পর বাকি 50% পেমেন্ট করতে হবে।",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white dark:bg-slate-900 relative">
      {/* Background Pattern - Fixed with pointer-events-none */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.5)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-6 sm:mb-8"
          >
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6"
          >
            প্রায়শই জিজ্ঞাসিত{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">প্রশ্ন</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            আপনার মনে থাকা সাধারণ প্রশ্নগুলির উত্তর এখানে পাবেন
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card
                  className={`border-2 transition-all duration-300 cursor-pointer overflow-hidden relative z-20 ${
                    openIndex === index
                      ? "border-emerald-500 dark:border-emerald-400 shadow-lg bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20"
                      : "border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md bg-white dark:bg-slate-800"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <CardContent className="p-0">
                    {/* Question */}
                    <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
                      <div className="flex items-start gap-3 sm:gap-4 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors ${
                              openIndex === index
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            {index + 1}
                          </div>
                        </div>
                        <h3
                          className={`text-base sm:text-lg lg:text-xl font-semibold transition-colors ${
                            openIndex === index
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 flex-shrink-0 ml-4 ${
                          openIndex === index
                            ? "rotate-180 text-emerald-600 dark:text-emerald-400"
                            : "text-slate-400 dark:text-slate-500"
                        }`}
                      />
                    </div>

                    {/* Answer */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                        <div className="ml-9 sm:ml-12 border-l-2 border-emerald-200 dark:border-emerald-700 pl-4 sm:pl-6">
                          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
