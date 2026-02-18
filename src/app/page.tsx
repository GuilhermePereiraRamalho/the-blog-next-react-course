import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx("grid grid-cols-1 gap-8 mb-16 group", "sm:grid-cols-2")}
      >
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Post title"
            priority
          />
        </Link>
        <div className={clsx("flex flex-col gap-4", "sm:justify-center")}>
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2026-02-18"
          >
            18/02/2026 09:30
          </time>
          <h1
            className={clsx(
              "text-2xl/tight font-extrabold",
              "sm:text-4xl/tight",
            )}
          >
            <Link href="#">Lorem ipsum dolor sit amet</Link>
          </h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero at
          quidem hic aut dolorem, tempore autem libero recusandae est minima
          necessitatibus vitae tempora vel cupiditate mollitia aliquam labore.
          Veritatis rerum in ea ducimus veniam. Ad ducimus perspiciatis commodi
          enim architecto. Accusamus eaque ipsa beatae odio reprehenderit ipsam
          rerum cum aperiam?
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold text-center py-8">Footer</footer>
    </Container>
  );
}
