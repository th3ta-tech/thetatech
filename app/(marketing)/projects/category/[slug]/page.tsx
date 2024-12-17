import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";

import { PROJECT_CATEGORIES } from "@/config/project";
import { constructMetadata, getBlurDataURL } from "@/lib/utils";
import { ProjectCard } from "@/components/content/project-card";

export async function generateStaticParams() {
  return PROJECT_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const category = PROJECT_CATEGORIES.find(
    (category) => category.slug === params.slug,
  );
  if (!category) {
    return;
  }

  const { title, description } = category;

  return constructMetadata({
    title: `${title} Project – ThetaTech`,
    description,
  });
}

export default async function ProjectCategory(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const category = PROJECT_CATEGORIES.find((ctg) => ctg.slug === params.slug);

  if (!category) {
    notFound();
  }

  const articles = await Promise.all(
    allProjects
      .filter((post) => post.categories.includes(category.slug))
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  );

  console.log("Articles ==> ", allProjects);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, idx) => (
        <ProjectCard key={article._id} data={article} priority={idx <= 2} />
      ))}
    </div>
  );
}
