// Resim yollarını yönetmek için utility fonksiyonları
export const getImagePath = (path: string): string => {
  // Eğer path zaten tam URL ise, olduğu gibi döndür
  if (path.startsWith("http")) {
    return path;
  }

  // Local path'leri döndür
  return path;
};

// Resim kategorisine göre fallback resim
export const getFallbackImageByCategory = (imagePath: string): string => {
  const categoryMap: { [key: string]: string } = {
    kahvaltılar:
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

// Genel resim yükleme hatası durumunda fallback resim
export const getFallbackImage = (): string => {
  return "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Resim+Yükleniyor";
};

// Resim yükleme hatası handler'ı - daha akıllı fallback
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const img = event.target as HTMLImageElement;
  const originalSrc = img.src;

  // Eğer zaten fallback image kullanıyorsak, genel placeholder'a geç
  if (
    originalSrc.includes("unsplash.com") ||
    originalSrc.includes("placeholder.com")
  ) {
    img.src = getFallbackImage();
    img.alt = "Resim yüklenemedi";
    return;
  }

  // İlk hata durumunda kategori bazlı fallback kullan
  const categoryFallback = getFallbackImageByCategory(originalSrc);
  img.src = categoryFallback;
  img.alt = "Varsayılan resim";
};

// Resim önden yükleme fonksiyonu
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = src;
  });
};

// Resmin yüklenip yüklenmediğini kontrol et
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    await preloadImage(imagePath);
    return true;
  } catch {
    return false;
  }
};
