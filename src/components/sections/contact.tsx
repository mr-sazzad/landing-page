"use client"

import { Mail, MessageCircle, Phone, Send } from "lucide-react"
import { useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

const contactMethods = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/8801613980323",
    color: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    label: "WhatsApp এ মেসেজ করুন",
    priority: "high",
  },
  {
    name: "Email",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=main.sazzad@gmail.com&su=সাপোর্ট দরকার&body=আমি কিছু জানতে চাচ্ছি...",
    color: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    label: "ইমেইল পাঠান",
    priority: "high",
  },
  {
    name: "Messenger",
    icon: Send,
    href: "https://m.me/yourpage",
    color: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    label: "Messenger এ যোগাযোগ করুন",
    priority: "medium",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+8801613980323",
    color: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
    label: "ফোন করুন",
    priority: "medium",
  },
]

export const FloatingContactBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)

  useEffect(() => {
    // Initial visibility after a delay
    const initialTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Highlight effect after another delay
    const highlightTimeout = setTimeout(() => {
      setIsHighlighted(true)
    }, 4000)

    // Stop highlight after some time
    const stopHighlightTimeout = setTimeout(() => {
      setIsHighlighted(false)
    }, 8000)

    return () => {
      clearTimeout(initialTimeout)
      clearTimeout(highlightTimeout)
      clearTimeout(stopHighlightTimeout)
    }
  }, [])

  return (
    <>
      {/* Enhanced Mobile Version */}
      <TooltipProvider>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <div
            className={`
      relative group
      ${isVisible ? "animate-float" : "opacity-0 translate-y-10"}
      ${isHighlighted ? "animate-pulse" : ""}
    `}
          >
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

            {/* Main Container */}
            <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full shadow-2xl px-3 py-2 border border-white/20 dark:border-slate-700/50">

              <div className="flex gap-2">
                {contactMethods.map((method, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                  ${method.color} text-white p-2.5 rounded-full 
                  flex items-center justify-center transition-all duration-300 
                  hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl
                  relative overflow-hidden group/button
                `}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>

                        <method.icon
                          className={`h-4 w-4 relative z-10 z`}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-slate-900 text-white border-slate-700">
                      <p className="text-sm">{method.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TooltipProvider>

      {/* Enhanced Desktop Version */}
      <TooltipProvider>
        <div className="hidden md:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div
            className={`
      relative group
      ${isVisible ? "animate-float" : "opacity-0 translate-y-10"}
      ${isHighlighted ? "animate-attention" : ""}
    `}
          >
            {/* Enhanced Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse delay-1000"></div>

            {/* Main Container */}
            <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full shadow-2xl px-6 py-4 border border-white/30 dark:border-slate-700/50">
              <div className="flex gap-4">
                {contactMethods.map((method, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                  ${method.color} text-white p-4 rounded-full 
                  transition-all duration-300 hover:scale-110 hover:shadow-2xl 
                  group/button relative overflow-hidden
                `}
                      >
                        {/* Enhanced Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>

                        <method.icon
                          className={`h-5 w-5 relative z-10 ${method.priority === "high" ? "animate-pulse" : ""}`}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="font-medium">{method.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </>
  )
}
