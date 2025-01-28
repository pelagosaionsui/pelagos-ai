import React from "react";

export function CodeWindow({ content }: { content: string }) {
  return (
    <div className="w-full rounded-lg border border-blue-500/20 bg-black/80 backdrop-blur-sm p-4 shadow-2xl relative group">
      <div className="flex items-center space-x-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <pre className="font-mono text-sm">
        <code className="text-blue-400">{content}</code>
      </pre>
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
    </div>
  )
}

