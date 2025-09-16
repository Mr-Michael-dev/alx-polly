# ALX Polly: A Polling Application

Welcome to ALX Polly, a full-stack polling application built with Next.js, TypeScript, and Supabase. This project serves as a practical learning ground for modern web development concepts, with a special focus on identifying and fixing common security vulnerabilities.

## About the Application

ALX Polly allows authenticated users to create, share, and vote on polls. It's a simple yet powerful application that demonstrates key features of modern web development:

- **Authentication**: Secure user sign-up and login.
- **Poll Management**: Users can create, view, and delete their own polls.
- **Voting System**: A straightforward system for casting and viewing votes.
- **User Dashboard**: A personalized space for users to manage their polls.

The application is built with a modern tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Backend & Database**: [Supabase](https://supabase.io/)
- **UI**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: React Server Components and Client Components

---

## Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/alx-polly.git
   cd alx-polly
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Supabase:**
   - Create a project at [Supabase](https://supabase.com/).
   - Copy your Supabase URL and service role key.
   - Create a `.env.local` file in the root directory:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     SUPABASE_SECRET_KEY=your-supabase-service-role-key
     ```
4. **Run database migrations (if any):**
   - Follow instructions in `/lib/supabase/` or project documentation.

## Usage Examples

- **Creating a Poll:**
  1. Register or log in.
  2. Navigate to the dashboard and click "Create Poll".
  3. Enter your question and options, then submit.
- **Voting on a Poll:**
  1. Access a poll via its unique link or QR code.
  2. Select your choice and submit your vote.
- **Sharing Polls:**
  - Use the QR code or shareable link provided on the poll page.

## Running & Testing Locally

1. **Start the development server:**
   ```bash
   npm run dev
   ```
2. **Open [http://localhost:3000](http://localhost:3000) in your browser.**
3. **Run tests (if available):**
   ```bash
   npm test
   ```

## Additional Notes

- Ensure your Supabase project has the correct authentication and table setup.
- Pay close attention to user authentication, data access, and business logic.
- For UI consistency, use shadcn/ui components and Tailwind CSS.
- All secrets and keys must be stored in environment variables, never hardcoded.
