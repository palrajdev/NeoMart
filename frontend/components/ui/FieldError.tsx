// components/ui/FieldError.tsx
'use client'
import React from 'react'

export default function FieldError({ message }: { message?: string | null }) {
  if (!message) return null
  return <p role="alert" className="text-xs text-red-600 mt-1">{message}</p>
}
