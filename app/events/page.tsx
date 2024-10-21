import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const events = [
  { id: 1, title: 'رونمایی کتاب جدید', date: '۱۴۰۲/۰۶/۱۵', location: 'کتابخانه ملی ایران', description: 'مراسم رونمایی از آخرین اثر استاد موسوی‌نژاد با حضور اهالی فرهنگ و ادب' },
  { id: 2, title: 'سخنرانی در دانشگاه تهران', date: '۱۴۰۲/۰۷/۱۰', location: 'دانشکده ادبیات دانشگاه تهران', description: 'سخنرانی با موضوع "نقش ادبیات در حفظ و انتقال ارزش‌های دفاع مقدس"' },
  { id: 3, title: 'نشست نقد و بررسی کتاب', date: '۱۴۰۲/۰۸/۲۰', location: 'فرهنگسرای انقلاب', description: 'نشست نقد و بررسی کتاب "اسطوره‌های تاریخ مقاومت ایران" با حضور منتقدان و پژوهشگران' },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">رویدادها و اطلاع‌رسانی‌ها</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date} - {event.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/events/${event.id}`}>جزئیات بیشتر</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}