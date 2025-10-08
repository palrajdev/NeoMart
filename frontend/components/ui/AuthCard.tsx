// components/heroui/AuthCard.tsx
'use client'
import React from 'react'
import { Card, CardHeader, CardBody } from '@heroui/card'

export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title?: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md sm:max-w-lg">
        <CardHeader className="px-6 py-5">
          {title && <h1 className="text-2xl font-semibold leading-tight">{title}</h1>}
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </CardHeader>

        <CardBody className="p-6">
          {children}
        </CardBody>
      </Card>
    </div>
  )
}
