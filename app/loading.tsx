"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Loading")

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Loading...") return "Loading"
        return prev + "."
      })
    }, 500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* EX.MEDIA Logo */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider animate-fade-in">EX.MEDIA</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto animate-pulse" />
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          {/* Spinning Logo */}
          <div className="relative mx-auto w-16 h-16 animate-spin">
            <div className="absolute inset-0 border-4 border-gray-600 rounded-full" />
            <div
              className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin"
              style={{ animationDuration: "1s" }}
            />
          </div>

          {/* Loading Text */}
          <p className="text-xl text-gray-300 font-light animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {loadingText}
          </p>

          {/* Progress Bar */}
          <div className="w-64 mx-auto space-y-2">
            <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 text-center">{Math.round(Math.min(progress, 100))}%</p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm animate-fade-in" style={{ animationDelay: "1s" }}>
          Creative Media Solutions
        </p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-yellow-400/30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-yellow-400/30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-yellow-400/30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-yellow-400/30" />
    </div>
  )
}
