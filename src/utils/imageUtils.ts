// Sayfada orijinal fotoğraf yerine scripts/optimize-images.mjs'nin ürettiği küçük WebP
// kopyası kullanılır. "thumb": 240px kare; "640" ve "1280": en uzun kenar (en fazla).
// Kopya yüklenemezse handleImageError, img'nin data-full-src'sindeki orijinale döner.
export type ImageVariant = "thumb" | "640" | "1280";

export const optimizedSrc = (src: string, variant: ImageVariant): string => {
  if (!src.startsWith("/images/") || src.startsWith("/images/_opt/")) return src;
  const withoutExt = src.slice("/images/".length).replace(/\.[a-z]+$/i, "");
  return `/images/_opt/${withoutExt}-${variant}.webp`;
};

// 640/1280 genişlikli srcset; `sizes` ile tarayıcı ekrana uygun olanı seçer
export const responsiveSrcSet = (src: string): string =>
  `${optimizedSrc(src, "640")} 640w, ${optimizedSrc(src, "1280")} 1280w`;

// Resim kategorisine göre fallback resim
export const getFallbackImageByCategory = (imagePath: string): string => {
  const categoryMap: { [key: string]: string } = {
    kahvaltilar:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&auto=format",
    tostlar:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&auto=format",
    simitler:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&auto=format",
    pogacalar:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&auto=format",
    acmalar:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&auto=format",
    sandvic:
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop&auto=format",
    borekler:
      "https://images.unsplash.com/photo-1587736797129-8d7c3b4464e6?w=400&h=300&fit=crop&auto=format",
    tatlilar:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&auto=format",
    mutfaktan:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format",
    "sicak-icecekler":
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format",
    "soguk-icecekler":
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop&auto=format",
    "soguk-kahveler":
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format",
    bubbletea:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop&auto=format",
    aperatifler:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&auto=format",
  };

  // Path'den kategoriyi çıkar
  for (const category in categoryMap) {
    if (imagePath.includes(category)) {
      return categoryMap[category];
    }
  }

  // Varsayılan fallback
  return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format&q=80";
};

// Genel resim yükleme hatası durumunda fallback resim (harici servise bağımlı olmayan inline SVG)
export const getFallbackImage = (): string => {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
    '<rect width="400" height="300" fill="#f3f4f6"/>' +
    '<text x="200" y="155" font-family="sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle">Resim yüklenemedi</text>' +
    "</svg>";
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

// Hatalı resme fallback uygula: önce orijinal fotoğraf (küçük kopya üretilememişse),
// sonra kategori resmi, o da olmazsa genel placeholder
const applyImageFallback = (img: HTMLImageElement) => {
  // srcset varken src değiştirmek görünen resmi değiştirmez
  img.removeAttribute("srcset");
  img.removeAttribute("sizes");

  const fullSrc = img.dataset.fullSrc;
  if (fullSrc && img.getAttribute("src") !== fullSrc) {
    delete img.dataset.fullSrc;
    img.src = fullSrc;
    return;
  }

  const originalSrc = img.src;

  // Genel placeholder da yüklenemediyse döngüye girme
  if (originalSrc.startsWith("data:")) {
    return;
  }

  // Eğer zaten kategori fallback'i kullanıyorsak, genel placeholder'a geç
  if (originalSrc.includes("unsplash.com")) {
    img.src = getFallbackImage();
    img.alt = "Resim yüklenemedi";
    return;
  }

  // İlk hata durumunda kategori bazlı fallback kullan
  // (src URL-encoded geldiği için decode ederek kategori ara)
  img.src = getFallbackImageByCategory(decodeURI(originalSrc));
};

// Resim yükleme hatası handler'ı - daha akıllı fallback
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  applyImageFallback(event.currentTarget);
};

// Sunucuda render edilen resimler React hydrate olmadan önce hata verirse
// onError hiç tetiklenmez; mount anında resmi kontrol edip fallback uygular.
// Kullanım: <img ref={imageFallbackRef} onError={handleImageError} ... />
export const imageFallbackRef = (img: HTMLImageElement | null) => {
  if (img && img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
    applyImageFallback(img);
  }
};

