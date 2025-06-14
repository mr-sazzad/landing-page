"use client"

import { MessageCircle, Phone, Send } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingContactBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)

  // Add a slight delay before showing the animation for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Add periodic highlight effect
    const highlightInterval = setInterval(() => {
      setIsHighlighted(true)
      setTimeout(() => setIsHighlighted(false), 2000)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearInterval(highlightInterval)
    }
  }, [])

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/8801613980323", // আপনার WhatsApp নম্বর দিন
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
      href: "tel:+8801613980323", // আপনার ফোন নম্বর
      color: "bg-emerald-500 hover:bg-emerald-600",
      label: "ফোন করুন",
    },
  ]

  return (
    <>
      {/* Mobile Version - Bottom Fixed and Centered */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div
          className={`
            bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full 
            shadow-lg px-3 py-2 relative
            ${isVisible ? "animate-float" : "opacity-0"}
            ${isHighlighted ? "animate-attention" : ""}
            before:absolute before:inset-0 before:rounded-full 
            before:border-2 before:border-transparent before:animate-border-rainbow
            before:z-[-1]
          `}
        >
          <div className="flex gap-2">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${method.color} text-white p-2 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg`}
              >
                <method.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Version - Bottom Center Fixed */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className={`
            bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full 
            shadow-lg px-4 py-3 relative
            ${isVisible ? "animate-float" : "opacity-0"}
            ${isHighlighted ? "animate-attention" : ""}
            before:absolute before:inset-0 before:rounded-full 
            before:border-2 before:border-transparent before:animate-border-rainbow
            before:z-[-1]
          `}
        >
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
