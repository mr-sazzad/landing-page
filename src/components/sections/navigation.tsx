"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ModeToggle } from "../ui/mode-toggle"
import { Logo } from "./logo"

const navLinks = [
  { name: "সেবাসমূহ", href: "#services" },
  { name: "পোর্টফোলিও", href: "#portfolio" },
  { name: "মূল্য", href: "#pricing" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <ModeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 py-2 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-700/50 transition-colors flex items-center justify-between"
                onClick={closeMenu}
              >
                <span>{link.name}</span>
                <ArrowRight className="h-4 w-4 opacity-50" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
