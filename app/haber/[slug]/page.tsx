import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Bu normalde bir API'den veya veritabanından gelecek
const haberler = [
  {
    id: 1,
    kategori: "POLİTİKA",
    baslik: "Yeni Ekonomi Paketi Açıklandı",
    ozet: "Hükümet, ekonomik istikrarı güçlendirmek için kapsamlı bir paket açıkladı. Paket, yatırımcıları ve iş dünyasını memnun edecek önlemler içeriyor.",
    tarih: "15 Ocak 2025",
    yazar: "Ahmet Yılmaz",
    slug: "yeni-ekonomi-paketi-aciklandi",
    icerik: `Hükümet, bugün yaptığı açıklamada ekonomik istikrarı güçlendirmek için kapsamlı bir paket açıkladı. Paket, yatırımcıları ve iş dünyasını memnun edecek önlemler içeriyor.

Ekonomi Bakanı, yaptığı basın toplantısında paketin detaylarını paylaştı. Bakan, "Bu paket ile ekonomik büyümeyi destekleyecek, yatırımları artıracak ve istihdamı güçlendirecek önlemler alıyoruz" dedi.

Paket kapsamında, küçük ve orta ölçekli işletmelere yönelik kredi kolaylıkları, yatırım teşvikleri ve vergi indirimleri yer alıyor. Uzmanlar, paketin ekonomik büyüme üzerinde olumlu etkileri olacağını belirtiyor.

İş dünyası temsilcileri, paketi olumlu karşıladıklarını ve uygulamanın hızlı bir şekilde hayata geçirilmesini beklediklerini ifade ettiler.`,
  },
  {
    id: 2,
    kategori: "TEKNOLOJİ",
    baslik: "Yapay Zeka Devrimi Hızlanıyor",
    ozet: "Son dönemde yapay zeka teknolojilerindeki gelişmeler, iş dünyasını ve günlük hayatı köklü bir şekilde değiştiriyor. Uzmanlar, bu dönüşümün sadece başlangıç olduğunu söylüyor.",
    tarih: "14 Ocak 2025",
    yazar: "Zeynep Kaya",
    slug: "yapay-zeka-devrimi-hizlaniyor",
    icerik: `Son dönemde yapay zeka teknolojilerindeki gelişmeler, iş dünyasını ve günlük hayatı köklü bir şekilde değiştiriyor. Uzmanlar, bu dönüşümün sadece başlangıç olduğunu söylüyor.

Yapay zeka teknolojileri, sağlıktan eğitime, üretimden hizmet sektörüne kadar her alanda kendini gösteriyor. Şirketler, operasyonel verimliliği artırmak ve müşteri deneyimini iyileştirmek için yapay zeka çözümlerine yatırım yapıyor.

Teknoloji uzmanları, önümüzdeki yıllarda yapay zekanın daha da gelişeceğini ve hayatımızın ayrılmaz bir parçası haline geleceğini öngörüyor. Ancak bu gelişmelerle birlikte etik ve güvenlik konuları da önem kazanıyor.`,
  },
  {
    id: 3,
    kategori: "SPOR",
    baslik: "Milli Takım Dünya Kupası'na Hazırlanıyor",
    ozet: "Milli futbol takımımız, önümüzdeki ay başlayacak Dünya Kupası elemeleri için yoğun bir hazırlık programına başladı. Teknik direktör, kadronun en iyi şekilde hazır olduğunu belirtti.",
    tarih: "13 Ocak 2025",
    yazar: "Mehmet Demir",
    slug: "milli-takim-dunya-kupasina-hazirlaniyor",
    icerik: `Milli futbol takımımız, önümüzdeki ay başlayacak Dünya Kupası elemeleri için yoğun bir hazırlık programına başladı. Teknik direktör, kadronun en iyi şekilde hazır olduğunu belirtti.

Takım, antrenman kampında hem fiziksel hem de taktiksel hazırlıklarını sürdürüyor. Teknik direktör, oyuncuların motivasyonunun yüksek olduğunu ve elemeler için hazır olduklarını söyledi.

Milli takım, geçtiğimiz sezon gösterdiği performansla umut verdi. Taraftarlar, takımın elemelerde başarılı olacağına inanıyor.`,
  },
  {
    id: 4,
    kategori: "KÜLTÜR",
    baslik: "İstanbul'da Yeni Sanat Müzesi Açıldı",
    ozet: "Şehrin kalbinde, modern ve çağdaş sanat eserlerini bir araya getiren yeni bir müze kapılarını ziyaretçilere açtı. Müze, hem yerli hem de uluslararası sanatçıların eserlerine ev sahipliği yapacak.",
    tarih: "12 Ocak 2025",
    yazar: "Elif Şahin",
    slug: "istanbulda-yeni-sanat-muzesi-acildi",
    icerik: `Şehrin kalbinde, modern ve çağdaş sanat eserlerini bir araya getiren yeni bir müze kapılarını ziyaretçilere açtı. Müze, hem yerli hem de uluslararası sanatçıların eserlerine ev sahipliği yapacak.

Müze, 5000 metrekarelik bir alanda, çağdaş sanatın en önemli örneklerini sergileyecek. Açılış töreninde, sanat dünyasının önemli isimleri bir araya geldi.

Müze müdürü, "Bu müze ile İstanbul'un kültürel zenginliğine katkı sağlamayı hedefliyoruz" dedi. Müze, haftanın her günü ziyaretçilere açık olacak.`,
  },
  {
    id: 5,
    kategori: "EKONOMİ",
    baslik: "Döviz Kurlarındaki Dalgalanma Analiz Edildi",
    ozet: "Finans uzmanları, son haftalarda yaşanan döviz kuru dalgalanmalarını analiz etti. Piyasa gözlemcileri, önümüzdeki dönem için iyimser bir tablo çiziyor.",
    tarih: "11 Ocak 2025",
    yazar: "Can Özkan",
    slug: "doviz-kurlarindaki-dalgalanma-analiz-edildi",
    icerik: `Finans uzmanları, son haftalarda yaşanan döviz kuru dalgalanmalarını analiz etti. Piyasa gözlemcileri, önümüzdeki dönem için iyimser bir tablo çiziyor.

Uzmanlar, dalgalanmaların geçici olduğunu ve piyasanın kısa süre içinde normale döneceğini belirtiyor. Ekonomistler, temel ekonomik göstergelerin sağlam olduğunu vurguluyor.

Yatırımcılar, piyasadaki gelişmeleri yakından takip ediyor. Uzmanlar, uzun vadeli yatırımcılar için fırsatlar olduğunu söylüyor.`,
  },
  {
    id: 6,
    kategori: "POLİTİKA",
    baslik: "Yerel Seçimlerde Rekabet Kızışıyor",
    ozet: "Yaklaşan yerel seçimler öncesi siyasi partiler, seçim stratejilerini netleştirmeye başladı. Uzmanlar, bu seçimlerin ülke siyaseti için kritik öneme sahip olduğunu belirtiyor.",
    tarih: "10 Ocak 2025",
    yazar: "Ahmet Yılmaz",
    slug: "yerel-secimlerde-rekabet-kizisiyor",
    icerik: `Yaklaşan yerel seçimler öncesi siyasi partiler, seçim stratejilerini netleştirmeye başladı. Uzmanlar, bu seçimlerin ülke siyaseti için kritik öneme sahip olduğunu belirtiyor.

Siyasi partiler, adaylarını belirleme sürecinde. Seçmenler, adayların vaatlerini ve projelerini değerlendiriyor. Uzmanlar, bu seçimlerin yerel yönetimlerin geleceği için önemli olduğunu vurguluyor.`,
  },
  {
    id: 7,
    kategori: "TEKNOLOJİ",
    baslik: "Yeni Nesil Akıllı Telefonlar Tanıtıldı",
    ozet: "Teknoloji devleri, yeni nesil akıllı telefon modellerini tanıttı. Yapay zeka destekli kameralar ve gelişmiş işlemciler öne çıkan özellikler arasında.",
    tarih: "9 Ocak 2025",
    yazar: "Zeynep Kaya",
    slug: "yeni-nesil-akilli-telefonlar-tanitildi",
    icerik: `Teknoloji devleri, yeni nesil akıllı telefon modellerini tanıttı. Yapay zeka destekli kameralar ve gelişmiş işlemciler öne çıkan özellikler arasında.

Yeni modeller, performans ve kullanıcı deneyimi açısından önceki nesillere göre önemli iyileştirmeler içeriyor. Teknoloji meraklıları, yeni özellikleri merakla bekliyor.`,
  },
  {
    id: 8,
    kategori: "SPOR",
    baslik: "Basketbol Süper Ligi'nde Heyecan Dorukta",
    ozet: "Basketbol Süper Ligi'nde sezon sonuna yaklaşılırken, şampiyonluk yarışı kızışıyor. Son haftalardaki maçlar, ligdeki rekabetin ne kadar çetin olduğunu gösteriyor.",
    tarih: "8 Ocak 2025",
    yazar: "Mehmet Demir",
    slug: "basketbol-super-liginde-heyecan-dorukta",
    icerik: `Basketbol Süper Ligi'nde sezon sonuna yaklaşılırken, şampiyonluk yarışı kızışıyor. Son haftalardaki maçlar, ligdeki rekabetin ne kadar çetin olduğunu gösteriyor.

Takımlar, play-off şanslarını korumak için mücadele ediyor. Taraftarlar, sezonun son haftalarını heyecanla takip ediyor.`,
  },
];

export default async function HaberDetay({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const haber = haberler.find((h) => h.slug === slug);

  if (!haber) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-black mb-4">
              Haber Bulunamadı
            </h1>
            <Link
              href="/"
              className="text-black/60 hover:text-black font-sans underline"
            >
              Ana sayfaya dön
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/60 hover:text-black font-sans mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana sayfaya dön</span>
        </Link>

        {/* Article */}
        <article>
          <Card className="border-0 shadow-none rounded-none">
            <CardHeader className="px-0 pb-6">
              <div className="text-xs uppercase tracking-widest text-black/50 mb-3 font-sans">
                {haber.kategori}
              </div>
              <CardTitle className="font-serif text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
                {haber.baslik}
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-black/60 font-sans">
                <span>{haber.yazar}</span>
                <span>•</span>
                <span>{haber.tarih}</span>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-serif mb-8">
                  {haber.ozet}
                </p>
                <div className="text-lg text-black/70 leading-relaxed font-serif space-y-4">
                  {haber.icerik.split("\n\n").map((paragraf, index) => (
                    <p key={index}>{paragraf}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <Footer />
    </div>
  );
}

