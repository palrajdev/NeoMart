// app/(auth)/login/page.tsx
import AuthSwitcher from "@/components/auth/AuthSwitcher";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage() {
  // optional server-side redirect when already authenticated
  // const token = cookies().get("token")?.value;
  // if (token) redirect("/");

  return <AuthSwitcher initialMode="login" />;
}
