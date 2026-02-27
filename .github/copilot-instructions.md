# Workspace Copilot Instructions

This repository is a **Next.js 15** application using the App Router, TypeScript, Tailwind CSS, Supabase, Lucide-React icons, and Shadcn/UI components. The following conventions must be followed by any AI assistant or developer working in this project:

1. **Folder structure**
   - All source code resides in `src/`.
   - Pages live under `src/app` using the App Router.
   - Subfolders inside `src/app` should include:
     - `marketing` (public marketing pages)
     - `auth` (authentication flows)
     - `dashboard` (authenticated user interface)
   - Shared components are organized under `src/components` with subdirectories:
     - `ui` for small reusable UI bits (buttons, inputs, etc.)
     - `layout` for layout-related components (headers, footers, grids)
     - `sections` for page sections (hero, features, testimonials)
   - Library helpers live in `src/lib` (e.g. `supabase.ts`).

2. **Styling & design**
   - Tailwind CSS is used for all styling.
   - Use the defined color palette: primary Deep Emerald Green `#064e3b`, accents Gold/White.
   - Pages must be mobile-responsive and performant (optimized for slow networks).

3. **Third-party tools**
   - Icons are imported from `lucide-react`.
   - UI components should favor Shadcn/UI primitives.
   - Forms use `react-hook-form` and `zod` for validation.

4. **Backend & data**
   - For lead capture, create a `leads` table with appropriate columns.

5. **General rules**
   - Always use semantic HTML5 and accessible ARIA attributes.
   - Keep code modular, with small components and clear props.
   - Avoid capital letters in package names and follow npm conventions.
   - Add comments for non-obvious logic and document public functions.
   - Ensure new pages/components include stories/tests if applicable.

These instructions are intended to guide consistent development; please adhere to them in all future code generation and edits.
