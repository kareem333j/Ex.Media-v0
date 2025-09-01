"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls 200px
      setVisible(window.scrollY > 200)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        size="icon"
        aria-label="Scroll to top"
        title="إلي الأعلى"
        className="rounded-full shadow-lg"
        onClick={handleClick}
      >
        <ArrowUp className="size-5" />
      </Button>
    </div>
  )
}
