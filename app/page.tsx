import Header from '@/components/Header';
import NewsSlider from '@/components/NewsSlider';
import Biography from '@/components/Biography';
import Books from '@/components/Books';
import Speeches from '@/components/Speeches';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4">
        <NewsSlider />
        <Biography />
        <Books />
        <Speeches />
      </main>
      <Footer />
    </div>
  );
}