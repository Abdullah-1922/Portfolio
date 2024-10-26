import dynamic from "next/dynamic";

const BlogManagementPage = () => {
  // const RecipeManagement = dynamic(
  //   () =>
  //     import(
  //       "@/app/(dashboardLayout)/dashboard/recipe-management/_components/recipeManagementComponent"
  //     )
  // );
  const BlogManagement = dynamic(
    () =>
      import(
        "@/app/(dashboardLayout)/dashboard/blog-management/_components/BlogManagementComponent"
      )
  );

  return <BlogManagement />;
};

export default BlogManagementPage;
