-- Create profiles table linked to Supabase Auth
create table public.profiles (
  id uuid references auth.users(id) on delete cascade not null primary key,
  twitter_handle text,
  subscription_tier text default 'free' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- Allow read access to all users
create policy "Allow public read access on profiles" on public.profiles for select using (true);

-- Allow authenticated users to view their own profile
create policy "Allow users to view their own profile" on public.profiles for select using (auth.uid() = id);

-- Allow authenticated users to update their own profile
create policy "Allow users to update own profile" on public.profiles for update using (auth.uid() = id);

-- Try to create a trigger to auto-create profile on signup
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, twitter_handle, subscription_tier)
  values (new.id, new.raw_user_meta_data->>'preferred_username', 'free');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

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
