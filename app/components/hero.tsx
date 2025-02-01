import { Button } from '../../components/ui/button';
import { RocketIcon, Brain } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold tracking-tight">Sui Agent Kit</h1>

        <p className="text-xl text-gray-600">
          The Autonomous and Composable AI Agent Framework on Sui
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="https://github.com/pelagosaionsui"
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
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-sm text-gray-500">
        CA: Friendly reminder, we do not have CA yet. Please be cautious.
      </div>
    </div>
  );
}
