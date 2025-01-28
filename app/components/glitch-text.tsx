"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import React from "react"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export function GlitchText({ children, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="relative">
      <div className={cn("relative z-10", className)}>{children}</div>
      {isGlitching && (
        <>
          <div className={cn("absolute inset-0 text-blue-500 translate-x-[1px] translate-y-[-1px]", className)}>
            {children}
          </div>
          <div className={cn("absolute inset-0 text-cyan-500 translate-x-[-1px] translate-y-[1px]", className)}>
            {children}
          </div>
        </>
      )}
    </div>
  )
}

