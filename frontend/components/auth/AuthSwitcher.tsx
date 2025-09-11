// components/auth/AuthSwitcher.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Card, CardHeader, CardBody } from '@heroui/card'
import { Button } from '@heroui/button'
import clsx from 'clsx'

type Mode = 'login' | 'register'

export default function AuthSwitcher({
  initialMode = 'login',
  className = '',
  onAuthSuccess,
}: {
  initialMode?: Mode
  className?: string
  /** called after successful login/register (forms can call this via prop) */
  onAuthSuccess?: () => void
}) {
  const [mode, setMode] = useState<Mode>(initialMode)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // sync if parent passes a different initialMode
  useEffect(() => {
    setMode(initialMode)
  }, [initialMode])

  // when switching, focus first input inside the active form
  useEffect(() => {
    const t = setTimeout(() => {
      const container = containerRef.current
      if (!container) return
      const el = container.querySelector<HTMLInputElement>('input, [tabindex]:not([tabindex="-1"])')
      el?.focus()
    }, 120) // wait for transition
    return () => clearTimeout(t)
  }, [mode])

  const title = mode === 'login' ? 'Welcome back' : 'Create your account'
  const subtitle =
    mode === 'login'
      ? 'Sign in to your NeoMart account to view orders, checkout faster and manage your addresses.'
      : 'Create your NeoMart account to start shopping — it only takes a minute.'

  return (
    <div className={clsx('min-h-[64vh] flex items-center justify-center px-4', className)}>
      <Card className="w-full max-w-md">
        <CardHeader className="flex items-start justify-between gap-3 md:gap-6 p-6">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          </div>

          <div role="tablist" aria-label="Authentication tabs" className="inline-flex rounded-md bg-muted p-1">
            <Button
              variant={mode === 'login' ? 'flat' : 'ghost'}
              className={clsx('rounded-md px-3 py-1 text-sm', mode === 'login' ? 'font-semibold' : '')}
              onClick={() => setMode('login')}
              aria-pressed={mode === 'login'}
              role="tab"
              aria-selected={mode === 'login'}
            >
              Login
            </Button>

            <Button
              variant={mode === 'register' ? 'flat' : 'ghost'}
              className={clsx('rounded-md px-3 py-1 text-sm', mode === 'register' ? 'font-semibold' : '')}
              onClick={() => setMode('register')}
              aria-pressed={mode === 'register'}
              role="tab"
              aria-selected={mode === 'register'}
            >
              Register
            </Button>
          </div>
        </CardHeader>

        <CardBody className="p-6">
          {/* Animated switcher: both panels exist but only active one is visible.
              This avoids unmount/mount flicker for screen readers and keeps focus consistent. */}
          <div ref={containerRef} className="relative h-auto">
            <div
              aria-hidden={mode !== 'login'}
              className={clsx(
                'transition-all duration-200 ease-in-out',
                mode === 'login'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none absolute inset-0'
              )}
            >
              {/* Provide onSuccess callback so child can notify parent */}
              <LoginForm onSuccess={onAuthSuccess} />
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <span>Don't have an account? </span>
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className="text-primary underline-offset-2 hover:underline ml-1"
                >
                  Create one
                </button>
              </div>
            </div>

            <div
              aria-hidden={mode !== 'register'}
              className={clsx(
                'transition-all duration-200 ease-in-out',
                mode === 'register'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none absolute inset-0'
              )}
            >
              <RegisterForm onSuccess={onAuthSuccess} />
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <span>Already have an account? </span>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-primary underline-offset-2 hover:underline ml-1"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
