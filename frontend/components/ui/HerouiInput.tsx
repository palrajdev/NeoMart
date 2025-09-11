// components/ui/HerouiInput.tsx
'use client'
import React from 'react'
import { Input as HInput } from '@heroui/input'
import type { ComponentProps } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

type Props = Omit<ComponentProps<typeof HInput>, 'onChange'> & {
  id?: string
  label?: string
  error?: string | null
  register?: UseFormRegisterReturn
  className?: string
}

/**
 * HerouiInput
 * - Works with react-hook-form via `register`.
 * - If you pass `register`, the wrapper spreads it onto the input.
 */
export default function HerouiInput({ id, label, error, register, className = '', ...rest }: Props) {
  // @heroui/input accepts `label` / `labelPlacement` props; adjust if your version differs.
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* HInput usually renders label itself, but we keep this wrapper simple */}
      <HInput
        id={id}
        label={label}
        labelPlacement="outside"
        {...(register ?? {})}
        {...(rest as any)}
      />
      {error ? <p className="text-xs text-red-600 mt-1">{error}</p> : null}
    </div>
  )
}
