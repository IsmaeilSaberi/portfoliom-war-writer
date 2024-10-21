import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const speeches = [
  { id: 1, title: 'سخنرانی در دانشگاه تهران', image: 'https://source.unsplash.com/random/400x300?university', date: '۱۴۰۲/۰۳/۱۵', link: '#' },
  { id: 2, title: 'همایش ادبیات پایداری', image: 'https://source.unsplash.com/random/400x300?literature', date: '۱۴۰۲/۰۲/۲۰', link: '#' },
  { id: 3, title: 'کنفرانس تاریخ شفاهی دفاع مقدس', image: 'https://source.unsplash.com/random/400x300?history', date: '۱۴۰۱/۱۱/۱۰', link: '#' },
]

export default function Speeches() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">سخنرانی‌ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speeches.map((speech) => (
          <Card key={speech.id}>
            <CardHeader>
              <CardTitle>{speech.title}</CardTitle>
              <CardDescription>{speech.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full">
                <Image
                  src={speech.image}
                  alt={speech.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={speech.link}>جزئیات بیشتر</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}