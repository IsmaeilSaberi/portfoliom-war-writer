import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">درباره سید محمدرضا موسوی‌نژاد</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            سید محمدرضا موسوی‌نژاد، پژوهشگر برجسته جنگ، مدرس دانشگاه و نویسنده ۲۳ جلد کتاب در زمینه ادبیات پایداری مقدس و جنگ است. او به عنوان راوی فتح دفاع مقدس و مسئول ثبت و ضبط وقایع جنگ در دوران ۸ سال دفاع مقدس، نقش مهمی در حفظ و انتقال تاریخ این دوره حساس ایفا کرده است.
          </p>
          <p>
            با ۵۲ ماه حضور داوطلبانه در مناطق عملیاتی، موسوی‌نژاد نه تنها یک محقق، بلکه یک رزمنده و جانباز جنگی نیز هست. این تجربه مستقیم از جنگ، به آثار او عمق و اصالت خاصی بخشیده است.
          </p>
          <p>
            تحصیلات آکادمیک ایشان در رشته شیمی معدنی بوده و پایان‌نامه و رساله دکترای خود را در زمینه لیگاندهای دو سر داندانه اسید و باز‌های نرم و سخت از دانشگاه ارومیه به پایان رسانده است. این پیشینه علمی، همراه با تجربیات شخصی او از جنگ، ترکیبی منحصر به فرد از دانش و تجربه را در آثارش به نمایش می‌گذارد.
          </p>
          <p>
            از جمله آثار ماندگار ایشان می‌توان به مجموعه پنج جلدی "اسطوره‌های تاریخ مقاومت ایران"، مجموعه سه جلدی "یادهای نیک" و کتاب "عمری که مرا داده شده بر زمین چنین گذشت" اشاره کرد. این آثار نه تنها روایتگر تاریخ، بلکه بازتاب دهنده روح مقاومت و ایثار ملت ایران هستند.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}