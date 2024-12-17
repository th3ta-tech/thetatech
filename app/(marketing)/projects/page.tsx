import { allProjects } from "contentlayer/generated";

import { constructMetadata, getBlurDataURL } from "@/lib/utils";
import { ProjectPosts } from "@/components/content/project-post";

export const metadata = constructMetadata({
  title: "Projects – ThetaTech",
  description: "All of completed and ongoing public of ThetaTech",
});

export default async function BlogPage() {
  const posts = await Promise.all(
    allProjects
      .filter((post) => post.date)
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  );

  return <ProjectPosts posts={posts} />;
}
