import BlogDescriptionComponent from "@/app/(without-dashbord)/blog/[id]/_components/BlogDescriptionComponent";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}
export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className=" border-2 rounded-lg shadow-md overflow-hidden">
      <Image
        src={post?.image}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-[210px] object-cover"
      />
      <Link href={`/blog/${post._id}`}>
        {" "}
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
            {post.title}
          </h2>
          <BlogDescriptionComponent content={post?.content} details={false} />
          {/* <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{post.content}</p> */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="w-4 h-4 mr-1" />

            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>{" "}
      </Link>
    </article>
  );
}
