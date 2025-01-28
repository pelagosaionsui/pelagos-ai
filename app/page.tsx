import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { Background } from "./components/background"
import React from "react"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
        <Background />
        <Navigation />
        <Hero />
    </div>
  )
}

