"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

const routeImages = [
  "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1600582910964-5b7c109e6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1674915849034-9c0ae798eb89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdW5zZXQlMjBvY2VhbiUyMGJvYXQlMjBsdXh1cnklMjB0cmF2ZWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1619118986411-29b465253365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
];

export function Routes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % t.routes.items.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + t.routes.items.length) % t.routes.items.length
    );

  const getVisibleRoutes = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % t.routes.items.length;
      visible.push({ ...t.routes.items[idx], image: routeImages[idx] });
    }
    return visible;
  };

  return (
    <section
      id="routes"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-blue mb-4">
            {t.routes.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.routes.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {getVisibleRoutes().map((route, i) => (
              <RouteCard
                key={`${currentIndex}-${i}`}
                route={route}
                exploreLabel={t.routes.explore}
              />
            ))}
          </div>

          <div className="md:hidden">
            <RouteCard
              route={{
                ...t.routes.items[currentIndex],
                image: routeImages[currentIndex],
              }}
              exploreLabel={t.routes.explore}
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous route"
          >
            <ChevronLeft className="w-6 h-6 text-ocean-blue" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Next route"
          >
            <ChevronRight className="w-6 h-6 text-ocean-blue" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {t.routes.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-soft-gold w-8"
                  : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to route ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function RouteCard({
  route,
  exploreLabel,
}: {
  route: { name: string; description: string; image: string };
  exploreLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={route.image}
          alt={route.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{route.name}</h3>
        <p className="text-white/90 mb-4">{route.description}</p>
        <button className="flex items-center space-x-2 text-soft-gold hover:text-luxury-gold transition-colors group/btn">
          <span>{exploreLabel}</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
