import { Project } from "@/.contentlayer/generated";

import { ProjectCard } from "./project-card";

export function ProjectPosts({
  posts,
}: {
  posts: (Project & {
    blurDataURL: string;
  })[];
}) {
  return (
    <main className="space-y-8">
      <ProjectCard data={posts[0]} horizontale priority />

      <div className="grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10 xl:grid-cols-3">
        {posts.slice(1).map((post, idx) => (
          <ProjectCard data={post} key={post._id} priority={idx <= 2} />
        ))}
      </div>
    </main>
  );
}
