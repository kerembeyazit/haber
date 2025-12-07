"use client";

import { Headphones, Play, ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setCurrentDate(
        now.toLocaleDateString("tr-TR", options).replace(/ /g, " ")
      );
    };
    updateDate();
    const interval = setInterval(updateDate, 60000); // Her dakika güncelle
    return () => clearInterval(interval);
  }, []);

  // Haber verileri (normalde API'den gelecek)
  const haberler = [
    {
      id: 1,
      kategori: "POLİTİKA",
      baslik: "Yeni Ekonomi Paketi Açıklandı",
      ozet: "Hükümet, ekonomik istikrarı güçlendirmek için kapsamlı bir paket açıkladı.",
      tarih: "15 Ocak 2025",
      yazar: "Ahmet Yılmaz",
      slug: "yeni-ekonomi-paketi-aciklandi",
    },
    {
      id: 2,
      kategori: "TEKNOLOJİ",
      baslik: "Yapay Zeka Devrimi Hızlanıyor",
      ozet: "Son dönemde yapay zeka teknolojilerindeki gelişmeler, iş dünyasını değiştiriyor.",
      tarih: "14 Ocak 2025",
      yazar: "Zeynep Kaya",
      slug: "yapay-zeka-devrimi-hizlaniyor",
    },
    {
      id: 3,
      kategori: "SPOR",
      baslik: "Milli Takım Dünya Kupası'na Hazırlanıyor",
      ozet: "Milli futbol takımımız, Dünya Kupası elemeleri için hazırlık programına başladı.",
      tarih: "13 Ocak 2025",
      yazar: "Mehmet Demir",
      slug: "milli-takim-dunya-kupasina-hazirlaniyor",
    },
    {
      id: 4,
      kategori: "KÜLTÜR",
      baslik: "İstanbul'da Yeni Sanat Müzesi Açıldı",
      ozet: "Modern ve çağdaş sanat eserlerini bir araya getiren yeni bir müze açıldı.",
      tarih: "12 Ocak 2025",
      yazar: "Elif Şahin",
      slug: "istanbulda-yeni-sanat-muzesi-acildi",
    },
    {
      id: 5,
      kategori: "EKONOMİ",
      baslik: "Döviz Kurlarındaki Dalgalanma Analiz Edildi",
      ozet: "Finans uzmanları, son haftalarda yaşanan döviz kuru dalgalanmalarını analiz etti.",
      tarih: "11 Ocak 2025",
      yazar: "Can Özkan",
      slug: "doviz-kurlarindaki-dalgalanma-analiz-edildi",
    },
    {
      id: 6,
      kategori: "POLİTİKA",
      baslik: "Yerel Seçimlerde Rekabet Kızışıyor",
      ozet: "Yaklaşan yerel seçimler öncesi siyasi partiler, seçim stratejilerini netleştiriyor.",
      tarih: "10 Ocak 2025",
      yazar: "Ahmet Yılmaz",
      slug: "yerel-secimlerde-rekabet-kizisiyor",
    },
    {
      id: 7,
      kategori: "TEKNOLOJİ",
      baslik: "Yeni Nesil Akıllı Telefonlar Tanıtıldı",
      ozet: "Teknoloji devleri, yeni nesil akıllı telefon modellerini tanıttı.",
      tarih: "9 Ocak 2025",
      yazar: "Zeynep Kaya",
      slug: "yeni-nesil-akilli-telefonlar-tanitildi",
    },
    {
      id: 8,
      kategori: "SPOR",
      baslik: "Basketbol Süper Ligi'nde Heyecan Dorukta",
      ozet: "Basketbol Süper Ligi'nde sezon sonuna yaklaşılırken, şampiyonluk yarışı kızışıyor.",
      tarih: "8 Ocak 2025",
      yazar: "Mehmet Demir",
      slug: "basketbol-super-liginde-heyecan-dorukta",
    },
  ];

  const kategoriler = [
    {
      name: "Dünya",
      submenu: ["Avrupa", "Amerika", "Asya", "Ortadoğu", "Afrika"],
      haberKategorileri: ["POLİTİKA", "SPOR"],
    },
    {
      name: "İş Dünyası",
      submenu: ["Ekonomi", "Finans", "Teknoloji", "Enerji", "Emlak"],
      haberKategorileri: ["EKONOMİ", "TEKNOLOJİ"],
    },
    {
      name: "Yaşam",
      submenu: ["Kültür", "Sanat", "Seyahat", "Yemek", "Moda"],
      haberKategorileri: ["KÜLTÜR"],
    },
  ];

  const getKategoriHaberleri = (kategoriName: string) => {
    const kategori = kategoriler.find((k) => k.name === kategoriName);
    if (!kategori) return [];
    return haberler.filter((haber) =>
      kategori.haberKategorileri.includes(haber.kategori)
    );
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header className="border-b border-black/20 sticky top-0 bg-white z-50">
        {/* Top Section */}
        <div className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between gap-4 py-2">
              {/* Left: Podcast Feature */}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 bg-black text-white px-2.5 py-1 rounded-full hover:bg-black/90 transition-colors text-[10px] font-sans">
                  <Headphones className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Podcast</span>
                  <span className="sm:hidden">5,810</span>
                </button>
                <button className="p-1 hover:bg-black/5 rounded-full transition-colors">
                  <Play className="w-3.5 h-3.5 text-black" />
                </button>
              </div>

              {/* Center: Logo */}
              <div className="flex-1 text-center">
                <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-none">
                  Haber
                </h1>
              </div>

              {/* Right: Date & Menu */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex flex-col items-end text-xs font-sans text-black/60">
                  <div className="uppercase tracking-wide">
                    {currentDate.split(" ")[0]}
                  </div>
                  <div className="text-[10px]">
                    {currentDate.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="p-1.5 hover:bg-black/5 rounded-full transition-colors md:hidden"
                  aria-label="Menu"
                >
                  <Menu className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:block bg-black">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ul className="flex items-center gap-1">
              {kategoriler.map((kategori, index) => {
                const kategoriHaberleri = getKategoriHaberleri(kategori.name);
                return (
                  <li key={index} className="relative group">
                    <button
                      onClick={() => toggleDropdown(kategori.name)}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-white hover:text-white/80 transition-colors"
                    >
                      {kategori.name}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${
                          activeDropdown === kategori.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Mega Menu */}
                    {activeDropdown === kategori.name && (
                      <div className="fixed left-0 right-0 top-[60px] bg-white border-t-2 border-black shadow-2xl z-50">
                        <div className="px-6 py-12">
                          <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-3 gap-12">
                              {/* Left: Submenu Links */}
                              <div>
                                <h3 className="text-base font-bold text-black/50 mb-6 font-sans">
                                  Alt Kategoriler
                                </h3>
                                <ul className="space-y-3">
                                  {kategori.submenu.map((item, idx) => (
                                    <li key={idx}>
                                      <a
                                        href={`#${item.toLowerCase()}`}
                                        className="block text-base font-bold font-sans text-black/70 hover:text-black transition-colors py-2"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Right: Featured News */}
                              <div className="col-span-2">
                                <h3 className="text-base font-bold text-black/50 mb-6 font-sans">
                                  Öne Çıkanlar
                                </h3>
                                <div className="grid grid-cols-2 gap-8">
                                  {kategoriHaberleri.slice(0, 4).map((haber) => (
                                    <Link
                                      key={haber.id}
                                      href={`/haber/${haber.slug}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className="group"
                                    >
                                      <div className="space-y-3">
                                        <div className="text-xs font-bold tracking-wide text-black/50 font-sans">
                                          {haber.kategori}
                                        </div>
                                        <h4 className="font-serif text-xl font-bold text-black leading-tight group-hover:text-black/70 transition-colors">
                                          {haber.baslik}
                                        </h4>
                                        <p className="text-base text-black/60 font-serif line-clamp-3">
                                          {haber.ozet}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-bold text-black/50 font-sans">
                                          <span>{haber.yazar}</span>
                                          <span>•</span>
                                          <span>{haber.tarih}</span>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Outside header for better z-index control */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[60] md:hidden bg-black/20"
            onClick={() => {
              setIsMenuOpen(false);
              setActiveDropdown(null);
            }}
          />
          {/* Mobile Menu */}
          <div className="fixed top-[60px] left-0 right-0 bottom-0 md:hidden bg-white z-[70] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <ul className="space-y-2">
                {kategoriler.map((kategori, index) => (
                  <li key={index}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(kategori.name);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-sans text-black/70 hover:text-black hover:bg-black/5 transition-colors uppercase tracking-wide border border-black/10"
                    >
                      {kategori.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === kategori.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === kategori.name && (
                      <ul className="mt-2 space-y-1 pl-4">
                        {kategori.submenu.map((item, idx) => (
                          <li key={idx}>
                            <a
                              href={`#${item.toLowerCase()}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="block px-4 py-2 text-sm font-sans text-black/60 hover:text-black hover:bg-black/5 transition-colors"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Click outside to close desktop dropdown */}
      {activeDropdown && !isMenuOpen && (
        <div
          className="fixed inset-0 z-40 hidden md:block"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
}

