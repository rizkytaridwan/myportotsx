"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    setActiveFilter(t("portfolio.filter.all"))
  }, [t])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: t("portfolio.project1.title"),
      category: t("portfolio.filter.database"),
      description: t("portfolio.project1.desc"),
      duration: t("portfolio.project1.duration"),
      client: t("portfolio.project1.client"),
      results: t("portfolio.project1.results"),
      tags: ["Excel", "Database", "E-commerce"],
      image: "/ecommerce-product-catalog-dashboard.jpg",
    },
    {
      title: t("portfolio.project2.title"),
      category: t("portfolio.filter.document"),
      description: t("portfolio.project2.desc"),
      duration: t("portfolio.project2.duration"),
      client: t("portfolio.project2.client"),
      results: t("portfolio.project2.results"),
      tags: ["HIPAA", "Document Scanning", "Healthcare"],
      image: "/placeholder-jvt8u.png",
    },
    {
      title: t("portfolio.project3.title"),
      category: t("portfolio.filter.analysis"),
      description: t("portfolio.project3.desc"),
      duration: t("portfolio.project3.duration"),
      client: t("portfolio.project3.client"),
      results: t("portfolio.project3.results"),
      tags: ["Financial Analysis", "Excel", "Reporting"],
      image: "/placeholder-c6tpz.png",
    },
    {
      title: t("portfolio.project4.title"),
      category: t("portfolio.filter.database"),
      description: t("portfolio.project4.desc"),
      duration: t("portfolio.project4.duration"),
      client: t("portfolio.project4.client"),
      results: t("portfolio.project4.results"),
      tags: ["CRM", "Data Migration", "Database"],
      image: "/gudang.png",
    },
    {
      title: t("portfolio.project5.title"),
      category: t("portfolio.filter.research"),
      description: t("portfolio.project5.desc"),
      duration: t("portfolio.project5.duration"),
      client: t("portfolio.project5.client"),
      results: t("portfolio.project5.results"),
      tags: ["Market Research", "Data Collection", "Analysis"],
      image: "/placeholder-3vk5p.png",
    },
    {
      title: t("portfolio.project6.title"),
      category: t("portfolio.filter.document"),
      description: t("portfolio.project6.desc"),
      duration: t("portfolio.project6.duration"),
      client: t("portfolio.project6.client"),
      results: t("portfolio.project6.results"),
      tags: ["Inventory", "Automation", "Excel"],
      image: "/warehouse-inventory-management-system-dashboard.jpg",
    },
  ]

  const categories = [
    t("portfolio.filter.all"),
    t("portfolio.filter.database"),
    t("portfolio.filter.document"),
    t("portfolio.filter.analysis"),
    t("portfolio.filter.research"),
  ]

  const filteredProjects =
    activeFilter === t("portfolio.filter.all")
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{t("portfolio.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("portfolio.subtitle")}</p>
          </div>

          {/* Filter Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                      <span>{project.results}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:animate-pulse-glow bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("portfolio.viewDetails")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className={`mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "1s" }}>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">1000+</div>
                <div className="text-muted-foreground">{t("portfolio.stats.projects")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">{t("portfolio.stats.clients")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">{t("portfolio.stats.accuracy")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">24h</div>
                <div className="text-muted-foreground">{t("portfolio.stats.turnaround")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
