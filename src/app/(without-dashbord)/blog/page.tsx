
import { BlogPostCard } from "@/components/common/BlogCard";

export interface BlogPost {
    _id: string
    title: string
    content: string
    image: string
    createdAt: string
}



export default async function BlogPostsGrid() {
  let datas: BlogPost[] = [];
  try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    method: "GET",
    cache: "no-store",
  });
  const { data } = await res.json();
  datas = data;
  }catch(error){
    console.log(error)
  }


  

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        All Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {datas?.map((post: BlogPost) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
