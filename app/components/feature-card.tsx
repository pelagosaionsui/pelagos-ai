import { LightbulbIcon } from "lucide-react"
import React from "react"

interface FeatureCardProps {
  title: string
  description: string
  gradient: string
}

export function FeatureCard({ title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group relative rounded-xl border border-blue-500/20 bg-black/40 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300">
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
      />

      <div
        className={`inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-r ${gradient} bg-opacity-10`}
      >
        <LightbulbIcon className="h-6 w-6 text-blue-400" />
      </div>

      <h3 className={`mt-4 text-lg font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h3>

      <p className="mt-2 text-sm text-blue-200/60 group-hover:text-blue-200/80 transition-colors">{description}</p>

      <div className="mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

