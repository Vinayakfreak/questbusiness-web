-- Quest Business coupon + plan schema

-- Coupons: pre-generated codes, assigned to an email on first use.
create table if not exists public.coupons (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  plan text not null check (plan in ('free','basic','grow')),
  duration_days int not null default 30,
  status text not null default 'new' check (status in ('new','active','expired','disabled')),
  assigned_email text,
  activated_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists coupons_code_idx on public.coupons(code);
create index if not exists coupons_expires_idx on public.coupons(expires_at);

-- User profile (optional): tie Supabase auth user to plan state
create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  plan text not null default 'free' check (plan in ('free','basic','grow')),
  coupon_code text,
  plan_expires_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.user_profiles enable row level security;

-- RLS: user can read/update only their own profile
create policy "profile select own" on public.user_profiles
for select using (auth.uid() = id);

create policy "profile upsert own" on public.user_profiles
for insert with check (auth.uid() = id);

create policy "profile update own" on public.user_profiles
for update using (auth.uid() = id);
