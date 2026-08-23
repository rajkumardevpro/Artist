# Artistry Alchemy: Studio page and secure admin setup

## Upload these files to the GitHub repository root

- studio.html
- admin.html
- admin.js
- supabase-config.js
- supabase-setup.sql
- ADMIN-SOCIAL-SETUP.md
- index.html
- works.html
- artist.html
- commissions.html
- contact.html

## Studio / social page

`studio.html` is ready now. Its Instagram and YouTube buttons link to Nandini's existing accounts. A true embedded Instagram feed requires individual Instagram post URLs or Meta API access, so it is intentionally not used: it is more reliable, faster, and works on mobile.

## Make the admin portal secure and functional

1. Create a free project at https://supabase.com.
2. In Supabase, open **SQL Editor**, create a query, copy all content from `supabase-setup.sql`, then Run.
3. Open **Storage** and create a bucket named `artworks`. Mark it **Public**.
4. Open **Authentication → Users → Add user**. Create the administrator user with the email `ajeet700169@gmail.com` and a strong private password.
5. In **Project Settings → API**, copy the **Project URL** and the **anon public key**.
6. Open `supabase-config.js` in GitHub and replace the two `PASTE...` values. Never use or upload the `service_role` key.
7. Open `https://YOUR-GITHUB-PAGES-URL/admin.html`, sign in with the admin email/password, and upload artwork.

Published artworks appear in the original public gallery after the public project is connected to Supabase.
