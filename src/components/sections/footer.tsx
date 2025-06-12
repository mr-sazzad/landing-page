import { Logo } from "./logo"

const footerSections = [
  {
    title: "সেবাসমূহ",
    links: ["ল্যান্ডিং পেজ ডিজাইন", "মোবাইল অপটিমাইজেশন", "এসইও সার্ভিস", "অ্যানালিটিক্স সেটআপ"],
  },
  {
    title: "কোম্পানি",
    links: ["আমাদের সম্পর্কে", "পোর্টফোলিও", "সাক্ষাৎকার", "যোগাযোগ"],
  },
  {
    title: "যোগাযোগ",
    links: ["hello@landingcraft.com", "(555) 123-4567", "সোম-শুক্র সকাল ৯টা-সন্ধ্যা ৬টা ইএসটি"],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400">ছোট ব্যবসার জন্য পেশাদার ল্যান্ডিং পেজ যা দর্শকদের গ্রাহকদের মধ্যে রূপান্তর করে।</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="hover:text-white transition-colors cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LandingCraft Pro Solutions। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}
