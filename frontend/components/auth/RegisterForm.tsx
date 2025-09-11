'use client'
import React, { useState } from 'react'
import { Form } from '@heroui/form'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterForm({ onSuccess }: { onSuccess?: () => void }) {
  const [errors, setErrors] = useState<Record<string,string>>({})
  const [serverError, setServerError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setServerError(null)
    setErrors({})

    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string,string>
    const name = (data.name ?? '').trim()
    const email = (data.email ?? '').trim()
    const password = (data.password ?? '').trim()
    const role = (data.role ?? 'customer').trim()

    const localErrors: Record<string,string> = {}
    if (!name) localErrors.name = 'Name is required'
    if (!email) localErrors.email = 'Email is required'
    if (!password || password.length < 6) localErrors.password = 'Password must be 6+ chars'
    if (Object.keys(localErrors).length) { setErrors(localErrors); return }

    setLoading(true)
    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
        credentials: 'include',
      })

      if (!res.ok) {
        const json = await res.json().catch(() => null)
        throw new Error(json?.message ?? `Registration failed (${res.status})`)
      }

      onSuccess?.()
      router.replace('/')
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

      <Input label="Full name" labelPlacement="outside" name="name" placeholder="Your full name"
    //    error={errors.name}
       required />

      <Input label="Email" labelPlacement="outside" name="email" type="email" placeholder="you@example.com"
    //    error={errors.email}
        required />

      <Input label="Password" labelPlacement="outside" name="password" type="password" placeholder="Choose a password"
    //    error={errors.password} 
       required />

      {/* Role: remove or hide 'admin' option in production */}
      <div className="mt-2 flex items-center gap-3">
        <label className="text-sm">Role</label>
        <select name="role" className="px-2 py-1 border rounded ml-auto">
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <Button type="submit" variant="flat" className="w-full mt-4" disabled={loading}>
        {loading ? 'Creating account…' : 'Create account'}
      </Button>
    </Form>
  )
}
