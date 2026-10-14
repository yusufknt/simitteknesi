// İşletme bilgileri: anasayfa ve hero aynı kaynaktan okur
export const OPEN_HOUR = 10;
export const CLOSE_HOUR = 22;
// Saat aralığı satır sonunda bölünmesin diye bölünmez boşluk kullanılır; tarayıcılar uzun
// tireden sonra yine de satır kırabildiği için tirenin arkasında görünmez word joiner (\u2060) var
export const HOURS_LABEL = "Her gün 10:00\u00a0\u2013\u2060\u00a022:00";

export const ADDRESS = "Bamboo AVM, Nazilli, Aydın";
export const PHONE_DISPLAY = "+90 531 330 09 65";
export const PHONE_HREF = "tel:+905313300965";

export const MAP_LAT = 37.89833333333333;
export const MAP_LNG = 28.27847222222222;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;
export const MAPS_URL = `https://maps.google.com/?q=${MAP_LAT},${MAP_LNG}`;
