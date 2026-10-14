import React, { useSyncExternalStore } from "react";
import { CLOSE_HOUR, OPEN_HOUR } from "../data/business";

// Kafenin şu an açık olup olmadığı (Türkiye saatine göre). Sunucuda saat bilinmediği için
// sadece tarayıcıda gösterilir; dakikada bir güncellenir.
const getIstanbulHour = () =>
  Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "Europe/Istanbul",
    }).format(new Date())
  );

const getSnapshot = () => {
  const hour = getIstanbulHour();
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR ? "open" : "closed";
};

const subscribe = (onChange: () => void) => {
  const timer = setInterval(onChange, 60_000);
  return () => clearInterval(timer);
};

const OpenStatus: React.FC<{ className?: string }> = ({ className = "" }) => {
  const status = useSyncExternalStore(subscribe, getSnapshot, () => null);
  if (!status) return null;

  const isOpen = status === "open";
  return (
    <p className={`inline-flex items-center gap-2 font-body-md text-sm ${className}`}>
      <span
        className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-400" : "bg-white/50"}`}
        aria-hidden="true"
      />
      {isOpen
        ? `Şu an açığız, ${CLOSE_HOUR}:00'de kapanıyoruz`
        : `Şu an kapalıyız, ${OPEN_HOUR}:00'da açılıyoruz`}
    </p>
  );
};

export default OpenStatus;
