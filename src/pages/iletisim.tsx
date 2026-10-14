import emailjs from "@emailjs/browser";
import Head from "next/head";
import React, { useRef, useState } from "react";
import {
  ADDRESS,
  DIRECTIONS_URL,
  HOURS_LABEL,
  MAPS_URL,
  MAP_LAT,
  MAP_LNG,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../data/business";

// EmailJS bilgileri ortam değişkenlerinden okunur (.env.example). Bunlar EmailJS'in
// tarayıcıya açık "public" anahtarlarıdır; ortam değişkeni tanımlı değilse mevcut
// hesap bilgileri kullanılır, böylece yayındaki form çalışmaya devam eder.
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u4gpsnl";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_k1sp3j9";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ECyqBLsuahLujQ0-k";

// Spam koruması: sayfa açıldıktan bu süre geçmeden gönderilen formlar bot kabul edilir
const MIN_FILL_TIME_MS = 3000;

const EMAIL = "info@simitteknesinazilli.com";

const INPUT_CLASS =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-md font-body-md text-charcoal-deep placeholder:text-outline focus:border-baked-gold focus:ring-2 focus:ring-baked-gold/20 transition-colors duration-200 outline-hidden";
const LABEL_CLASS = "block font-body-md text-sm font-semibold text-charcoal-deep mb-2";

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
    title: string;
    content: string;
    href?: string;
  }[] = [
    {
      title: "Adres",
      content: ADDRESS,
      href: MAPS_URL,
    },
    {
      title: "Telefon",
      content: PHONE_DISPLAY,
      href: PHONE_HREF,
    },
    {
      title: "E-posta",
      content: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      title: "Çalışma saatleri",
      content: HOURS_LABEL,
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
        {/* Başlık ve iletişim bilgileri */}
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop pt-8 md:pt-12 pb-16 md:pb-20">
          <h1 className="font-display-lg text-[44px] md:text-[64px] leading-none text-charcoal-deep">
            İletişim
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl">
            Sorularınız, önerileriniz veya rezervasyon talepleriniz için bize yazın ya da arayın.
          </p>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-charcoal-deep pt-8 mt-12">
            {contactInfo.map((info) => (
              <div key={info.title}>
                <dt className="font-body-md text-sm text-outline">{info.title}</dt>
                <dd className="font-headline-md text-lg text-charcoal-deep mt-2 whitespace-pre-line lining-nums break-words">
                  {info.href ? (
                    <a
                      href={info.href}
                      className="hover:text-baked-gold transition-colors"
                      {...(info.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {info.content}
                    </a>
                  ) : (
                    info.content
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Mesaj formu ve harita */}
        <section className="py-16 md:py-24 bg-white border-y border-slate-muted">
          <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-[40px] md:leading-tight text-charcoal-deep">
                Mesaj gönderin
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3 mb-8 max-w-md">
                Yanıtımız e-posta adresinize gelir. Acil durumlar için bizi arayın.
              </p>
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

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={LABEL_CLASS}>
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={LABEL_CLASS}>
                      E-posta adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={INPUT_CLASS}
                      placeholder="ornek@eposta.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={LABEL_CLASS}>
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`${INPUT_CLASS} resize-y min-h-32`}
                  />
                </div>

                {/* Gönderim sonucu (ekran okuyucular da duyurur) */}
                <div aria-live="polite">
                  {submitStatus === "success" && (
                    <p className="border-l-2 border-emerald-600 pl-4 py-1 font-body-md text-sm text-emerald-800">
                      Mesajınız bize ulaştı. Yanıtımız e-posta adresinize gelecek.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="border-l-2 border-error pl-4 py-1 font-body-md text-sm text-on-error-container">
                      Mesaj gönderilemedi. Yarım dakika sonra tekrar deneyin ya da{" "}
                      <a href={PHONE_HREF} className="underline underline-offset-2 lining-nums whitespace-nowrap">
                        {PHONE_DISPLAY}
                      </a>{" "}
                      numarasından arayın.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  aria-busy={isLoading}
                  className="w-full sm:w-auto bg-baked-gold text-white px-10 py-4 rounded font-label-lg text-label-lg hover:bg-hearth-bronze disabled:bg-hearth-bronze disabled:cursor-wait transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-baked-gold focus-visible:ring-offset-2"
                >
                  {isLoading ? "Gönderiliyor…" : "Mesajı gönder"}
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-[40px] md:leading-tight text-charcoal-deep mb-8">
                Konum
              </h2>
              <div className="relative h-96 w-full overflow-hidden rounded-md border border-slate-muted bg-surface-container">
                {!mapLoaded && (
                  <p className="absolute inset-0 flex items-center justify-center font-body-md text-sm text-outline">
                    Harita yükleniyor…
                  </p>
                )}
                <iframe
                  src={`https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&hl=tr&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Simit Teknesi Nazilli konumu"
                  onLoad={() => setMapLoaded(true)}
                  className={`relative w-full h-full transition-opacity duration-500 ${
                    mapLoaded ? "opacity-100" : "opacity-0"
                  }`}
                ></iframe>
              </div>

              <h3 className="font-headline-md text-xl text-charcoal-deep mt-10 pb-3 border-b-2 border-charcoal-deep">
                Nasıl gelinir
              </h3>
              <ul className="font-body-md text-body-md text-on-surface-variant">
                <li className="py-3 border-b border-slate-muted">
                  <span className="font-semibold text-charcoal-deep">Otobüs:</span> şehir içi 1, 2 ve 3 numaralı hatlar
                </li>
                <li className="py-3 border-b border-slate-muted">
                  <span className="font-semibold text-charcoal-deep">Dolmuş:</span> Merkez–Cumhuriyet hattı
                </li>
                <li className="py-3 border-b border-slate-muted">
                  <span className="font-semibold text-charcoal-deep">Otopark:</span> ücretsiz
                </li>
              </ul>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 font-label-lg text-label-lg text-charcoal-deep underline underline-offset-[6px] decoration-baked-gold decoration-2 hover:text-baked-gold transition-colors"
              >
                Yol tarifi al
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
