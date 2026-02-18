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
          className="group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Post title"
          />
        </Link>
        <div>
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
