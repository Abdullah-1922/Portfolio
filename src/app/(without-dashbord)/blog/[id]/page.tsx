/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlogDescriptionComponent from "./_components/BlogDescriptionComponent";
import ScrollToTop from "@/components/common/AutoScrollToTop";

export default async function BlogDetailsPage({ params }: any) {
  const { id } = params;

  const res = await fetch(`https://abdullah-al-kafi-dev.vercel.app/api/blog/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const { data } = await res.json();

  return (
    <Container>
      <ScrollToTop />
      {data ? (
        <article className="max-w-[1000px] border p-5 my-20  mx-auto px-4 py-8 ">
          <div className="space-y-4">
            <Image
              src={data.image}
              alt={data.title}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg shadow-md dark:shadow-gray-700"
            />
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-4xl">
              {data.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <time dateTime={data.createdAt}>
                  {new Date(data.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
            <BlogDescriptionComponent content={data?.content} />
          </div>
        </article>
      ) : (
        <div className="text-4xl font-bold uppercase flex-col flex justify-center items-center min-h-[700px]">
          <p>No blog found.</p>
          <Link href={"/"}>
            <Button
              variant={"ghost"}
              className="text-2xl border mt-3 font-bold"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
}
