# 🥖 Simit Teknesi - Modern Türk Kafesi Web Sitesi

Bu proje, **Simit Teknesi** adlı geleneksel Türk kafesi için geliştirilmiş modern, duyarlı (responsive) ve görsel olarak etkileyici bir web sitesidir.

## 📋 Özellikler

### ✨ Temel Özellikler

- **Modern ve Responsive Tasarım** - Tüm cihazlarda kusursuz çalışır
- **Yumuşak Animasyonlar** - Framer Motion ile profesyonel geçişler
- **Sticky Navigation** - Kaydırılabilir üst menü
- **Mobil Hamburger Menü** - Mobil cihazlar için optimized menü
- **Türkçe İçerik** - Tamamen Türkçe dil desteği

### 🎨 Tasarım

- **Renk Paleti**: Marka kırmızısı (#B21F24), koyu zeminler için açık kırmızı (#F05252) ve Beyaz (#FFFFFF)
- **Typography**: Playfair Display (başlıklar), Montserrat (metin), Inter (varsayılan)
- **Tailwind CSS** ile modern stil yaklaşımı
- **Hover efektleri** ve **smooth transitions**

### 📱 Sayfalar

1. **Anasayfa** - Hero section, özellikler ve popüler ürünler
2. **Menü** - Kategorilere ayrılmış ürün listesi ve filtreleme
3. **Hakkımızda** - Şirket hikayesi, değerler ve başarılar
4. **İletişim** - İletişim formu ve konum bilgileri

## 🛠️ Teknoloji Yığını

- **Frontend Framework**: Next.js 16 (Pages Router) with TypeScript
- **Styling**: Tailwind CSS v4 (tema `src/styles/globals.css` içindeki `@theme` bloğunda)
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Language**: TypeScript
- **Package Manager**: npm/yarn

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**

```bash
npm install
# veya
yarn install
```

2. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
# veya
yarn dev
```

3. **Tarayıcınızda açın:**

```
http://localhost:3000
```

### Diğer Komutlar

```bash
# Production build oluşturma
npm run build

# Production sunucusu başlatma
npm run start

# Kod kalitesi kontrolü
npm run lint
```

## 📁 Proje Yapısı

```
simittekne/
├── public/
│   ├── favicon.ico
│   └── images/             # Ürün ve site görselleri (Git LFS ile saklanır)
├── src/
│   ├── components/
│   │   ├── Layout.tsx      # Ana layout bileşeni
│   │   ├── Header.tsx      # Üst menü ve navigasyon
│   │   ├── Footer.tsx      # Alt bilgi
│   │   └── Hero.tsx        # Anasayfa hero bölümü
│   ├── pages/
│   │   ├── _app.tsx        # Next.js app wrapper
│   │   ├── index.tsx       # Anasayfa
│   │   ├── menu.tsx        # Menü sayfası
│   │   ├── hakkimizda.tsx  # Hakkımızda sayfası
│   │   ├── iletisim.tsx    # İletişim sayfası
│   │   └── 404.tsx         # Sayfa bulunamadı
│   ├── utils/
│   │   └── imageUtils.ts   # Görsel yükleme hatası için yedek görseller
│   └── styles/
│       └── globals.css     # Global stiller ve Tailwind teması
├── tsconfig.json          # TypeScript konfigürasyonu
├── next.config.js         # Next.js konfigürasyonu
├── package.json           # Proje bağımlılıkları
└── README.md             # Bu dosya
```

## 🎯 Önemli Bileşenler

### Layout.tsx

- Tüm sayfalarda ortak layout
- Header ve Footer bileşenlerini içerir

### Header.tsx

- Sticky navigation
- Mobil hamburger menü
- Scroll-based style değişimi

### Hero.tsx

- Animated landing section (CSS animasyonları, JavaScript yüklenmeden de görünür)
- Call-to-action butonları

## 🎨 Stil Rehberi

### Renk Paleti

```css
/* Marka kırmızısı (açık zeminlerde) */
--color-baked-gold: #b21f24;

/* Koyu zeminlerdeki kırmızı yazı/ikonlar (WCAG AA kontrastı) */
--color-ember: #f05252;

/* Koyu zemin */
--color-charcoal-deep: #151010;
```

### Tipografi

- **Font**: Playfair Display, Montserrat, Inter (Google Fonts)
- **Başlıklar**: 600-800 font weight
- **Metin**: 400-500 font weight

### Custom CSS Classes

```css
.hero-overlay   /* Hero görseli üzerindeki koyu degrade */
.text-glow      /* Başlıklar için hafif kırmızı parıltı */
.animate-fade-up, .animate-page-in, .animate-grow-x  /* Açılış animasyonları */
```

## 📱 Responsive Tasarım

- **Mobile First** yaklaşımı
- **Breakpoints**:
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+

## 🚀 Yayınlama (Deployment)

### Vercel (Önerilen)

```bash
npm install -g vercel
vercel
```

> **Not:** Görseller Git LFS ile saklanır. Projeyi ZIP olarak indirmek yerine
> `git clone` + `git lfs pull` kullanın; aksi halde `public/images` altında gerçek
> görseller yerine küçük LFS işaretçi dosyaları gelir.

## 🔧 Özelleştirme

### Renkleri Değiştirme

`src/styles/globals.css` içindeki `@theme` bloğunda renk değişkenlerini düzenleyin.

### İçerikleri Güncelleme

Her sayfa kendi içerik verilerini içerir. Menü öğeleri, şirket bilgileri ve iletişim detayları ilgili dosyalarda güncellenebilir.

### Yeni Sayfa Ekleme

1. `src/pages/` altında yeni dosya oluşturun
2. `src/components/Header.tsx` içindeki navigation array'ine ekleyin

## 🐛 Bilinen Sorunlar

- Bazı ürünlerin kendine ait fotoğrafı yoktur, benzer ürünün fotoğrafı kullanılmaktadır
- İletişim formu EmailJS ile gönderilir (bkz. `.env.example`)

## 📞 Destek

Herhangi bir sorun için:

- GitHub Issues kullanın
- Proje geliştiricisi ile iletişime geçin

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Simit Teknesi** © 2024 - Tüm hakları saklıdır.
