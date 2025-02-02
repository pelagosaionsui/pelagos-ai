import { Bold } from 'lucide-react/dist/lucide-react';
import { Button } from '../../components/ui/button';
import React from 'react';
import { Send } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="w-1/6"></div> {/* Spacer */}
          <nav className="flex items-center space-x-8">
            <b>
              <NavLink href="#ideas">Ideas</NavLink>
            </b>
            <b>
              <NavLink href="#resources">Resources</NavLink>
            </b>
            <b>
              <NavLink href="#faqs">FAQs</NavLink>
            </b>
          </nav>
          <div className="w-1/6 hidden sm:flex justify-end">
            <a
              href="https://t.me/sui_agent_kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#6C5CE7] hover:bg-[#5A4BD5] text-white">
                <Send className="w-5 h-5" />
              </Button>
            </a>
          </div>
          {/* Mobile Telegram button */}
          <div className="fixed bottom-6 right-6 sm:hidden">
            <a
              href="https://t.me/sui_agent_kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#6C5CE7] hover:bg-[#5A4BD5] text-white rounded-full shadow-lg">
                <Send className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-white hover:text-[#6C5CE7] transition-colors drop-shadow-[0_4px_8px_rgba(108,92,231,0.8)]"
      style={{ filter: 'drop-shadow(0 0 12px rgba(108,92,231,0.6))' }}
    >
      {children}
    </a>
  );
}
