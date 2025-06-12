"use client"

import { MessageCircle, Phone, Send } from "lucide-react"

export function FloatingContactBar() {
  const contactMethods = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/8801700000000", // আপনার WhatsApp নম্বর দিন
      color: "bg-green-500 hover:bg-green-600",
      label: "WhatsApp এ মেসেজ করুন",
    },
    {
      name: "Messenger",
      icon: Send,
      href: "https://m.me/yourpage", // আপনার Facebook Page এর Messenger লিংক
      color: "bg-blue-500 hover:bg-blue-600",
      label: "Messenger এ যোগাযোগ করুন",
    },
    {
      name: "Phone",
      icon: Phone,
      href: "tel:+8801700000000", // আপনার ফোন নম্বর
      color: "bg-emerald-500 hover:bg-emerald-600",
      label: "ফোন করুন",
    },
  ]

  return (
    <>
      {/* Mobile Version - Bottom Fixed and Centered */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 dark:border-slate-700 px-4 py-3">
          <div className="flex gap-3">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${method.color} text-white p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg`}
              >
                <method.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Version - Bottom Center Fixed */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 dark:border-slate-700 px-4 py-3">
          <div className="flex gap-3">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${method.color} text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group relative`}
                title={method.label}
              >
                <method.icon className="h-4 w-4" />

                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {method.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-slate-900"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
