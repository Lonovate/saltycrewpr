"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../lib/i18n";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "./SocialIcons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.routes, id: "routes" },
    { label: t.nav.history, id: "history" },
    { label: t.nav.contact, id: "contact" },
  ];

  const textColor = isScrolled ? "text-gray-700" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex-shrink-0"
          >
            <span
              className={`text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? "text-ocean-blue" : "text-white"
              }`}
            >
              Salty Crew PR
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors hover:text-soft-gold ${textColor}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/salty.crewpr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`transition-colors hover:text-soft-gold ${textColor}`}
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588641099875"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`transition-colors hover:text-soft-gold ${textColor}`}
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@salty.crewpr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className={`transition-colors hover:text-soft-gold ${textColor}`}
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/message/GCDJVX4AXWAGI1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`transition-colors hover:text-soft-gold ${textColor}`}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-soft-gold text-white"
                    : `${textColor} hover:text-soft-gold`
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  language === "es"
                    ? "bg-soft-gold text-white"
                    : `${textColor} hover:text-soft-gold`
                }`}
              >
                ES
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${textColor}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-700 hover:text-soft-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a
                  href="https://www.instagram.com/salty.crewpr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-700 hover:text-soft-gold"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61588641099875"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-700 hover:text-soft-gold"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@salty.crewpr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-gray-700 hover:text-soft-gold"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/message/GCDJVX4AXWAGI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-700 hover:text-soft-gold"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <div className="flex items-center space-x-2 ml-auto">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      language === "en"
                        ? "bg-soft-gold text-white"
                        : "text-gray-700"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage("es")}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      language === "es"
                        ? "bg-soft-gold text-white"
                        : "text-gray-700"
                    }`}
                  >
                    ES
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
