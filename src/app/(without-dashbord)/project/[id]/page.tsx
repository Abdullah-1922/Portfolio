import Container from "@/components/common/Container";

import ProjectDetailsComponent from "./projectDetailsComponent";

import { redirect } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProjectDetailsPage = async ({ params }: any) => {
  const { id } = params;
  let project = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
      cache: "no-store",
    });
    const ResProject = await res.json();
    const projectData = ResProject?.data;
    project = projectData;
    if (!project) {
      return redirect("/");
    }
  } catch (error) {
    console.error("Failed to fetch project details:", error);
    return redirect("/");
  }
 
  return (
    <div>
      <Container>
        <div id="project" className="pb-20">
          <div className="space-y-6">
            {/* My Projects */}
            {/* Project 1 */}

            <ProjectDetailsComponent project={project} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
