'use client'

import { useState, useRef, useEffect } from 'react'

interface BookCoverProps {
  src: string | null | undefined
  title: string
  author: string
  className?: string
  imgClassName?: string
}

const FALLBACK = '/cover-classified.png'

export function BookCover({ src, title, author, className, imgClassName }: BookCoverProps) {
  const [failed, setFailed] = useState(!src)
  const imgRef = useRef<HTMLImageElement>(null)

  // Catch images that already errored before React attached onError
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true)
    }
  }, [])

  const imgClass = imgClassName ?? 'h-full w-full object-cover'

  return (
    <div className={className}>
      {!failed ? (
        <img
          ref={imgRef}
          src={src!}
          alt={`Cover of ${title}`}
          className={imgClass}
          onError={() => setFailed(true)}
        />
      ) : (
        <img
          src={FALLBACK}
          alt={`Cover of ${title}`}
          className={imgClass}
        />
      )}
    </div>
  )
}
