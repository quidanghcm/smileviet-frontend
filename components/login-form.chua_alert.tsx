"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

import "@/styles/login-effects.css"

export function LoginForm2() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      username: formData.username,
      password: formData.password,
    });

    if (res?.ok) {
      toast.success("Đăng nhập thành công");
      router.push("/");
    } else {
      toast.error("Thông tin đăng nhập chưa chính xác");
    }

    setLoading(false);
  };

  return (
    <div className="relative z-10 w-full max-w-sm">

      <Card className="relative overflow-hidden">

        {/* Glow nền card */}
        <div className="sv-card-glow"></div>

        <CardHeader className="text-center relative z-10">

          {/* Logo trong Card */}
          <div className="sv-logo-center-small mb-4">
            <img src="/smileviet.svg" className="sv-logo" />
            <div className="sv-shine"></div>
          </div>

          <CardTitle className="text-xl">
            Phần mềm quản lý tour
          </CardTitle>

          {/* <CardDescription>
            Vui lòng đăng nhập hệ thống
          </CardDescription> */}
        </CardHeader>

        <CardContent className="relative z-10">
          <form onSubmit={handleLogin} className="grid gap-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Tài khoản</FieldLabel>
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Button type="submit" className="w-full text-white" disabled={loading}>
                  {loading ? "Đang xử lý..." : "Đăng nhập"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
