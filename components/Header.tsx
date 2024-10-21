"use client"

import Link from 'next/link'
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">خانه</Link></li>
            <li><Link href="/about" className="hover:underline">درباره</Link></li>
            <li><Link href="/events" className="hover:underline">رویدادها</Link></li>
            <li><Link href="/admin" className="hover:underline">مدیریت</Link></li>
          </ul>
        </nav>
        <h1 className="text-2xl font-bold">سید محمدرضا موسوی‌نژاد</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}