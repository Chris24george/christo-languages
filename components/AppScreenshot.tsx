"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"

interface AppScreenshotProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc: string
}

export default function AppScreenshot({ 
  src, 
  alt, 
  fallbackSrc, 
  ...props 
}: AppScreenshotProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
} 