import dynamic from "next/dynamic";

const UpdateBlogPage = async({params}:{params:Record<string,unknown>}) => {

const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill/${params.skillId}`,{
    cache: "no-cache",
    
})
const {data}=await res.json()

    const BlogFormComponent = dynamic(
        () =>
          import(
            "@/app/(dashboardLayout)/dashboard/add-skill/_components/SkillFormComponent"
          ),
        { ssr: false }
      );
    


  return (
    <div>
    <BlogFormComponent skill={data} />
    </div>
  );
};

export default UpdateBlogPage;