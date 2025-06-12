import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-700 dark:via-teal-700 dark:to-cyan-700"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            আপনার ব্যবসা বাড়ানোর জন্য{" "}
            <span className="relative">
              প্রস্তুত?
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            শত শত ছোট ব্যবসায় যোগ দিন যারা আমাদের পেশাদার ল্যান্ডিং পেজগুলির সাথে তাদের রূপান্তর বাড়িয়েছে।
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-xs sm:text-sm text-white/80">সন্তুষ্ট ক্লায়েন্ট</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">24h</div>
              <div className="text-xs sm:text-sm text-white/80">দ্রুত ডেলিভারি</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-xs sm:text-sm text-white/80">সাফল্যের হার</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
            <Button
              size="lg"
              className="group text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 bg-white text-emerald-600 hover:bg-white/95 hover:text-emerald-700 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
            >
              আজই আপনার প্রজেক্ট শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 text-white border-2 border-white/50 hover:bg-white hover:text-emerald-600 backdrop-blur-sm font-semibold transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              ফ্রি কনসালটেশন
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm sm:text-base font-medium">৫.০ রেটিং</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="text-sm sm:text-base font-medium">১০০% সন্তুষ্টির গ্যারান্টি</div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="text-sm sm:text-base font-medium">৭ দিন ফ্রি সাপোর্ট</div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden lg:block">
        <div className="w-2 h-16 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden lg:block">
        <div className="w-2 h-16 bg-white/20 rounded-full"></div>
      </div>
    </section>
  )
}
