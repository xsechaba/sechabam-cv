'use client'

import { useState, useEffect } from 'react'
import { Loader2, Image as ImageIcon } from 'lucide-react'

interface ImageLoaderProps {
  query: string
  className?: string
  alt?: string
  fallbackSrc?: string
}

export default function ImageLoader({ query, className = '', alt = 'Image', fallbackSrc }: ImageLoaderProps) {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoading(true)
        setError(false)
        
        const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
          headers: {
            'Authorization': 'dbhBo4u0vIfODU9Ghz1vEgk2dcpEDrfTqSxS14G4nOrHWmr7YPB9kr0g'
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch image')
        }

        const data = await response.json()
        
        if (data.photos && data.photos.length > 0) {
          setImageSrc(data.photos[0].src.medium)
        } else {
          throw new Error('No images found')
        }
      } catch (err) {
        console.error('Error fetching image:', err)
        setError(true)
        if (fallbackSrc) {
          setImageSrc(fallbackSrc)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchImage()
  }, [query, fallbackSrc])

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl ${className}`}>
        <div className="flex flex-col items-center gap-3 p-8">
          <Loader2 className="w-8 h-8 text-sage-500 animate-spin" />
          <p className="text-sm text-charcoal-600 font-medium">Loading image...</p>
        </div>
      </div>
    )
  }

  if (error && !fallbackSrc) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl ${className}`}>
        <div className="flex flex-col items-center gap-3 p-8">
          <ImageIcon className="w-8 h-8 text-sage-500" />
          <p className="text-sm text-charcoal-600 font-medium">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          if (fallbackSrc) {
            setImageSrc(fallbackSrc)
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
