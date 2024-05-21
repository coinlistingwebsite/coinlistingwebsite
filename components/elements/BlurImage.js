"use client";
import Image from "next/image";
import { useState } from "react";

const BlurImage = ({ image, width, height, alt, zoomIn }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={image}
      width={width}
      height={height}
      alt={alt}
      className={`w-full h-full object-cover ${
        zoomIn && "hover:scale-110"
      } transition-all duration-300 ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-110 blur-0 grayscale-0"
      } `}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default BlurImage;
