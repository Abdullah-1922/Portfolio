import dynamic from "next/dynamic";

const AddProjectPage = () => {
  const ProjectFormComponent = dynamic(
    () =>
      import(
        "@/app/(dashboardLayout)/dashboard/add-project/_components/ProjectFormComponent"
      ),
    { ssr: false }
  );

  return (
    <div className="">
      <ProjectFormComponent />{" "}
    </div>
  );
};

export default AddProjectPage;
