import emailjs from "@emailjs/browser";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Head from "next/head";
import React, { useRef, useState } from "react";

// EmailJS bilgileri ortam değişkenlerinden okunur (.env.example). Bunlar EmailJS'in
// tarayıcıya açık "public" anahtarlarıdır; ortam değişkeni tanımlı değilse mevcut
// hesap bilgileri kullanılır, böylece yayındaki form çalışmaya devam eder.
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u4gpsnl";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_k1sp3j9";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ECyqBLsuahLujQ0-k";

// Spam koruması: sayfa açıldıktan bu süre geçmeden gönderilen formlar bot kabul edilir
const MIN_FILL_TIME_MS = 3000;

const PHONE_DISPLAY = "+90 531 330 09 65";
const PHONE_HREF = "tel:+905313300965";
const EMAIL = "info@simitteknesinazilli.com";
const MAP_LAT = 37.89833333333333;
const MAP_LNG = 28.27847222222222;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Botların doldurduğu gizli alan (honeypot); gerçek kullanıcılar bu alanı görmez
  const [honeypot, setHoneypot] = useState("");
  const [formOpenedAt] = useState(() => Date.now());
  const lastSubmitRef = useRef(0);

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

    // Bot gibi görünen gönderimleri sessizce yut (botlara hata ipucu verme)
    const now = Date.now();
    if (honeypot || now - formOpenedAt < MIN_FILL_TIME_MS) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      return;
    }
    // Art arda gönderimi engelle (30 sn)
    if (now - lastSubmitRef.current < 30000) {
      setSubmitStatus("error");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Simit Teknesi Nazilli", // Alıcı ismi
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      lastSubmitRef.current = Date.now();
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email gönderme hatası:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo: {
    icon: React.ReactNode;
    title: string;
    content: string;
    href?: string;
  }[] = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Adres",
      content: "Bamboo Avm \nNazilli, Aydın",
      href: `https://maps.google.com/?q=${MAP_LAT},${MAP_LNG}`,
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Telefon",
      content: PHONE_DISPLAY,
      href: PHONE_HREF,
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "E-posta",
      content: EMAIL,
      href: `mailto:${EMAIL}`,
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

      <div className="pt-24 bg-parchment-light min-h-screen animate-page-in motion-reduce:animate-none">
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
            <div>
              <span className="font-label-lg text-label-lg text-ember uppercase tracking-[0.3em] mb-4 inline-block">
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
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-muted/40 p-8 text-center rounded-2xl shadow-xs hover:shadow-xl hover:border-baked-gold/30 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="text-baked-gold flex justify-center mb-6" aria-hidden="true">
                    {info.icon}
                  </div>
                  <h3 className="font-headline-md text-title-lg text-charcoal-deep mb-4 font-bold">
                    {info.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed whitespace-pre-line text-sm">
                    {info.href ? (
                      <a
                        href={info.href}
                        className="hover:text-baked-gold underline-offset-4 hover:underline transition-colors break-words"
                        {...(info.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {info.content}
                      </a>
                    ) : (
                      info.content
                    )}
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
                  {/* Honeypot: ekranda ve ekran okuyucularda gizli, sadece botlar doldurur */}
                  <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Web siteniz</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>
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
                      className="w-full px-5 py-3 border border-slate-muted rounded-xl bg-white focus:ring-1 focus:ring-baked-gold focus:border-baked-gold font-body-md text-charcoal-deep transition-all duration-200 outline-hidden"
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
                      className="w-full px-5 py-3 border border-slate-muted rounded-xl bg-white focus:ring-1 focus:ring-baked-gold focus:border-baked-gold font-body-md text-charcoal-deep transition-all duration-200 outline-hidden"
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
                      className="w-full px-5 py-3 border border-slate-muted rounded-xl bg-white focus:ring-1 focus:ring-baked-gold focus:border-baked-gold font-body-md text-charcoal-deep transition-all duration-200 resize-none outline-hidden"
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-tr from-charcoal-deep/5 to-baked-gold/5 animate-pulse z-10">
                      <MapPinIcon className="h-10 w-10 text-baked-gold mb-3 animate-bounce" style={{ animationDuration: '2s' }} />
                      <span className="font-label-lg text-sm text-charcoal-deep/60 tracking-wider">
                        Harita Yükleniyor...
                      </span>
                    </div>
                  )}
                  <iframe
                    src={`https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&hl=tr&output=embed`}
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

                <div className="mt-8 p-8 bg-white border border-slate-muted/40 rounded-2xl shadow-xs">
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
                      href={`https://maps.google.com/?q=${MAP_LAT},${MAP_LNG}`}
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
          className="relative py-24 bg-scroll pointer-fine:bg-fixed bg-cover bg-center"
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
              <div className="font-label-lg text-ember uppercase tracking-wider text-sm md:text-base flex flex-wrap justify-center gap-x-8 gap-y-3 font-semibold">
                <span>📍 Bamboo AVM, Nazilli, Aydın</span>
                <a href={PHONE_HREF} className="hover:text-white transition-colors">📞 {PHONE_DISPLAY}</a>
                <span>🕒 Her Gün 10:00 - 22:00</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
