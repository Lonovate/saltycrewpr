"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

const imagesRow1 = [
  "https://images.unsplash.com/photo-1533358122925-6eb2658855bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1637872598897-f0ecf7557b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1709423269695-30201db58887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1625616892315-93c10a448e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1709423698169-75abf4f356bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1594651289320-dd12e4bad574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIweWFjaHQlMjBjYXJpYmJlYW4lMjB0cm9waWNhbCUyMHdhdGVycyUyMHB1ZXJ0byUyMHJpY298ZW58MXx8fHwxNzc4Nzk3NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
];

const imagesRow2 = [
  "https://images.unsplash.com/photo-1688541197205-02bd8c71074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwdHVycXVvaXNlJTIwd2F0ZXIlMjBhZXJpYWx8ZW58MXx8fHwxNzc4Nzk3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1616947005579-e0259d895925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1672845888669-858852833df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1694316694211-689b84a41f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1613385181595-185b72d4af07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8dHJvcGljYWwlMjBpc2xhbmQlMjBiZWFjaCUyMHR1cnF1b2lzZSUyMHdhdGVyJTIwYWVyaWFsfGVufDF8fHx8MTc3ODc5Nzc0MXww&ixlib=rb-4.1.0&q=80&w=1080",
];

export function Gallery() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-blue mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="space-y-8">
        <div className="relative">
          <div className="flex gap-6 animate-scroll-left">
            {[...imagesRow1, ...imagesRow1].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`Gallery image ${(index % imagesRow1.length) + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll-right">
            {[...imagesRow2, ...imagesRow2].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`Gallery image ${(index % imagesRow2.length) + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
