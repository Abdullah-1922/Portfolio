import dynamic from "next/dynamic";

const AddBlogPage = () => {
  const SkillFormComponent = dynamic(
    () =>
      import(
        "@/app/(dashboardLayout)/dashboard/add-skill/_components/SkillFormComponent"
      ),
    { ssr: false }
  );

  return (
    <div className="">
      <SkillFormComponent />{" "}
    </div>
  );
};

export default AddBlogPage;
