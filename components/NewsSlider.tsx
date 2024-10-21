"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const news = [
  { id: 1, title: 'انتشار کتاب جدید', image: 'https://source.unsplash.com/random/800x400?book', link: '#' },
  { id: 2, title: 'سخنرانی در دانشگاه تهران', image: 'https://source.unsplash.com/random/800x400?university', link: '#' },
  { id: 3, title: 'مصاحبه با روزنامه همشهری', image: 'https://source.unsplash.com/random/800x400?newspaper', link: '#' },
]

export default function NewsSlider() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-8">
      <CarouselContent>
        {news.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">
                    <a href={item.link} className="hover:underline">
                      {item.title}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}