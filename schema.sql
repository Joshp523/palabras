-- Verbos: optional cloud sync. Run once in Supabase > SQL editor. Safe to re-run.
-- Touches only public.esp_snapshots; no other app's tables are affected.
create table if not exists public.esp_snapshots(user_id uuid primary key references auth.users on delete cascade, data jsonb not null, updated_at timestamptz not null default now());
alter table public.esp_snapshots enable row level security;
drop policy if exists "own rows" on public.esp_snapshots;
create policy "own rows" on public.esp_snapshots for all to authenticated using (auth.uid()=user_id) with check (auth.uid()=user_id);
grant select, insert, update, delete on public.esp_snapshots to authenticated;
