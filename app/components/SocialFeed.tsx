"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";
import { InstagramIcon } from "./SocialIcons";

const instagramPosts = [
  "https://images.unsplash.com/photo-1616947005579-e0259d895925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1672845888669-858852833df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1694316694211-689b84a41f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1533537124921-db3248c9fa93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxzdW5zZXQlMjBvY2VhbiUyMGJvYXQlMjBsdXh1cnklMjB0cmF2ZWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1564845654222-d437f029c5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxzdW5zZXQlMjBvY2VhbiUyMGJvYXQlMjBsdXh1cnklMjB0cmF2ZWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1613385181595-185b72d4af07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8dHJvcGljYWwlMjBpc2xhbmQlMjBiZWFjaCUyMHR1cnF1b2lzZSUyMHdhdGVyJTIwYWVyaWFsfGVufDF8fHx8MTc3ODc5Nzc0MXww&ixlib=rb-4.1.0&q=80&w=1080",
];

export function SocialFeed() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-ocean-blue" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-blue">
              {t.social.title}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.social.subtitle}
          </p>
          <a
            href="https://www.instagram.com/salty.crewpr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-soft-gold hover:text-luxury-gold transition-colors font-medium"
          >
            @salty.crewpr
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/salty.crewpr/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
