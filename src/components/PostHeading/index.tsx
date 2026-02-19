import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: clsx("text-2xl/tight", "sm:text-4xl/tight"),
    h2: clsx("text-2xl/tight", "sm:text-4xl/tight"),
  }

  const commonClasses = "font-extrabold"

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
