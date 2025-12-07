"use client";

import { Twitter, Facebook, Instagram, Linkedin, Youtube, MessageCircle, ExternalLink } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    haberler: [
      { label: "Gündem", href: "#gundem" },
      { label: "Politika", href: "#politika" },
      { label: "Ekonomi", href: "#ekonomi" },
      { label: "Teknoloji", href: "#teknoloji" },
      { label: "Spor", href: "#spor" },
    ],
    kurumsal: [
      { label: "Hakkımızda", href: "#hakkimizda" },
      { label: "İletişim", href: "#iletisim" },
      { label: "Yazarlar", href: "#yazarlar" },
      { label: "Kariyer", href: "#kariyer" },
    ],
    yasal: [
      { label: "Gizlilik Politikası", href: "#gizlilik" },
      { label: "Kullanım Koşulları", href: "#kullanim" },
      { label: "Çerez Politikası", href: "#cerez" },
      { label: "Yayın İlkeleri", href: "#yayin" },
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: "#", label: "Telegram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-black/20 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-black mb-3">
              Haber
            </h2>
            <p className="text-sm text-black/60 font-sans mb-6 leading-relaxed">
              Güvenilir, tarafsız ve güncel haber kaynağınız.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                  >
                    <Icon className="w-5 h-5 text-black/60" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Haberler Links */}
          <div>
            <h3 className="font-serif text-sm font-bold text-black mb-4 uppercase tracking-wide">
              Haberler
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.haberler.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-black/60 hover:text-black font-sans transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal Links */}
          <div>
            <h3 className="font-serif text-sm font-bold text-black mb-4 uppercase tracking-wide">
              Kurumsal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.kurumsal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-black/60 hover:text-black font-sans transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Print Edition Section */}
          <div>
            <h3 className="font-serif text-sm font-bold text-black mb-4 uppercase tracking-wide">
              Baskı Dergisi
            </h3>
            <p className="text-sm text-black/60 font-sans mb-4 leading-relaxed">
              Otantik dokunsal deneyim için.
            </p>
            <a
              href="#print"
              className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black font-sans transition-colors"
            >
              Baskı Dergisi Al
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-black/50 font-sans text-center md:text-left">
            <p>© 2025 Haber. Tüm hakları saklıdır.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.yasal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs text-black/50 hover:text-black font-sans uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

