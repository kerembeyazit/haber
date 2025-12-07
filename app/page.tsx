import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const haberler = [
  {
    id: 1,
    kategori: "POLİTİKA",
    baslik: "Yeni Ekonomi Paketi Açıklandı",
    ozet: "Hükümet, ekonomik istikrarı güçlendirmek için kapsamlı bir paket açıkladı. Paket, yatırımcıları ve iş dünyasını memnun edecek önlemler içeriyor.",
    tarih: "15 Ocak 2025",
    yazar: "Ahmet Yılmaz",
    slug: "yeni-ekonomi-paketi-aciklandi",
  },
  {
    id: 2,
    kategori: "TEKNOLOJİ",
    baslik: "Yapay Zeka Devrimi Hızlanıyor",
    ozet: "Son dönemde yapay zeka teknolojilerindeki gelişmeler, iş dünyasını ve günlük hayatı köklü bir şekilde değiştiriyor. Uzmanlar, bu dönüşümün sadece başlangıç olduğunu söylüyor.",
    tarih: "14 Ocak 2025",
    yazar: "Zeynep Kaya",
    slug: "yapay-zeka-devrimi-hizlaniyor",
  },
  {
    id: 3,
    kategori: "SPOR",
    baslik: "Milli Takım Dünya Kupası'na Hazırlanıyor",
    ozet: "Milli futbol takımımız, önümüzdeki ay başlayacak Dünya Kupası elemeleri için yoğun bir hazırlık programına başladı. Teknik direktör, kadronun en iyi şekilde hazır olduğunu belirtti.",
    tarih: "13 Ocak 2025",
    yazar: "Mehmet Demir",
    slug: "milli-takim-dunya-kupasina-hazirlaniyor",
  },
  {
    id: 4,
    kategori: "KÜLTÜR",
    baslik: "İstanbul'da Yeni Sanat Müzesi Açıldı",
    ozet: "Şehrin kalbinde, modern ve çağdaş sanat eserlerini bir araya getiren yeni bir müze kapılarını ziyaretçilere açtı. Müze, hem yerli hem de uluslararası sanatçıların eserlerine ev sahipliği yapacak.",
    tarih: "12 Ocak 2025",
    yazar: "Elif Şahin",
    slug: "istanbulda-yeni-sanat-muzesi-acildi",
  },
  {
    id: 5,
    kategori: "EKONOMİ",
    baslik: "Döviz Kurlarındaki Dalgalanma Analiz Edildi",
    ozet: "Finans uzmanları, son haftalarda yaşanan döviz kuru dalgalanmalarını analiz etti. Piyasa gözlemcileri, önümüzdeki dönem için iyimser bir tablo çiziyor.",
    tarih: "11 Ocak 2025",
    yazar: "Can Özkan",
    slug: "doviz-kurlarindaki-dalgalanma-analiz-edildi",
  },
  {
    id: 6,
    kategori: "POLİTİKA",
    baslik: "Yerel Seçimlerde Rekabet Kızışıyor",
    ozet: "Yaklaşan yerel seçimler öncesi siyasi partiler, seçim stratejilerini netleştirmeye başladı. Uzmanlar, bu seçimlerin ülke siyaseti için kritik öneme sahip olduğunu belirtiyor.",
    tarih: "10 Ocak 2025",
    yazar: "Ahmet Yılmaz",
    slug: "yerel-secimlerde-rekabet-kizisiyor",
  },
  {
    id: 7,
    kategori: "TEKNOLOJİ",
    baslik: "Yeni Nesil Akıllı Telefonlar Tanıtıldı",
    ozet: "Teknoloji devleri, yeni nesil akıllı telefon modellerini tanıttı. Yapay zeka destekli kameralar ve gelişmiş işlemciler öne çıkan özellikler arasında.",
    tarih: "9 Ocak 2025",
    yazar: "Zeynep Kaya",
    slug: "yeni-nesil-akilli-telefonlar-tanitildi",
  },
  {
    id: 8,
    kategori: "SPOR",
    baslik: "Basketbol Süper Ligi'nde Heyecan Dorukta",
    ozet: "Basketbol Süper Ligi'nde sezon sonuna yaklaşılırken, şampiyonluk yarışı kızışıyor. Son haftalardaki maçlar, ligdeki rekabetin ne kadar çetin olduğunu gösteriyor.",
    tarih: "8 Ocak 2025",
    yazar: "Mehmet Demir",
    slug: "basketbol-super-liginde-heyecan-dorukta",
  },
];

// Kategorilere göre haberleri grupla
const kategorilereGoreGrupla = () => {
  const gruplar: { [key: string]: typeof haberler } = {};
  haberler.forEach((haber) => {
    if (!gruplar[haber.kategori]) {
      gruplar[haber.kategori] = [];
    }
    gruplar[haber.kategori].push(haber);
  });
  return gruplar;
};

export default function Home() {
  const kategoriliHaberler = kategorilereGoreGrupla();
  const kategoriler = Object.keys(kategoriliHaberler);
  const featuredHaber = haberler[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured News */}
        <section className="mb-20">
          <Link href={`/haber/${featuredHaber.slug}`}>
            <Card className="border-0 shadow-none rounded-none">
              <CardHeader className="px-0 pb-6">
                <div className="text-xs uppercase tracking-widest text-black/50 mb-3 font-sans">
                  {featuredHaber.kategori}
                </div>
                <CardTitle className="font-serif text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
                  {featuredHaber.baslik}
                </CardTitle>
                <div className="flex items-center gap-4 mt-6 text-sm text-black/60 font-sans">
                  <span>{featuredHaber.yazar}</span>
                  <span>•</span>
                  <span>{featuredHaber.tarih}</span>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-2xl md:text-3xl text-black/80 leading-relaxed font-serif max-w-4xl">
                  {featuredHaber.ozet}
                </p>
                <div className="mt-6">
                  <span className="text-sm text-black/60 font-sans underline">
                    Devamını oku →
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-black my-16"></div>

        {/* Category-based News Sections - Side by Side */}
        <div className="space-y-16">
          {Array.from({ length: Math.ceil(kategoriler.length / 2) }).map(
            (_, rowIndex) => {
              const kategori1 = kategoriler[rowIndex * 2];
              const kategori2 = kategoriler[rowIndex * 2 + 1];

              return (
                <div
                  key={rowIndex}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                >
                  {/* First Category */}
                  {kategori1 && (
                    <CategorySection
                      kategori={kategori1}
                      kategoriHaberleri={kategoriliHaberler[kategori1]}
                    />
                  )}

                  {/* Second Category */}
                  {kategori2 && (
                    <CategorySection
                      kategori={kategori2}
                      kategoriHaberleri={kategoriliHaberler[kategori2]}
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Category Section Component
function CategorySection({
  kategori,
  kategoriHaberleri,
}: {
  kategori: string;
  kategoriHaberleri: typeof haberler;
}) {
  const ilkHaber = kategoriHaberleri[0];
  const digerHaberler = kategoriHaberleri.slice(1);

  return (
    <section>
      {/* Category Header */}
      <div className="mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-2">
          {kategori}
        </h2>
        <div className="w-24 h-1 bg-black"></div>
      </div>

      {/* Main Article for Category */}
      <div className="mb-8">
        <Link href={`/haber/${ilkHaber.slug}`}>
          <Card className="border-0 shadow-none rounded-none">
            <CardHeader className="px-0 pb-6">
              <div className="text-xs uppercase tracking-widest text-black/50 mb-3 font-sans">
                {ilkHaber.kategori}
              </div>
              <CardTitle className="font-serif text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
                {ilkHaber.baslik}
              </CardTitle>
              <div className="flex items-center gap-4 mt-4 text-sm text-black/60 font-sans">
                <span>{ilkHaber.yazar}</span>
                <span>•</span>
                <span>{ilkHaber.tarih}</span>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-lg md:text-xl text-black/70 leading-relaxed font-serif">
                {ilkHaber.ozet}
              </p>
              <div className="mt-4">
                <span className="text-sm text-black/60 font-sans underline">
                  Devamını oku →
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Other Articles in Category */}
      {digerHaberler.length > 0 && (
        <div className="space-y-6">
          {digerHaberler.map((haber) => (
            <Link key={haber.id} href={`/haber/${haber.slug}`}>
              <Card className="border-0 shadow-none rounded-none">
                <CardHeader className="px-0 pb-4">
                  <div className="text-xs uppercase tracking-widest text-black/50 mb-2 font-sans">
                    {haber.kategori}
                  </div>
                  <CardTitle className="font-serif text-xl md:text-2xl font-bold text-black leading-tight mb-3">
                    {haber.baslik}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-3 text-xs text-black/60 font-sans">
                    <span>{haber.yazar}</span>
                    <span>•</span>
                    <span>{haber.tarih}</span>
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-base text-black/70 leading-relaxed font-serif mb-3">
                    {haber.ozet}
                  </p>
                  <span className="text-xs text-black/60 font-sans underline">
                    Devamını oku →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
