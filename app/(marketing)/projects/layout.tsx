import { PROJECT_CATEGORIES } from "@/config/project";
import { BlogHeaderLayout } from "@/components/content/blog-header-layout";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogHeaderLayout
        href="projects"
        title="Projects"
        description="Review all of our completed and ongoing work"
        categories={PROJECT_CATEGORIES}
      />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
