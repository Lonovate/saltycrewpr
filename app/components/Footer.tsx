"use client";

import { useTranslation } from "../lib/i18n";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "./SocialIcons";

export function Footer() {
  const { t, language, setLanguage } = useTranslation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.routes, id: "routes" },
    { label: t.nav.history, id: "history" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <footer className="bg-deep-ocean text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Salty Crew PR</h3>
            <p className="text-white/70 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-soft-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-white/70">
              <li>Fajardo, Puerto Rico</li>
              <li>
                <a
                  href="tel:+17875506017"
                  className="hover:text-soft-gold transition-colors"
                >
                  (787) 550-6017
                </a>
              </li>
              <li>
                <a
                  href="mailto:crewsaltypr@gmail.com"
                  className="hover:text-soft-gold transition-colors"
                >
                  crewsaltypr@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">{t.footer.followUs}</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/salty.crewpr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588641099875"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@salty.crewpr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/message/GCDJVX4AXWAGI1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-soft-gold text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "es"
                    ? "bg-soft-gold text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-sm">
            {t.footer.builtBy}{" "}
            <a
              href="https://lonovate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white/80 hover:text-soft-gold transition-colors"
            >
              Lonovate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
