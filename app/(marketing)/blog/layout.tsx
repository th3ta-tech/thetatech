import { BLOG_CATEGORIES } from "@/config/blog";
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
        categories={BLOG_CATEGORIES}
        href="blog"
        title="Blog"
        description="Get upadated with lots of thing related to technologies with Theta Tech"
      />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
