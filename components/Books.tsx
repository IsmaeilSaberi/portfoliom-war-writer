import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const books = [
  { id: 1, title: 'اسطوره‌های تاریخ مقاومت ایران', image: 'https://source.unsplash.com/random/300x400?book', description: 'مجموعه ۵ جلدی', link: '#' },
  { id: 2, title: 'یادهای نیک', image: 'https://source.unsplash.com/random/300x400?history', description: 'مجموعه ۳ جلدی', link: '#' },
  { id: 3, title: 'عمری که مرا داده شده بر زمین چنین گذشت', image: 'https://source.unsplash.com/random/300x400?memoir', description: 'جلد ۳', link: '#' },
]

export default function Books() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">کتاب‌ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book.id}>
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>{book.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 w-full">
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={book.link}>اطلاعات بیشتر</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}