import dynamic from "next/dynamic";

const BlogManagementPage = () => {
  // const RecipeManagement = dynamic(
  //   () =>
  //     import(
  //       "@/app/(dashboardLayout)/dashboard/recipe-management/_components/recipeManagementComponent"
  //     )
  // );
  const RecipeManagement = dynamic(
    () =>
      import(
        "@/app/(dashboardLayout)/dashboard/project-management/_components/ProjectManagementComponent"
      )
  );

  return <RecipeManagement />;
};

export default BlogManagementPage;
