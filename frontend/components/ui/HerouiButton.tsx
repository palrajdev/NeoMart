// components/ui/HerouiButton.tsx
'use client'
import React from 'react'
import { Button as HButton } from '@heroui/button'
import type { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof HButton>, 'children'> & {
  children?: React.ReactNode
  loading?: boolean
  className?: string
}

/**
 * HerouiButton
 * - thin wrapper that adds `loading` prop and consistent className support.
 * - Use exactly like a normal <button> but styled by HeroUI.
 */
export default function HerouiButton({ children, loading, className, ...rest }: Props) {
  return (
    <HButton
      {...rest}
      className={className}
      disabled={loading || (rest as any).disabled}
    >
      {loading ? (children ? <span aria-hidden>{children}</span> : 'Loading...') : children}
    </HButton>
  )
}
