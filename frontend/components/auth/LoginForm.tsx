'use client'
import React, { useState } from 'react'
import { Form } from '@heroui/form'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const [errors, setErrors] = useState<Record<string,string>>({})
  const [serverError, setServerError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setServerError(null)
    setErrors({})

    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string,string>
    const email = (data.email ?? '').trim()
    const password = (data.password ?? '').trim()

    const localErrors: Record<string,string> = {}
    if (!email) localErrors.email = 'Email is required'
    if (!password) localErrors.password = 'Password is required'
    if (Object.keys(localErrors).length) { setErrors(localErrors); return }

    setLoading(true)
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      })

      if (!res.ok) {
        const json = await res.json().catch(() => null)
        throw new Error(json?.message ?? `Login failed (${res.status})`)
      }

      onSuccess?.()
      router.replace('/') // or router.refresh() if you prefer
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setServerError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form className="w-full" onSubmit={handleSubmit} validationErrors={errors}>
      {serverError && <div className="text-sm text-red-600 mb-2">{serverError}</div>}

      <Input
        label="Email"
        labelPlacement="outside"
        name="email"
        type="email"
        placeholder="you@example.com"
        // error={errors.email}
        required
      />

      <Input
        label="Password"
        labelPlacement="outside"
        name="password"
        type="password"
        placeholder="Your password"
        // error={errors.password}
        required
      />

      <Button type="submit" variant="flat" className="w-full mt-3" disabled={loading}>
        {loading ? 'Signing in…' : 'Sign in'}
      </Button>
    </Form>
  )
}
