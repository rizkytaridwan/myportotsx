"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Clock, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      icon: Award,
      title: t("about.achievement1.title"),
      description: t("about.achievement1.desc"),
    },
    {
      icon: Clock,
      title: t("about.achievement2.title"),
      description: t("about.achievement2.desc"),
    },
    {
      icon: Target,
      title: t("about.achievement3.title"),
      description: t("about.achievement3.desc"),
    },
    {
      icon: CheckCircle,
      title: t("about.achievement4.title"),
      description: t("about.achievement4.desc"),
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{t("about.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("about.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse-glow">
                      <img
                        src="/me.jpg"
                        alt="Foto Profil"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{t("about.name")}</h3>
                    <p className="text-muted-foreground">{t("about.role")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description1")}</p>

                <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description2")}</p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 hover:scale-105"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <achievement.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-1">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
