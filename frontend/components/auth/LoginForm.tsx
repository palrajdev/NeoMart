// components/auth/LoginForm.tsx
'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import HerouiInput from '@/components/ui/HerouiInput'
import HerouiButton from '@/components/ui/HerouiButton'
import AuthCard from '@/components/ui/AuthCard'
import type { SubmitHandler } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
    mode: 'onTouched',
  })
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setServerError(null)
    // Basic client-side guard (react-hook-form also provides)
    if (!values.email) {
      setError('email', { type: 'required', message: 'Email is required' })
      return
    }
    if (!values.password) {
      setError('password', { type: 'required', message: 'Password is required' })
      return
    }

    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
        credentials: 'include',
      })

      if (!res.ok) {
        const json = await res.json().catch(() => null)
        // map common validation errors to fields if backend returns { errors: { email: "..." } }
        if (json?.errors && typeof json.errors === 'object') {
          for (const key of Object.keys(json.errors)) {
            setError(key as any, { type: 'server', message: json.errors[key] as string })
          }
          return
        }
        throw new Error(json?.message ?? `Login failed (${res.status})`)
      }

      onSuccess?.()
      // successful login — redirect to home (or next param)
      router.replace('/')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setServerError(msg)
    }
  }

  return (
    <AuthCard title="Welcome back" subtitle="Sign in to your NeoMart account">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {serverError && <div className="text-sm text-red-600 mb-3">{serverError}</div>}

        <div className="grid gap-4">
          <HerouiInput
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            register={register('email', { required: 'Email is required' })}
            error={errors.email?.message?.toString() ?? null}
          />

          <HerouiInput
            id="password"
            label="Password"
            type="password"
            placeholder="Your password"
            register={register('password', { required: 'Password is required' })}
            error={errors.password?.message?.toString() ?? null}
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="text-sm">
            <a href="/forgot" className="text-primary hover:underline">Forgot password?</a>
          </div>
        </div>

        <div className="mt-6">
          <HerouiButton type="submit" variant="flat" className="w-full" loading={isSubmitting}>
            Sign in
          </HerouiButton>
        </div>
      </form>
    </AuthCard>
  )
}
