// components/ui/HerouiSelect.tsx
'use client'
import React from 'react'
import type { ComponentProps } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

type Option = { value: string; label: React.ReactNode }
type Props = {
  id?: string
  label?: string
  options: Option[]
  register?: UseFormRegisterReturn
  value?: string
  onChange?: (v: string) => void
  error?: string | null
  className?: string
} & Omit<ComponentProps<'select'>, 'onChange'>

export default function HerouiSelect({
  id,
  label,
  options,
  register,
  error,
  className = '',
  value,
  onChange,
  ...rest
}: Props) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label htmlFor={id} className="text-sm font-medium">{label}</label>}

      <select
        id={id}
        {...(register ?? {})}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
        {...rest}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      {error ? <p className="text-xs text-red-600 mt-1">{error}</p> : null}
    </div>
  )
}
