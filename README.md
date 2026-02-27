# Expertise Hub Empowerment Foundation Website

This project is a Next.js 15 application built with TypeScript, Tailwind CSS, Lucide-React, and Shadcn/UI. It follows a strict folder structure and coding conventions defined in `.github/copilot-instructions.md`.

## Getting Started

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

## Database Schema

A basic `leads` table is used to capture contact submissions. Create it with the SQL in `db/schema.sql`:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  type text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);
```
