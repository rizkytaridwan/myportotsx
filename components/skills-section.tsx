"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  const skills = [
    { name: t("skills.skill1"), level: 95, category: t("skills.category1") },
    { name: t("skills.skill2"), level: 90, category: t("skills.category1") },
    { name: t("skills.skill3"), level: 88, category: t("skills.category2") },
    { name: t("skills.skill4"), level: 85, category: t("skills.category2") },
    { name: t("skills.skill9"), level: 78, category: t("skills.category2") }, // Added this line
    { name: t("skills.skill5"), level: 98, category: t("skills.category3") },
    { name: t("skills.skill6"), level: 92, category: t("skills.category3") },
    { name: t("skills.skill7"), level: 87, category: t("skills.category4") },
    { name: t("skills.skill8"), level: 94, category: t("skills.category5") },
  ]

  const categories = [
    t("skills.category1"),
    t("skills.category2"),
    t("skills.category3"),
    t("skills.category4"),
    t("skills.category5"),
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars with staggered delay
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{t("skills.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("skills.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Progress Bars */}
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t("skills.technicalTitle")}</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animatedSkills.includes(index) ? `${skill.level}%` : "0%",
                        boxShadow: animatedSkills.includes(index) ? "0 0 10px rgba(139, 92, 246, 0.5)" : "none",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

             {/* Skills Categories */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t("skills.categoriesTitle")}</h3>
              <div className="grid gap-4">
                {categories.map((category) => { // Key di sini juga lebih baik unik
                  const categorySkills = skills.filter((skill) => skill.category === category)
                  if (categorySkills.length === 0) return null // Jangan render card jika tidak ada skill

                  const avgLevel = Math.round(
                    categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length,
                  )

                  return (
                    <Card
                      key={category}
                      className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 hover:scale-105"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-card-foreground">{category}</h4>
                          <div className="text-2xl font-bold text-primary">{avgLevel}%</div>
                        </div>
                        <div className="space-y-1">
                          {categorySkills.map((skill) => (
                            <div key={skill.name} className="text-sm text-muted-foreground">
                              • {skill.name}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {t("skills.certificationsTitle")}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[t("skills.cert1"), t("skills.cert2"), t("skills.cert3"), t("skills.cert4")].map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border-border text-center hover:bg-card/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">✓</span>
                    </div>
                    <h4 className="font-semibold text-card-foreground">{cert}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}