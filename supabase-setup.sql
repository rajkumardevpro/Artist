-- Run this once in Supabase: Dashboard → SQL Editor → New query.
-- It creates the artwork collection and safe public viewing rules.
create table if not exists public.artworks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  medium text,
  dimensions text,
  year text,
  status text default 'Available',
  description text,
  image_url text not null,
  featured boolean default false,
  created_at timestamptz default now()
);
alter table public.artworks enable row level security;

-- Anyone can view gallery artworks.
create policy "Public can view artworks" on public.artworks for select using (true);
-- Only the signed-in admin can make changes. Replace with the email used for admin login.
create policy "Admin can manage artworks" on public.artworks for all to authenticated
using (auth.jwt() ->> 'email' = 'ajeet700169@gmail.com')
with check (auth.jwt() ->> 'email' = 'ajeet700169@gmail.com');

-- Create a Storage bucket named artworks in Dashboard → Storage, mark it Public.
-- Then run these policies:
create policy "Public can view artwork files" on storage.objects for select using (bucket_id = 'artworks');
create policy "Admin can upload artwork files" on storage.objects for insert to authenticated
with check (bucket_id = 'artworks' and auth.jwt() ->> 'email' = 'ajeet700169@gmail.com');
create policy "Admin can remove artwork files" on storage.objects for delete to authenticated
using (bucket_id = 'artworks' and auth.jwt() ->> 'email' = 'ajeet700169@gmail.com');
