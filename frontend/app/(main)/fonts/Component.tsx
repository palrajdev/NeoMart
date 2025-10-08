// app/(main)/page.tsx
"use client";
import React from 'react'
import { useForm } from 'react-hook-form'
import HerouiInput from '@/components/ui/HerouiInput'
import HerouiSelect from '@/components/ui/HerouiSelect'
import HerouiButton from '@/components/ui/HerouiButton'
import FontShowcase from '@/components/FontShowcase';

type FormData = {
  name: string
  email: string
  role: string
}

export default function MainPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: { role: 'customer' }
  })

  function onSubmit(data: FormData) {
    console.log('form submit', data)
    // do API call / react query mutation
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <FontShowcase />
      <h1 className="text-2xl font-semibold mb-4">Main content — example form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <HerouiInput
          id="name"
          label="Full name"
          register={register('name', { required: 'Name required' })}
          error={errors.name?.message?.toString()}
        />

        <HerouiInput
          id="email"
          label="Email"
          register={register('email', { required: 'Email required' })}
          error={errors.email?.message?.toString()}
          type="email"
        />

        <HerouiSelect
          id="role"
          label="Role"
          options={[
            { value: 'customer', label: 'Customer' },
            { value: 'merchant', label: 'Merchant' },
            { value: 'admin', label: 'Admin' },
          ]}
          register={register('role')}
        />

        <div className="flex gap-3">
          <HerouiButton type="submit">Save</HerouiButton>
          <HerouiButton variant="ghost" onClick={() => {}}>Cancel</HerouiButton>
        </div>
      </form>
    </div>
  )
}
