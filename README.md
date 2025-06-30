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

- **Renk Paleti**: Kırmızı (#EF4444) ve Beyaz (#FFFFFF)
- **Typography**: Inter font ailesi
- **Tailwind CSS** ile modern stil yaklaşımı
- **Hover efektleri** ve **smooth transitions**

### 📱 Sayfalar

1. **Anasayfa** - Hero section, özellikler ve popüler ürünler
2. **Menü** - Kategorilere ayrılmış ürün listesi ve filtreleme
3. **Hakkımızda** - Şirket hikayesi, değerler ve başarılar
4. **İletişim** - İletişim formu ve konum bilgileri

## 🛠️ Teknoloji Yığını

- **Frontend Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
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
│   └── favicon.ico
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
│   │   └── iletisim.tsx    # İletişim sayfası
│   └── styles/
│       └── globals.css     # Global stiller
├── tailwind.config.js      # Tailwind konfigürasyonu
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

- Animated landing section
- Call-to-action butonları
- Floating elements

## 🎨 Stil Rehberi

### Renk Paleti

```css
/* Ana Kırmızı */
primary-500: #ef4444

/* Destekleyici Renkler */
primary-50: #fef2f2
primary-100: #fee2e2
primary-600: #dc2626
```

### Tipografi

- **Font**: Inter (Google Fonts)
- **Başlıklar**: 600-800 font weight
- **Metin**: 400-500 font weight

### Custom CSS Classes

```css
.btn-primary    /* Ana buton stili */
/* Ana buton stili */
.btn-secondary  /* İkincil buton stili */
.card          /* Kart bileşeni */
.text-gradient; /* Gradient metin */
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

### Netlify

```bash
npm run build
# dist/ klasörünü Netlify'a yükleyin
```

### GitHub Pages

```bash
npm run build
npm run export
# out/ klasörünü GitHub Pages'e yükleyin
```

## 🔧 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.js` dosyasındaki `primary` color paletini düzenleyin.

### İçerikleri Güncelleme

Her sayfa kendi içerik verilerini içerir. Menü öğeleri, şirket bilgileri ve iletişim detayları ilgili dosyalarda güncellenebilir.

### Yeni Sayfa Ekleme

1. `src/pages/` altında yeni dosya oluşturun
2. `src/components/Header.tsx` içindeki navigation array'ine ekleyin

## 🐛 Bilinen Sorunlar

- Görsel yer tutucular (placeholder) kullanılmıştır
- Google Maps entegrasyonu tamamlanmamıştır
- Form submission backend entegrasyonu gereklidir

## 📞 Destek

Herhangi bir sorun için:

- GitHub Issues kullanın
- Proje geliştiricisi ile iletişime geçin

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Simit Teknesi** © 2024 - Tüm hakları saklıdır.
