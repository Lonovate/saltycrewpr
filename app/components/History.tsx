"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

export function History() {
  const { t } = useTranslation();

  return (
    <section id="history" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1662392317112-e475cc74f219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Salty Crew PR Boat"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-blue">
              {t.history.title}
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>{t.history.p1}</p>
              <p>{t.history.p2}</p>
              <p>{t.history.p3}</p>
              <p>{t.history.p4}</p>
            </div>
            <div className="pt-6">
              <div className="inline-block border-l-4 border-soft-gold pl-6">
                <p className="text-xl italic text-gray-700">
                  &ldquo;{t.history.quote}&rdquo;
                </p>
                <p className="mt-2 text-gray-600">
                  &mdash; {t.history.quoteAuthor}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
