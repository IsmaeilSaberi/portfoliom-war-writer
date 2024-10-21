import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Biography() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-4">بیوگرافی</h2>
      <p className="text-lg mb-4">
        سیدمحمدرضا موسوی‌نژاد پژوهشگر جنگ، مدرس و نویسنده ۲۳ جلد کتاب در ادبیات پایداری مقدس و جنگ و راوی فتح دفاع مقدس است. او مسئول ثبت و ضبط وقایع جنگ در دوران ۸ سال دفاع مقدس بوده و به عنوان رزمنده با ۵۲ ماه حضور داوطلبانه در مناطق عملیاتی، جانباز و مجروح جنگی است.
      </p>
      <p className="text-lg mb-4">
        تحصیلات آکادمیک ایشان در رشته شیمی معدنی بوده و پایان‌نامه و رساله خود را در خصوص لیگاندهای دو سر داندانه اسید و باز های نرم و سخت از دانشگاه ارومیه به پایان رسانده است.
      </p>
      <Button asChild>
        <Link href="/about">بیشتر بدانید</Link>
      </Button>
    </section>
  )
}