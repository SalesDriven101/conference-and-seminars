# SummitSphere: The Ultimate Event Conference Platform

SummitSphere is a modern, full-stack event management platform built for Conferences and Seminars. It features a high-end React frontend and a robust Node.js backend with full Supabase integration for authentication and realtime data handling.

## 🚀 Key Features
- **Live Event Search & Filter**: Dynamically searchable listings with category-based filtering.
- **Dynamic Speaker Management**: Full showcase of event luminaries with application forms.
- **Secure Authentication**: Power by Supabase Auth (Sign In, Sign Up, and Social Logins).
- **Automated Profile System**: Real-time user profile synchronization with database triggers.
- **Admin Dashboard**: Secure panel for managing events, speakers, and submissions.
- **Responsive Premium UI**: Glassmorphism aesthetic with polished animations and high-performance components.

---

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, TypeScript, Lucide Icons, Vanilla CSS (Modern Grid/Flex).
- **Backend**: Node.js, Express, Prisma ORM, PostgreSQL.
- **Cloud Services**: Supabase (Auth, Database, RLS).
- **Communication**: React Context API, Axios.

---

## 🏗️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SalesDriven101/conference-and-seminars.git
cd conference-and-seminars
```

### 2. Install Dependencies
```bash
npm run install:all
```

### 3. Setup Environment Variables
Create a `.env` file in the `client` directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabase Database Setup
Run the SQL queries found in the `artifacts/supabase_setup.sql` in your Supabase SQL Editor to:
- Create `profiles`, `contact_submissions`, `newsletter_subscribers`, and `speaker_applications` tables.
- Initialize Automated Profile Triggers.
- Configure Security Policies.

### 5. Run the Application
```bash
npm run dev
```

---

## 🎨 Design Theme
The design follows a **Dark Tech Modern** aesthetic:
- **Primary Color**: `#3b82f6` (Vibrant Blue)
- **Background**: Deep Slates and Blurs.
- **Typography**: Inter / Sans Serif.

---

## 📜 License
MIT - Created by Antigravity for SalesDriven101
