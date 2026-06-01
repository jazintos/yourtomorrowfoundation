'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDevice()

    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  if (!isDesktop) return null

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img
        src="/images/favicon.ico"  
        alt="Cursor"
        className="w-14 h-14 object-contain"
      />
    </div>
  )
}