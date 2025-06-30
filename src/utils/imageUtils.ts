// Resim yollarını yönetmek için utility fonksiyonları
export const getImagePath = (path: string): string => {
  // Eğer path zaten tam URL ise, olduğu gibi döndür
  if (path.startsWith("http")) {
    return path;
  }

  // Local path'leri döndür
  return path;
};

// Resim yükleme hatası durumunda fallback resim
export const getFallbackImage = (): string => {
  return "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Resim+Yükleniyor";
};

// Resim yükleme hatası handler'ı
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const img = event.target as HTMLImageElement;
  img.src = getFallbackImage();
  img.alt = "Resim yüklenemedi";
};
