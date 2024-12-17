import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

import { BackgroundLines } from "../ui/background-lines";

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <BackgroundLines>
        <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
          <Link
            href="https://instagram.com/th3ta_tech"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
                rounded: "full",
              }),
              "z-10 px-4",
            )}
            target="_blank"
          >
            <span className="mr-3">🎉</span>
            <span className="hidden items-center md:flex">
              Launching on January 1, 2025
              <Icons.instagram className="ml-2 size-3.5" />
            </span>
          </Link>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
            Inovating The Future
            {/*<span className="text-gradient_indigo-purple font-extrabold">
            SaaS Starter
          </span>*/}
          </h1>

          <p
            className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Websites | Digital Marketing | SEO | Social Media | Photography &
            Videography 📈📸 Your Growth, Our Mission 🚀{" "}
          </p>

          <div
            className="flex justify-center space-x-2 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link
              href="/pricing"
              prefetch={true}
              className={cn(
                buttonVariants({ size: "lg", rounded: "full" }),
                "z-10 gap-2",
              )}
            >
              <span>Our Services</span>
              <Icons.arrowRight className="size-4" />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  rounded: "full",
                }),
                "z-10 px-5",
              )}
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
}
