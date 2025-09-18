"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Database, BarChart3, FileSpreadsheet, Search, Shield, Clock, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: FileText,
      title: t("services.service1.title"),
      description: t("services.service1.desc"),
      features: [
        t("services.service1.feature1"),
        t("services.service1.feature2"),
        t("services.service1.feature3"),
        t("services.service1.feature4"),
      ],
    },
    {
      icon: Database,
      title: t("services.service2.title"),
      description: t("services.service2.desc"),
      features: [
        t("services.service2.feature1"),
        t("services.service2.feature2"),
        t("services.service2.feature3"),
        t("services.service2.feature4"),
      ],
    },
    {
      icon: FileSpreadsheet,
      title: t("services.service3.title"),
      description: t("services.service3.desc"),
      features: [
        t("services.service3.feature1"),
        t("services.service3.feature2"),
        t("services.service3.feature3"),
        t("services.service3.feature4"),
      ],
    },
    {
      icon: BarChart3,
      title: t("services.service4.title"),
      description: t("services.service4.desc"),
      features: [
        t("services.service4.feature1"),
        t("services.service4.feature2"),
        t("services.service4.feature3"),
        t("services.service4.feature4"),
      ],
    },
    {
      icon: Search,
      title: t("services.service5.title"),
      description: t("services.service5.desc"),
      features: [
        t("services.service5.feature1"),
        t("services.service5.feature2"),
        t("services.service5.feature3"),
        t("services.service5.feature4"),
      ],
    },
    {
      icon: Shield,
      title: t("services.service6.title"),
      description: t("services.service6.desc"),
      features: [
        t("services.service6.feature1"),
        t("services.service6.feature2"),
        t("services.service6.feature3"),
        t("services.service6.feature4"),
      ],
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{t("services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`mt-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">{t("services.guarantee1.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("services.guarantee1.desc")}</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">{t("services.guarantee2.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("services.guarantee2.desc")}</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">{t("services.guarantee3.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("services.guarantee3.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
