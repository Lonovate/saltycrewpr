"use client";

import { motion } from "framer-motion";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "./SocialIcons";

export function UnderConstruction() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1541417904950-b855846fe074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Tropical Paradise - Puerto Rico aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Coming Soon
        </h1>
        <div className="w-24 h-1 bg-soft-gold mx-auto mb-8 rounded-full" />
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          We are setting sail soon.
        </p>
        <p className="text-lg text-white/70 mb-12 font-light">
          Luxury boat experiences in Puerto Rico — launching shortly.
        </p>
        <div className="inline-block px-8 py-4 bg-soft-gold/20 backdrop-blur-sm text-soft-gold rounded-lg border border-soft-gold/40 text-lg font-medium mb-10">
          Salty Crew PR
        </div>

        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://www.instagram.com/salty.crewpr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors text-white"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61588641099875"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors text-white"
          >
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@salty.crewpr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors text-white"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/message/GCDJVX4AXWAGI1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-soft-gold transition-colors text-white"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
