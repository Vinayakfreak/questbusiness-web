import Link from "next/link";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.85 }}>
        ← Home
      </Link>
      <h1 style={{ marginTop: 12 }}>Login (Email OTP + Coupon)</h1>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>
        Enter your email, verify OTP, then activate your coupon to unlock your plan.
      </p>
      <LoginClient />
    </div>
  );
}
