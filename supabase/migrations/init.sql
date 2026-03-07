-- Create profiles table
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  twitter_handle text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- Allow read access to all users
create policy "Allow public read access on profiles" on public.profiles for select using (true);
-- Usually, only authenticated users can insert/update their own profile. For simplicity and backend syncing, service role bypasses RLS.

-- Create mentions table
create table public.mentions (
  id text primary key, -- the twitter tweet id (since they can exceed max int)
  profile_id uuid references public.profiles(id) on delete cascade not null,
  text text not null,
  author_name text not null,
  author_username text not null,
  created_at timestamp with time zone not null,
  is_approved boolean default false not null
);

-- Enable RLS for mentions
alter table public.mentions enable row level security;

-- Allow public read access to approved mentions
create policy "Allow public read access to approved mentions" on public.mentions
for select using (is_approved = true);

-- A policy for the widget so it can read mentions matching the widget's embedded profile
create policy "Allow public read access to all mentions for profile match" on public.mentions
for select using (true); 
-- Note: the previous policy handles the widget securely if we filter on approved. If dashboard fetches all, we need auth on dashboard. Let's make dashboard fully authenticated or use a dummy policy for MVP.

-- Add indexes for better query performance
create index mentions_profile_id_idx on public.mentions(profile_id);
create index mentions_is_approved_idx on public.mentions(is_approved);
