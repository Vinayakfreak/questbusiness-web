# Coupon + Email OTP Login (Implementation Notes)

You chose **Option B: full real system**.

## What we need
We will use **Supabase** for:
- Email OTP auth
- Postgres database to store coupons, activations, and expiry

## Setup steps (you do once)
1. Create a Supabase project
2. Get:
   - Project URL
   - Anon key
   - Service role key (server-only)
3. Add to Vercel env vars:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## Database
Run `supabase/schema.sql` in Supabase SQL Editor.

## Import coupons
We’ll import the 100 pre-generated codes into the `coupons` table.

## Flow
- User enters email
- Supabase sends OTP
- User enters OTP
- User enters coupon code
- Server validates coupon + activates it (sets expires_at)
- User profile records plan + expiry
