'use client';

import { Button } from '../../components/ui/button';
import { RocketIcon, ComputerIcon } from 'lucide-react';
import React from 'react';
import Hyperspeed from './Hyperspeed/Hyperspeed';
import DecryptedText from './DecryptedText/DecryptedText';
import ShinyText from './ShinyText/ShinyText';
import TrueFocus from './TrueFocus/TrueFocus';
import { Logo } from './Logo';
import { CodeSnippet } from './CodeSnippet';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* <ShinyText
            text="Sui Agent Kit"
            disabled={false}
            speed={1}
            className="text-6xl font-bold tracking-tight"
          /> */}
          <h1
            className="text-6xl tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] filter"
            style={{ filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.4))' }}
          >
            Sui Agent Kit
          </h1>

          <h1
            className="text-3xl tracking-tight text-white drop-shadow-[0_4px_8px_rgba(108,92,231,0.8)] filter drop-shadow-glow"
            style={{ filter: 'drop-shadow(0 0 12px rgba(108,92,231,0.6))' }}
          >
            By Pelagos AI
          </h1>

          <p className="text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
            The Autonomous and Composable AI Agent Framework on Sui
          </p>

          <CodeSnippet />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com/pelagosaionsui/sui-agent-kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#6C5CE7] hover:bg-[#5A4BD5] text-white w-full sm:w-auto"
              >
                <RocketIcon className="mr-2 h-4 w-4" />
                START
              </Button>
            </a>
            <a
              href="https://pelagos-nextjs-wallet-langchain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white hover:bg-slate-200 text-[#6C5CE7] w-full sm:w-auto"
              >
                <ComputerIcon className="mr-2 h-4 w-4" />
                DEMO
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
