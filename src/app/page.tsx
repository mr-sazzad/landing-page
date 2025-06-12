import { BenefitsSection } from "@/components/sections/benefits"
import { CTASection } from "@/components/sections/cta"
import { FAQSection } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { HeroSection } from "@/components/sections/hero"
import { Navigation } from "@/components/sections/navigation"
import { PortfolioSection } from "@/components/sections/portfolio"
import { PricingSection } from "@/components/sections/pricing"
import { ServicesSection } from "@/components/sections/services"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <PortfolioSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
