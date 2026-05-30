"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    route: "",
    communicationMethod: "",
    groupSize: "",
    message: "",
  });

  const validate = () => {
    const v = t.validation;
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = v.required;
    if (!formData.lastName.trim()) newErrors.lastName = v.required;
    if (!formData.phone.trim()) newErrors.phone = v.required;
    if (!formData.email.trim()) newErrors.email = v.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = v.invalidEmail;
    if (!formData.route) newErrors.route = v.required;
    if (!formData.communicationMethod)
      newErrors.communicationMethod = v.required;
    if (!formData.groupSize) newErrors.groupSize = v.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        route: "",
        communicationMethod: "",
        groupSize: "",
        message: "",
      });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const f = t.contact.form;
  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-gray-50 border ${
      errors[field] ? "border-red-400" : "border-gray-200"
    } focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20 outline-none transition-all`;

  const routeValues = ["icacos", "culebra", "vieques", "sunset", "private", "palomino"];
  const routeOptions = routeValues.map((value, i) => ({
    value,
    label: t.routes.items[i].name,
  }));

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
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
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581793263246-e0c805b81fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB5YWNodCUyMGNhcmliYmVhbiUyMHRyb3BpY2FsJTIwd2F0ZXJzJTIwcHVlcnRvJTIwcmljb3xlbnwxfHx8fDE3Nzg3OTc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Contact us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-6">
                <h3 className="text-3xl font-bold mb-6">{t.contact.info}</h3>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-gold rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.contact.phone}</p>
                    <a
                      href="tel:+17875506017"
                      className="text-white/90 hover:text-soft-gold transition-colors"
                    >
                      (787) 550-6017
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-gold rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.contact.email}</p>
                    <a
                      href="mailto:crewsaltypr@gmail.com"
                      className="text-white/90 hover:text-soft-gold transition-colors"
                    >
                      crewsaltypr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-gold rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.contact.location}</p>
                    <p className="text-white/90">{t.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-gray-700 font-medium">
                  {f.firstName} *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-gray-700 font-medium">
                  {f.lastName} *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                {f.phoneNumber} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                {f.emailAddress} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="route" className="block mb-2 text-gray-700 font-medium">
                {f.preferredRoute} *
              </label>
              <select
                id="route"
                name="route"
                value={formData.route}
                onChange={handleChange}
                className={inputClass("route")}
              >
                <option value="">{f.selectRoute}</option>
                {routeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.route && (
                <p className="text-red-500 text-sm mt-1">{errors.route}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="communicationMethod"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  {f.communicationMethod} *
                </label>
                <select
                  id="communicationMethod"
                  name="communicationMethod"
                  value={formData.communicationMethod}
                  onChange={handleChange}
                  className={inputClass("communicationMethod")}
                >
                  <option value="">{f.selectMethod}</option>
                  <option value="email">{f.methodEmail}</option>
                  <option value="phone">{f.methodPhone}</option>
                  <option value="whatsapp">{f.methodWhatsApp}</option>
                  <option value="sms">{f.methodSMS}</option>
                </select>
                {errors.communicationMethod && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.communicationMethod}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="groupSize" className="block mb-2 text-gray-700 font-medium">
                  {f.groupSize} *
                </label>
                <select
                  id="groupSize"
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  className={inputClass("groupSize")}
                >
                  <option value="">{f.selectSize}</option>
                  <option value="0-6">{f.sizeSmall}</option>
                  <option value="6+">{f.sizeLarge}</option>
                </select>
                {errors.groupSize && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.groupSize}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                {f.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20 outline-none transition-all resize-none"
              />
            </div>

            {status === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                {f.success}
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {f.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-8 py-4 bg-soft-gold text-white rounded-lg hover:bg-luxury-gold transition-all transform hover:scale-[1.02] shadow-lg text-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "sending" ? f.sending : f.submit}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
