import Container from "../common/Container";
import ProjectCard from "../common/ProjectCard";

const HomeProjectShow = async () => {
  let datas = [];
try{
  const projects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
    cache: "no-cache",
  });
  const data = await projects.json();
  datas = data.data;
}

catch(error){
  console.log(error)
}

  return (
    <Container>
      <div id="projects" data-scroll-section className="py-10">
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-300">
          Featured Project
        </h1>
      </div>

      <div className="grid   grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {datas?.map((item: any) => {
          return <ProjectCard project={item} key={item?._id} />;
        })}
      </div>
    </Container>
  );
};

export default HomeProjectShow;
