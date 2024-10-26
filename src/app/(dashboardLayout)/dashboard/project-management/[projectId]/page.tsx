import dynamic from "next/dynamic";

const UpdateBlogPage = async ({
  params,
}: {
  params: Record<string, unknown>;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/${params.projectId}`,
    {
      cache: "no-cache",
    }
  );
  const { data } = await res.json();
  console.log(data);
  const ProjectFormComponent = dynamic(
    () =>
      import(
        "@/app/(dashboardLayout)/dashboard/add-project/_components/ProjectFormComponent"
      ),
    { ssr: false }
  );

  return (
    <div>
      <ProjectFormComponent project={data} />
    </div>
  );
};

export default UpdateBlogPage;
