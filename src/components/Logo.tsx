import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showBackground?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  className = "",
  showBackground = true,
}) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
  };

  const backgroundClasses = showBackground ? "drop-shadow-lg" : "";

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center ${className}`}
    >
      <img
        src="/images/logo.png"
        alt="Simit Teknesi Nazilli Logo"
        className={`w-full h-full object-contain ${backgroundClasses}`}
      />
    </div>
  );
};

export default Logo;
