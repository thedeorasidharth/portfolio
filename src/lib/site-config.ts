export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://YOUR-PORTFOLIO-DOMAIN.com");

export const siteConfig = {
  name: "Sidharth Deora",
  title: "Sidharth Deora | Full Stack Engineer & Web Developer",
  description:
    "Sidharth Deora is a Full Stack Engineer and Web Developer specializing in MERN stack, React, Next.js, Node.js, and interactive web experiences.",
  url: SITE_URL,
  keywords: [
    "Sidharth Deora",
    "Sidharth Deora portfolio",
    "Sidharth Deora developer",
    "Sidharth Deora Full Stack Engineer",
    "Sidharth Deora Web Developer",
    "thedeorasidharth",
    "thederoasidharth",
    "Full Stack Engineer",
    "Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
  ],
  socials: {
    github: "https://github.com/thedeorasidharth",
    linkedin: "https://linkedin.com/in/thedeorasidharth",
    instagram: "https://instagram.com/thedeorasidharth",
    email: "deorasidharth1@gmail.com",
  },
};
