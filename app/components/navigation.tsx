import { Bold } from "lucide-react/dist/lucide-react";
import { Button } from "../../components/ui/button";
import React from "react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex justify-center">
            <nav className="flex items-center space-x-8">
              <b><NavLink href="#ideas">Ideas</NavLink></b>
              <b><NavLink href="#resources">Resources</NavLink></b>
              <b><NavLink href="#faqs">FAQs</NavLink></b>
            </nav>
          </div>
          <a href="https://t.me/sui_agent_kit" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#6C5CE7] hover:bg-[#5A4BD5] text-white ml-auto">Join Us</Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm text-gray-600 hover:text-[#6C5CE7] transition-colors">
      {children}
    </a>
  )
}