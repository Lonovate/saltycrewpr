"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../lib/i18n";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const reviews = t.testimonials.reviews;
  const current = reviews[currentIndex];

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-blue mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-soft-gold text-soft-gold"
                  />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-700 italic text-center mb-8 leading-relaxed">
                &ldquo;{current.text}&rdquo;
              </p>
              <div className="text-center">
                <p className="font-bold text-ocean-blue text-lg">
                  {current.name}
                </p>
                <p className="text-gray-600">{current.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-ocean-blue" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-ocean-blue" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-soft-gold w-8"
                  : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
