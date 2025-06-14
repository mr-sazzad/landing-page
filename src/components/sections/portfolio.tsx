import { Badge } from "@/components/ui/badge"
import { Shield, ShoppingBag, TrendingUp } from "lucide-react"

const portfolioItems = [
  {
    title: "আলওয়ান ফ্যাশন স্টোর",
    result: "অনলাইন পাঞ্জাবি বিক্রয় ৩২০% বৃদ্ধি পেয়েছে",
    category: "ফ্যাশন ও পোশাক",
    percentage: "180%",
    icon: ShoppingBag,
    gradient: "from-emerald-500 to-teal-500",
    description: "ঐতিহ্যবাহী পাঞ্জাবি এবং কুর্তার অনলাইন বিক্রয়",
    link: "https://www.alwan-bd.com",
  },
  {
    title: "ফ্রেশি ড্রিংকস",
    result: "পানীয় অর্ডার ২৮০% বৃদ্ধি পেয়েছে",
    category: "খাদ্য ও পানীয়",
    percentage: "280%",
    icon: TrendingUp,
    gradient: "from-teal-500 to-cyan-500",
    description: "প্রিমিয়াম পানীয় ব্র্যান্ডের অনলাইন বিক্রয়",
    link: "https://www.freshybd.com",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
            আমাদের সাফল্যের গল্প
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            সাম্প্রতিক{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              সফলতার গল্প
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          কীভাবে আমাদের ডিজাইন করা ল্যান্ডিং পেজগুলো ছোট ব্যবসার রূপান্তর ও বিক্রি বাড়াতে সহায়তা করেছে — দেখে নিন।
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 overflow-hidden"
            >
              {/* Content */}
              <div className="relative">
                {/* Icon and Percentage */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <span
                    className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                  >
                    +{item.percentage}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{item.description}</p>

                {/* Result */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">{item.result}</p>

                {/* Category Badge and Details */}
                <div className="flex items-center justify-between">
                  <Badge
                    className={`bg-gradient-to-r ${item.gradient} text-white border-0 hover:shadow-lg transition-shadow duration-300`}
                  >
                    {item.category}
                  </Badge>

                  {/* View Details Arrow */}
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 text-gradient-to-r ${item.gradient} transition-all duration-300 text-sm font-medium`}
                  >
                    <span>বিস্তারিত</span>
                    <svg
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  </div>
                </div>

                {/* Bottom Line Indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient} w-0 group-hover:w-full transition-all duration-500 -mb-8`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-16">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-slate-500 to-slate-600 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                নিরাপত্তার কারণে সীমিত প্রদর্শনী
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                আমাদের ক্লায়েন্টদের গোপনীয়তা এবং নিরাপত্তার কারণে আমরা আমাদের সম্পন্ন করা সমস্ত প্রজেক্ট প্রকাশ্যে প্রদর্শন করতে পারি না। উপরে
                দেখানো প্রজেক্টগুলি আমাদের কাজের একটি ছোট নমুনা মাত্র। আরও বিস্তারিত জানতে এবং আমাদের সম্পূর্ণ পোর্টফোলিও দেখতে সরাসরি
                যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
