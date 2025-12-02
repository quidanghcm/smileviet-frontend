import "@/styles/login-effects.css"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="sv-wrapper bg-muted/30">

      {/* Hiệu ứng nền vòng tròn */}
      <div className="sv-flow-lines">
        <div></div><div></div><div></div>
      </div>

      {/* Form đăng nhập + glow + logo */}
      <LoginForm />
    </div>
  )
}
