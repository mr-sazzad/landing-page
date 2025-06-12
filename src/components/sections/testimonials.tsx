import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "সারাহ জনসন",
    business: "জনসন বেকারি",
    content: "আমাদের নতুন ল্যান্ডিং পেজ মাত্র এক মাসে অনলাইন অর্ডার ১৮০% বৃদ্ধি করেছে। ডিজাইনটি সুন্দর এবং অবিশ্বাস্যভাবে দ্রুত লোড হয়!",
    rating: 5,
  },
  {
    name: "মাইক চেন",
    business: "চেন অটো রিপেয়ার",
    content: "সময়মতো পেশাদার কাজ বিতরণ করা হয়েছে। ল্যান্ডিং পেজটি আমাদের আগের চেয়ে বেশি গ্রাহকদের আকর্ষণ করতে সহায়তা করেছে।",
    rating: 5,
  },
  {
    name: "লিসা রদ্রিগেজ",
    business: "রদ্রিগেজ ল ফার্ম",
    content: "চমৎকার যোগাযোগ এবং ফলাফল। নতুন পেজ চালু হওয়ার পর থেকে আমাদের পরামর্শের অনুরোধ তিনগুণ বেড়েছে।",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">আমাদের ক্লায়েন্টরা কী বলেন</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
