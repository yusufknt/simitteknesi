import emailjs from "@emailjs/browser";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Head from "next/head";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      // EmailJS konfigürasyonu - Bu değerleri kendi EmailJS hesabınızdan alacaksınız
      const serviceId = "service_u4gpsnl"; // Gmail, Outlook vb. servisi
      const templateId = "template_k1sp3j9"; // Email template ID'si
      const publicKey = "ECyqBLsuahLujQ0-k"; // EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Simit Teknesi Nazilli", // Alıcı ismi
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email gönderme hatası:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Adres",
      content: "Bamboo Avm \nNazilli, Aydın",
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Telefon",
      content: "+90 531 330 09 65",
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "E-posta",
      content: "info@simitteknesinazilli.com",
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Çalışma Saatleri",
      content: "Her Gün Açık: 10:00 - 22:00",
    },
  ];

  return (
    <>
      <Head>
        <title>İletişim - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli ile iletişime geçin. Nazilli'deki yerimize uğrayın ya da bize mesaj gönderin."
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pt-24 bg-parchment-light min-h-screen"
      >
        {/* Header */}
        <section className="py-20 relative overflow-hidden bg-charcoal-deep text-white border-b border-baked-gold/20">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#B21F24 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-label-lg text-label-lg text-baked-gold uppercase tracking-[0.3em] mb-4 inline-block">
                İLETİŞİM
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-white mb-6">
                Bize Ulaşın
              </h1>
              <div className="h-px w-24 bg-baked-gold mx-auto mb-8" />
              <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Sorularınız, önerileriniz veya rezervasyon talepleriniz için
                bizimle iletişime geçin
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-muted/40 p-8 text-center rounded-2xl shadow-sm hover:shadow-xl hover:border-baked-gold/30 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="text-baked-gold flex justify-center mb-6">
                    {info.icon}
                  </div>
                  <h3 className="font-headline-md text-title-lg text-charcoal-deep mb-4 font-bold">
                    {info.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed whitespace-pre-line text-sm">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-white/40 border-t border-b border-slate-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-md text-charcoal-deep mb-8 font-bold">
                  Mesaj Gönderin
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-label-lg text-sm text-charcoal-deep font-semibold mb-2"
                    >
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 border border-slate-muted rounded-xl bg-white focus:ring-1 focus:ring-baked-gold focus:border-baked-gold font-body-md text-charcoal-deep transition-all duration-200 outline-none"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-label-lg text-sm text-charcoal-deep font-semibold mb-2"
                    >
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 border border-slate-muted rounded-xl bg-white focus:ring-1 focus:ring-baked-gold focus:border-baked-gold font-body-md text-charcoal-deep transition-all duration-200 outline-none"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-label-lg text-sm text-charcoal-deep font-semibold mb-2"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-5 py-3 border border-slate-muted rounded-xl bg-white focus:ring-1 focus:ring-baked-gold focus:border-baked-gold font-body-md text-charcoal-deep transition-all duration-200 resize-none outline-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  {/* Status Mesajları */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-green-700 font-medium">
                          Mesajınız başarıyla gönderildi! En kısa sürede size
                          döneceğiz.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-red-700 font-medium">
                          Mesaj gönderilirken bir hata oluştu. Lütfen tekrar
                          deneyin.
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-baked-gold hover:bg-hearth-bronze text-white py-4 rounded-xl font-label-lg text-label-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 relative overflow-hidden ${
                      isLoading ? "cursor-not-allowed text-white/50" : ""
                    }`}
                  >
                    <span className={`flex items-center justify-center transition-all duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                      Mesajı Gönder
                    </span>
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-baked-gold">
                        <span className="font-label-lg tracking-widest animate-pulse">
                          Gönderiliyor...
                        </span>
                      </div>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-md text-charcoal-deep mb-8 font-bold">
                  Konumumuz
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-muted/50 relative bg-slate-50 h-96 w-full flex items-center justify-center">
                  {!mapLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-charcoal-deep/5 to-baked-gold/5 animate-pulse z-10">
                      <MapPinIcon className="h-10 w-10 text-baked-gold mb-3 animate-bounce" style={{ animationDuration: '2s' }} />
                      <span className="font-label-lg text-sm text-charcoal-deep/60 tracking-wider">
                        Harita Yükleniyor...
                      </span>
                    </div>
                  )}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.1234567890123!2d28.27847222222222!3d37.89833333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUzJzU0LjAiTiAyOMKwMTYnNDIuNSJF!5e0!3m2!1str!2str!4v1234567890123"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Simit Teknesi Nazilli Konumu"
                    onLoad={() => setMapLoaded(true)}
                    className={`w-full h-full transition-opacity duration-1000 ${
                      mapLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  ></iframe>
                </div>

                <div className="mt-8 p-8 bg-white border border-slate-muted/40 rounded-2xl shadow-sm">
                  <h3 className="font-headline-md text-lg font-bold text-charcoal-deep mb-4">
                    Ulaşım Bilgileri
                  </h3>
                  <ul className="space-y-3 text-on-surface-variant font-body-md text-sm">
                    <li>• Otobüs: Şehir içi 1, 2, 3 numaralı hatlar</li>
                    <li>• Dolmuş: Merkez-Cumhuriyet hattı</li>
                    <li>• Ücretsiz otopark imkanı mevcut</li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <a
                      href="https://maps.google.com/?q=37.89833333333333,28.27847222222222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-baked-gold hover:text-hearth-bronze font-bold transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {"Google Maps'te Aç"}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-24 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(26, 26, 26, 0.92), rgba(26, 26, 26, 0.85)), url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="font-display-lg text-2xl md:text-3xl text-white mb-6">
                Sizi Kafemizde Ağırlamaktan Mutluluk Duyarız
              </h2>
              <p className="font-body-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                {"Nazilli'nin kalbindeki sıcak atmosferimizde, lezzetli ürünlerimizi deneyimlemeye davetlisiniz."}
              </p>
              <div className="font-label-lg text-baked-gold uppercase tracking-wider text-sm md:text-base flex flex-wrap justify-center gap-x-8 gap-y-3 font-semibold">
                <span>📍 Bamboo AVM, Nazilli, Aydın</span>
                <span>📞 +90 (531) 330 09 65</span>
                <span>🕒 Her Gün 10:00 - 22:00</span>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ContactPage;
