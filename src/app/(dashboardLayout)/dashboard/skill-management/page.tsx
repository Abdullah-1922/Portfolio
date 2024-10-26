import dynamic from "next/dynamic";

const SkillManagementPage = () => {

  const SkillManagement = dynamic(
    () =>
      import(
        "@/app/(dashboardLayout)/dashboard/skill-management/_components/skillManagementComponent"
      )
  );

  return <SkillManagement />;
};

export default SkillManagementPage;
