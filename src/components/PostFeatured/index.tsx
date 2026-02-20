import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "aaa"
  const postLink = `/post/${slug}`
  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-16 group", "sm:grid-cols-2")}
    >
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "image alt",
          priority: true,
        }}
      />
      <div className={clsx("flex flex-col gap-4", "sm:justify-center")}>
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2026-02-18"
        >
          18/02/2026 09:30
        </time>
        <PostHeading as="h1" url={postLink}>
          Lorem ipsum dolor sit amet.
        </PostHeading>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero at quidem
        hic aut dolorem, tempore autem libero recusandae est minima
        necessitatibus vitae tempora vel cupiditate mollitia aliquam labore.
        Veritatis rerum in ea ducimus veniam. Ad ducimus perspiciatis commodi
        enim architecto. Accusamus eaque ipsa beatae odio reprehenderit ipsam
        rerum cum aperiam?
      </div>
    </section>
  );
}
