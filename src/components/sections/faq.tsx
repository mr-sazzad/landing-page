"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "একটি ল্যান্ডিং পেজ তৈরি করতে কতক্ষণ লাগে?",
    answer: "বেশিরভাগ প্রকল্প 24-48 ঘন্টার মধ্যে সম্পন্ন হয়। জটিল প্রকল্পগুলিতে 5 কার্যদিবস পর্যন্ত সময় লাগতে পারে।",
  },
  {
    question: "আপনারা কি হোস্টিং প্রদান করেন?",
    answer:
      "আমরা আপনাকে হোস্টিং সেট আপ করতে বা আপনার বিদ্যমান হোস্টিং প্রদানকারীর কাছে স্থাপন করতে সহায়তা করতে পারি। হোস্টিং খরচ আমাদের ডিজাইন ফি থেকে আলাদা।",
  },
  {
    question: "পেজ ডেলিভারি হওয়ার পরে আমি কি পরিবর্তন অনুরোধ করতে পারি?",
    answer: "হ্যাঁ! সমস্ত প্যাকেজে রিভিশন রাউন্ড অন্তর্ভুক্ত রয়েছে এবং প্রয়োজনীয় কোনও অতিরিক্ত পরিবর্তনের জন্য আমরা চলমান সহায়তা প্রদান করি।",
  },
  {
    question: "আমার ল্যান্ডিং পেজটি কি মোবাইল ডিভাইসে কাজ করবে?",
    answer: "আমাদের সমস্ত ল্যান্ডিং পেজ সম্পূর্ণরূপে প্রতিক্রিয়াশীল এবং মোবাইল, ট্যাবলেট এবং ডেস্কটপ ডিভাইসের জন্য অপ্টিমাইজ করা হয়েছে।",
  },
  {
    question: "আপনারা কি কন্টেন্ট তৈরিতে সহায়তা করেন?",
    answer:
      "আমরা কন্টেন্ট কাঠামো এবং কপিরাইটিং সেরা অনুশীলন সম্পর্কে নির্দেশনা দিতে পারি। পেশাদার কপিরাইটিং একটি অ্যাড-অন পরিষেবা হিসাবে উপলব্ধ।",
  },
  {
    question: "পেমেন্ট কিভাবে করতে হবে?",
    answer: "আমরা bKash, Nagad, এবং ব্যাংক ট্রান্সফার গ্রহণ করি। প্রকল্প শুরুর আগে 50% এবং সম্পূর্ণ হওয়ার পর বাকি 50% পেমেন্ট করতে হবে।",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-6 sm:mb-8">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            প্রায়শই জিজ্ঞাসিত{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">প্রশ্ন</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            আপনার মনে থাকা সাধারণ প্রশ্নগুলির উত্তর এখানে পাবেন
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
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
                          openIndex === index ? "text-slate-900 dark:text-white" : "text-slate-800 dark:text-slate-200"
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
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                      <div className="ml-9 sm:ml-12 border-l-2 border-emerald-200 dark:border-emerald-700 pl-4 sm:pl-6">
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 dark:from-emerald-500/5 dark:via-teal-500/5 dark:to-cyan-500/5 rounded-2xl p-6 sm:p-8 lg:p-12 border border-emerald-200/50 dark:border-emerald-700/50 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              আরও প্রশ্ন আছে?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6">
              আমাদের সাথে সরাসরি যোগাযোগ করুন। আমরা আপনার সব প্রশ্নের উত্তর দিতে প্রস্তুত।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                WhatsApp এ যোগাযোগ করুন
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-semibold rounded-xl transition-all duration-300">
                ইমেইল করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
