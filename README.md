# Artistry Alchemy — ready-to-upload website

Static website for Nandini Patel / Artistry Alchemy. No npm install or build command is required.

## Main files

- `index.html` — public landing page
- `immersive-gallery.html` — exhibition/gallery experience
- `works.html`, `artist.html`, `commissions.html`, `contact.html` — supporting pages
- `admin.html` — Supabase-powered artwork manager (optional setup)
- `assets/` — artwork images
- `vendor/three.module.js` — local Three.js library used by the immersive experience

## Upload to GitHub

1. Extract this ZIP on your computer.
2. Create a new GitHub repository, for example `artistry-alchemy`.
3. Upload all extracted files and folders. Do **not** upload the ZIP itself into the repository.
4. Commit the files.

## Deploy with Render

1. Sign in to Render and choose **New → Static Site**.
2. Connect the GitHub repository.
3. Render will detect `render.yaml`. If it asks for settings:
   - Build command: leave empty
   - Publish directory: `.`
4. Click Deploy.

## Deploy with Cloudflare Pages

- Framework preset: None
- Build command: leave empty
- Build output directory: `/`

## WhatsApp

The WhatsApp contact number is already set to `+91 91344 99623`.

## Optional: secure admin portal

The visual admin page is `admin.html`. To turn it into a secure online upload system, follow these steps:

1. Create a free Supabase project.
2. Run `supabase-setup.sql` inside Supabase SQL Editor.
3. Create a public Storage bucket named `artworks`.
4. Create the admin user with `ajeet700169@gmail.com` and a strong password.
5. Paste the Supabase Project URL and anon key into `supabase-config.js`.

Never add a Supabase `service_role` secret key to this project.
