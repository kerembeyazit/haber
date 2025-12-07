import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const haberler = [
  {
    id: 1,
    kategori: "POLİTİKA",
    baslik: "Yeni Ekonomi Paketi Açıklandı",
    ozet: "Hükümet, ekonomik istikrarı güçlendirmek için kapsamlı bir paket açıkladı. Paket, yatırımcıları ve iş dünyasını memnun edecek önlemler içeriyor.",
    tarih: "15 Ocak 2025",
    yazar: "Ahmet Yılmaz",
  },
  {
    id: 2,
    kategori: "TEKNOLOJİ",
    baslik: "Yapay Zeka Devrimi Hızlanıyor",
    ozet: "Son dönemde yapay zeka teknolojilerindeki gelişmeler, iş dünyasını ve günlük hayatı köklü bir şekilde değiştiriyor. Uzmanlar, bu dönüşümün sadece başlangıç olduğunu söylüyor.",
    tarih: "14 Ocak 2025",
    yazar: "Zeynep Kaya",
  },
  {
    id: 3,
    kategori: "SPOR",
    baslik: "Milli Takım Dünya Kupası'na Hazırlanıyor",
    ozet: "Milli futbol takımımız, önümüzdeki ay başlayacak Dünya Kupası elemeleri için yoğun bir hazırlık programına başladı. Teknik direktör, kadronun en iyi şekilde hazır olduğunu belirtti.",
    tarih: "13 Ocak 2025",
    yazar: "Mehmet Demir",
  },
  {
    id: 4,
    kategori: "KÜLTÜR",
    baslik: "İstanbul'da Yeni Sanat Müzesi Açıldı",
    ozet: "Şehrin kalbinde, modern ve çağdaş sanat eserlerini bir araya getiren yeni bir müze kapılarını ziyaretçilere açtı. Müze, hem yerli hem de uluslararası sanatçıların eserlerine ev sahipliği yapacak.",
    tarih: "12 Ocak 2025",
    yazar: "Elif Şahin",
  },
  {
    id: 5,
    kategori: "EKONOMİ",
    baslik: "Döviz Kurlarındaki Dalgalanma Analiz Edildi",
    ozet: "Finans uzmanları, son haftalarda yaşanan döviz kuru dalgalanmalarını analiz etti. Piyasa gözlemcileri, önümüzdeki dönem için iyimser bir tablo çiziyor.",
    tarih: "11 Ocak 2025",
    yazar: "Can Özkan",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="font-serif text-7xl md:text-9xl font-bold text-black tracking-tight leading-none">
            HABER SİTESİ
          </h1>
          <p className="mt-4 text-sm text-black/60 uppercase tracking-widest font-sans">
            Güvenilir Haber, Doğru Bilgi
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured News */}
        <section className="mb-20">
          <Card className="border-0 shadow-none rounded-none">
            <CardHeader className="px-0 pb-6">
              <div className="text-xs uppercase tracking-widest text-black/50 mb-3 font-sans">
                {haberler[0].kategori}
              </div>
              <CardTitle className="font-serif text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
                {haberler[0].baslik}
              </CardTitle>
              <div className="flex items-center gap-4 mt-6 text-sm text-black/60 font-sans">
                <span>{haberler[0].yazar}</span>
                <span>•</span>
                <span>{haberler[0].tarih}</span>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-2xl md:text-3xl text-black/80 leading-relaxed font-serif max-w-4xl">
                {haberler[0].ozet}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-black my-16"></div>

        {/* News Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {haberler.slice(1).map((haber) => (
            <Card
              key={haber.id}
              className="border-0 shadow-none rounded-none hover:bg-black/5 transition-colors"
            >
              <CardHeader className="px-0 pb-6">
                <div className="text-xs uppercase tracking-widest text-black/50 mb-3 font-sans">
                  {haber.kategori}
                </div>
                <CardTitle className="font-serif text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
                  {haber.baslik}
                </CardTitle>
                <div className="flex items-center gap-4 mt-4 text-sm text-black/60 font-sans">
                  <span>{haber.yazar}</span>
                  <span>•</span>
                  <span>{haber.tarih}</span>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-xl text-black/70 leading-relaxed font-serif">
                  {haber.ozet}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-sm text-black/50 text-center font-sans">
            © 2025 Haber Sitesi. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
