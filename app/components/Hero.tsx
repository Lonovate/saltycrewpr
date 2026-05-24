"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1541417904950-b855846fe074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Tropical Paradise - Puerto Rico aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          {t.hero.headline1}
          <br />
          {t.hero.headline2}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
          {t.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-soft-gold text-white rounded-lg hover:bg-luxury-gold transition-all transform hover:scale-105 shadow-lg text-lg font-medium"
          >
            {t.hero.cta}
          </button>
          <button
            onClick={() => scrollToSection("routes")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/30 text-lg font-medium"
          >
            {t.hero.explore}
          </button>
        </div>
      </motion.div>

      <button
        onClick={() => scrollToSection("routes")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to routes"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
