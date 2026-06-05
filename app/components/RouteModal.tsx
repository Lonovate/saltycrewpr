"use client";

import { useEffect } from "react";
import { X, Clock, Users, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../lib/i18n";
import { bookingLinks } from "../lib/translations";

type Package = {
  name: string;
  duration: string;
  guests: string;
  price: string;
  bookingKey: string;
  description: string;
  includes: string[];
};

type RouteData = {
  name: string;
  description: string;
  image: string;
  packages: Package[];
};

export function RouteModal({
  route,
  isOpen,
  onClose,
}: {
  route: RouteData | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!route) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={route.image}
                alt={route.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ocean-blue/85" />
            </div>

            {/* Content */}
            <div className="relative p-6 md:p-10">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-2"
                aria-label={t.routes.close}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Route title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {route.name}
              </h2>
              <p className="text-white/80 mb-8 text-lg">{route.description}</p>

              {/* Packages */}
              <div className="space-y-6">
                {route.packages.map((pkg) => (
                  <div
                    key={pkg.bookingKey}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-soft-gold">
                          {pkg.name}
                        </h3>
                        <p className="text-white/80 text-sm mt-1">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-white/60 text-xs uppercase tracking-wider">
                          {t.routes.startingAt}
                        </p>
                        <p className="text-3xl font-bold text-white">
                          {pkg.price}
                        </p>
                      </div>
                    </div>

                    {/* Duration & Guests */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center gap-2 text-white/90 text-sm bg-white/10 rounded-full px-3 py-1">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-2 text-white/90 text-sm bg-white/10 rounded-full px-3 py-1">
                        <Users className="w-4 h-4" />
                        {pkg.guests}
                      </span>
                    </div>

                    {/* Includes */}
                    <div className="mb-5">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-2">
                        {t.routes.includes}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {pkg.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-white/90 text-sm"
                          >
                            <Check className="w-4 h-4 text-soft-gold shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Reserve Now */}
                    {/* <a
                      href={
                        bookingLinks[
                          pkg.bookingKey as keyof typeof bookingLinks
                        ]
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-soft-gold hover:bg-luxury-gold text-ocean-blue font-bold py-3 px-8 rounded-full transition-colors text-center w-full md:w-auto"
                    >
                      {t.routes.reserveNow}
                    </a> */}
                  </div>
                ))}
              </div>

              {/* Add-Ons */}
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-soft-gold mb-4">
                  {t.routes.addOns}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {t.routes.addOnsList.map((addOn) => (
                    <li
                      key={addOn.name}
                      className="flex items-center justify-between text-white/90 text-sm"
                    >
                      <span>{addOn.name}</span>
                      <span className="text-soft-gold font-semibold ml-2">
                        {addOn.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
