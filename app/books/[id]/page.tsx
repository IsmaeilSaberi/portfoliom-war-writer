import { notFound } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"

// This would typically come from a database
const books = [
  { id: '1', title: 'اسطوره‌های تاریخ مقاومت ایران', image: 'https://source.unsplash.com/random/300x400?book', description: 'مجموعه ۵ جلدی که به بررسی تاریخ مقاومت ایران می‌پردازد. این کتاب‌ها روایتگر داستان‌های قهرمانانه و الهام‌بخش از تاریخ معاصر ایران هستند.', buyLink: '#' },
  { id: '2', title: 'یادهای نیک', image: 'https://source.unsplash.com/random/300x400?history', description: 'مجموعه ۳ جلدی که خاطرات و روایت‌های شخصی از دوران دفاع مقدس را به تصویر می‌کشد. این کتاب‌ها نگاهی عمیق و انسانی به تجربیات جنگ دارند.', buyLink: '#' },
  { id: '3', title: 'عمری که مرا داده شده بر زمین چنین گذشت', image: 'https://source.unsplash.com/random/300x400?memoir', description: 'جلد سوم از مجموعه خاطرات نویسنده که به شرح زندگی و تجربیات او در دوران پس از جنگ می‌پردازد. این کتاب بازتابی از تأثیرات طولانی مدت جنگ بر زندگی یک رزمنده است.', buyLink: '#' },
]

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === params.id)

  if (!book) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src={book.image}
              alt={book.title}
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
            <p className="text-xl mb-6">{book.description}</p>
            <Button asChild>
              <a href={book.buyLink}>خرید کتاب</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}