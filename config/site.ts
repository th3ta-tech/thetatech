import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Theta Tech",
  description:
    "Innovating the Future 🌟 Websites | Digital Marketing | SEO | Social Media | Photography & Videography 📈📸 Your Growth, Our Mission 🚀",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    instagram: "https://www.instagram.com/th3ta_tech/",
    github: "https://github.com/th3ta-tech",
    facebook: "https://www.facebook.com/people/Th3ta-Tech/61570525732561",
  },
  mailSupport: "tech.theta@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
