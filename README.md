# Portfolio Website

A modern, professional portfolio website built with Next.js, designed to showcase multiple professional personas - home, developer profile, and speaker portfolio. This project features dynamic content pages, contact forms with email integration, and a fully responsive design.

## Features

- **Multi-Purpose Portfolio**: Home page, Developer portfolio, and Speaker portfolio sections
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Forms**: Integrated email functionality using Resend and Nodemailer
- **Form Validation**: Type-safe form handling with React Hook Form and Zod
- **Server Actions**: Next.js server actions for backend operations
- **Modern Tech Stack**: Built with Latest Next.js 16, React 19, and TypeScript
- **SEO Ready**: Optimized for search engines with proper metadata
- **Fast Performance**: Optimized images and lazy loading

## Project Structure

```
app/
├── page.tsx                    # Home page
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
├── actions/                    # Server actions
│   ├── book.ts                # Booking form action
│   └── contact.ts             # Contact form action
├── contact/                    # Contact page
├── developer/                  # Developer portfolio section
│   ├── page.tsx
│   └── contact/
└── speaker/                    # Speaker portfolio section
    ├── page.tsx
    ├── about/
    ├── book/
    ├── contact/
    └── videos/

components/
├── Navbar.tsx                  # Navigation component
├── Footer.tsx                  # Footer component
├── home/                       # Home page components
├── developer/                  # Developer section components
└── speaker/                    # Speaker section components
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with API routes
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **Forms**: [React Hook Form](https://react-hook-form.com/) - Performant form handling
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Email**: [Resend](https://resend.com/) + [Nodemailer](https://nodemailer.com/) - Email delivery
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful SVG icons
- **Linting**: [ESLint](https://eslint.org/) - Code quality

## Usage

### Adding New Sections

1. Create a new folder in `app/` directory
2. Add your page layout in `page.tsx`
3. Create corresponding components in the `components/` folder
4. Update navigation links in `components/Navbar.tsx`

### Contact Form Integration

Forms use Resend for email delivery with fallback to Nodemailer. Update email addresses in:
- `app/actions/contact.ts`
- `app/actions/book.ts`

## Environment Variables

Required environment variables for production:

| Variable |
|---------- |
| `RESEND_API_KEY` |
| `EMAIL_USER` |
| `EMAIL_PASS` |

## Dependencies

### Production
- `next` - React framework
- `react` - UI library
- `react-hook-form` - Form state management
- `zod` - Schema validation
- `resend` - Email service
- `nodemailer` - Alternative email delivery
- `lucide-react` - Icon library
- `@hookform/resolvers` - Form validation resolvers

### Development
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `eslint` - Code linting

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy:

```bash
npm i -g vercel
vercel
```

### Other Deployment Options

- **Netlify**: Connect GitHub repo and configure build settings
- **Docker**: Create a Dockerfile and deploy to any container platform
- **Traditional Hosting**: Build and deploy to Apache, Nginx, etc.

**Note**: Ensure all environment variables are configured in your hosting platform.