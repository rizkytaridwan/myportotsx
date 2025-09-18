"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex bg-muted/50 rounded-lg p-1">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-xs font-medium transition-all ${
            language === "en"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </Button>
        <Button
          variant={language === "id" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("id")}
          className={`px-3 py-1 text-xs font-medium transition-all ${
            language === "id"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          ID
        </Button>
      </div>
    </div>
  )
}
