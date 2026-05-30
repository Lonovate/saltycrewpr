"use client";

import { Users, Award, BadgeCheck, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

const icons = [Users, Award, BadgeCheck, Shield];

export function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-ocean-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t.whyChooseUs.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whyChooseUs.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-soft-gold mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
