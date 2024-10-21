import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">سید محمدرضا موسوی‌نژاد</h3>
            <p>پژوهشگر جنگ، مدرس، و نویسنده</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent-foreground"><Facebook /></a>
            <a href="#" className="hover:text-accent-foreground"><Twitter /></a>
            <a href="#" className="hover:text-accent-foreground"><Instagram /></a>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center"><Mail className="mr-2" /> info@mousavinejad.com</p>
            <p className="flex items-center"><Phone className="mr-2" /> ۰۲۱-۱۲۳۴۵۶۷۸</p>
          </div>
          <p>&copy; ۱۴۰۲ تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}