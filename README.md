 Modi & Company Advocates LLP - Law Firm Website
A modern, responsive website for Modi & Company Advocates LLP, a premier law firm in Kenya with 24 years of experience and a 90% success rate.
🚀 Features
Core Features
•	Practice Area Pages - Detailed service pages for each practice area
•	Team Member Profiles - Professional profiles with expertise and qualifications
•	Contact Forms - Interactive forms with practice area selection
•	Client Testimonials - Showcase of client feedback and success stories
•	Blog/Legal Insights - Legal articles and updates
•	Responsive Design - Mobile-first approach with modern UI/UX
•	Fast Loading - Optimized for performance and SEO
•	Smooth Animations - Framer Motion animations for enhanced user experience
 Practice Areas
1. Conveyancing & Land Law - Property transactions and land matters
2. Commercial Law - Business transactions and corporate matters
3. Insurance Law - Policy interpretation and claims handling
4. Labour Law - Employment and workplace matters
5. Civil Litigation - Dispute resolution and general practice
6. Trust & Estate Law - Estate planning and succession
7. Arbitration & ADR - Alternative dispute resolution
 🛠️ Tech Stack
      Framework: Next.js 14 with App Router
      Language: TypeScript
      Styling: Tailwind CSS
      Animations: Framer Motion
      Forms: React Hook Form with Zod validation
      Icons: Lucide React
Deployment: Vercel (recommended)
 📁 Project Structure

```
modi/
├── app/                     Next.js App Router
│   ├── contact/            Contact page
│   ├── globals.css         Global styles
│   ├── layout.tsx          Root layout
│   └── page.tsx            Homepage
├── components/             Reusable components
│   ├── ContactForm.tsx     Contact form component
│   ├── Footer.tsx          Footer component
│   └── Header.tsx          Header component
├── data/                   Static data
│   ├── blog-posts.ts       Blog articles
│   ├── practice-areas.ts   Practice areas data
│   ├── team.ts            Team members data
│   └── testimonials.ts    Client testimonials
├── types/                  TypeScript definitions
│   └── index.ts           Type definitions
├── public/                Static assets
├── package.json           Dependencies
├── tailwind.config.js     Tailwind configuration
└── README.md             Project documentation

 🚀 Getting Started

 Prerequisites
- Node.js 18+ 
- npm or yarn

 Installation
1. Clone the repository
   git clone <repository-url>
   cd modi
2. Install dependencies
   npm install
3. Run the development server
   npm run dev
4. Open your browser
   Navigate to [http://localhost:3000](http://localhost:3000)

Build for Production
npm run build
npm start

 📝 Customization

Updating Content
1. Practice Areas: Edit `data/practice-areas.ts`
2. Team Members: Edit `data/team.ts`
3. Testimonials: Edit `data/testimonials.ts`
4. Blog Posts: Edit `data/blog-posts.ts`
Styling
Colors: Modify `tailwind.config.js` for brand colors
Typography: Update font families in `tailwind.config.js`
Components: Edit individual component files in `components/`
SEO
Update metadata in `app/layout.tsx`
Add Open Graph images to `public/`
Configure Google Analytics
Add sitemap and robots.txt

 🎨 Design Features

 Modern UI/UX
Clean, professional design
Smooth scroll animations
Interactive hover effects
Mobile-responsive layout
Accessible design patterns

Performance Optimizations

Server-side rendering (SSR)
Image optimization
Code splitting
Lazy loading
CDN-ready
SEO Optimizations
Semantic HTML structure
Meta tags and Open Graph
Structured data
Fast loading times
Mobile-friendly

 📱 Responsive Design
 s
The website is fully responsive across all devices:
Desktop: Full-featured experience
Tablet: Optimized layout
Mobile: Touch-friendly interface
🔧 Configuration
 Environment Variables
Create a `.env.local` file for environment-specific settings:
NEXT_PUBLIC_SITE_URL=https://modiadvocates.co.ke
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
 Deployment
1. Vercel (Recommended)
   npm install -g vercel
   vercel
2. Other Platforms
   - Build the project: `npm run build`
   - Deploy the `out` directory
 📞 Contact Information
developer contact 254799476032
Modi & Company Advocates LLP
- Phone: 020-2247029 / 0722-857059
- Email: info@modiadvocates.co.ke
- Website: www.modiadvocates.co.ke
 Office Locations
- Nairobi: NHC House, 1st Floor, Opp. Co-operative Bank House
- Narok: Nenkai Plaza, 2nd Floor, Suite 316

 📄 License
This project is proprietary to Modi & Company Advocates LLP.
🤝 Contributing
For internal development and updates, please follow the established coding standards and component patterns.
Built with @GIPHY2 github for Modi & Company Advocates LLP 

