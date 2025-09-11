// app/(auth)/register/page.tsx
import AuthSwitcher from '@/components/auth/AuthSwitcher'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function RegisterPage() {
  // const token = cookies().get('token')?.value
  // if (token) redirect('/')
  // return <AuthSwitcher initialMode="register" />
}
