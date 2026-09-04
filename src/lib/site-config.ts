export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://YOUR-PORTFOLIO-DOMAIN.com");

export const siteConfig = {
  name: "Sidharth Deora",
  title: "Sidharth Deora | Full Stack Engineer & Freelance Web Developer",
  description:
    "Sidharth Deora is a Full Stack Engineer and Web Developer building production-ready web applications, SaaS tools, examination platforms, and custom web systems for startups and businesses.",
  url: SITE_URL,
  location: "India (IST / UTC+5:30)",
  availability: "Available for Freelance & Contract Deployments",
  keywords: [
    "Sidharth Deora",
    "Sidharth Deora portfolio",
    "Freelance Full Stack Developer",
    "Full Stack Engineer",
    "Web Developer for Hire",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Eduspark Examination Platform",
    "SaaS Application Developer",
    "Custom Web Systems Architect",
    "thedeorasidharth",
  ],
  socials: {
    github: "https://github.com/thedeorasidharth",
    linkedin: "https://linkedin.com/in/thedeorasidharth",
    instagram: "https://instagram.com/thedeorasidharth",
    email: "deorasidharth1@gmail.com",
    whatsapp: "https://wa.me/919001890408?text=Hi%20Sidharth%2C%20I%20want%20to%20connect%20regarding%20a%20project",
    phone: "+91 9001890408",
  },
};
