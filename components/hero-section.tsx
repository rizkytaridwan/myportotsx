"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Database, FileSpreadsheet, BarChart3 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const { t } = useLanguage()
  const fullText = t("hero.title")

  useEffect(() => {
    let index = 0
    setDisplayText("") // Reset display text when language changes
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText]) // Added fullText as dependency

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Database className="h-12 w-12 text-primary/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <FileSpreadsheet className="h-16 w-16 text-primary/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
          <BarChart3 className="h-14 w-14 text-primary/20" />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {t("hero.subtitle")}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg animate-pulse-glow"
              onClick={scrollToAbout}
            >
              {t("hero.viewWork")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("hero.getInTouch")}
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up mb-16"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">{t("hero.yearsExp")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">{t("hero.projectsCompleted")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98.8%</div>
              <div className="text-muted-foreground">{t("hero.accuracyRate")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  )
}
