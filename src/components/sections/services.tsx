"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Clock, Search, Smartphone, TrendingUp, Users, Zap } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Zap,
    title: "হাই-কনভার্টিং ডিজাইন",
    description: "আমাদের কাস্টম-ডিজাইন ল্যান্ডিং পেজগুলো তৈরি করা হয় সর্বোচ্চ কনভার্শন ও ইউজার এনগেজমেন্ট নিশ্চিত করার জন্য।",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    darkBgGradient: "from-emerald-900/20 to-teal-900/20",
  },
  {
    icon: Smartphone,
    title: "মোবাইল-ফার্স্ট অ্যাপ্রোচ",
    description: "মোবাইলকে অগ্রাধিকার দিয়ে তৈরি প্রতিটি পেজ, যেটা সব স্ক্রিনে নিখুঁতভাবে কাজ করে।",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-50 to-cyan-50",
    darkBgGradient: "from-teal-900/20 to-cyan-900/20",
  },
  {
    icon: Search,
    title: "এসইও অপটিমাইজড",
    description: "আপনার পেজ যেন গুগলে সহজেই খুঁজে পাওয়া যায় — সেই লক্ষ্যেই আমরা ব্যবহার করি সর্বোচ্চ মানের এসইও কৌশল।",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    darkBgGradient: "from-cyan-900/20 to-blue-900/20",
  },
  {
    icon: Clock,
    title: "বিদ্যুৎগতি সম্পন্ন",
    description: "অত্যন্ত দ্রুতগতির লোডিং — ৯০-এর উপরে PageSpeed স্কোর, যাতে দর্শক কখনও অপেক্ষা না করে।",
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    darkBgGradient: "from-blue-900/20 to-indigo-900/20",
  },
  {
    icon: TrendingUp,
    title: "অ্যানালিটিক্স ইন্টিগ্রেশন",
    description: "অ্যানালিটিক্স ইন্টিগ্রেশন — ভিজিটরদের আচরণ সহজেই ট্র্যাক করুন বিল্ট-ইন ট্র্যাকিং টুলস দিয়ে।",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    darkBgGradient: "from-indigo-900/20 to-purple-900/20",
  },
  {
    icon: Users,
    title: "চলমান সহায়তা",
    description: "ডেলিভারির পরও আমরা পাশে আছি — ৩০ দিনের ফ্রি সাপোর্ট ও মেইনটেন্যান্স প্রদান করা হয়।",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    darkBgGradient: "from-purple-900/20 to-pink-900/20",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white dark:bg-slate-900">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-300/10 to-teal-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
              আমাদের সেবাসমূহ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              আপনার ব্যবসার{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  যা যা প্রয়োজন
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            ডিজাইন থেকে শুরু করে চালু করা পর্যন্ত, আমরা আছি পুরো পথেই — আপনার ফোকাস থাকুক ব্যবসায়।
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} dark:${service.darkBgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <Card
                className={`relative h-full border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden rounded-2xl`}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="h-full w-full bg-white dark:bg-slate-800 rounded-2xl"></div>
                </div>

                <div className="relative p-6 sm:p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 flex-grow">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
