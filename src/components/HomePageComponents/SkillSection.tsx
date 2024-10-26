import Image from "next/image";
import Container from "../common/Container";

const SkillSection = () => {
  return (
    <Container>
      <div id="skill" data-scroll-section className="py-10">
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-300">
          MY SKILLS
        </h1>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="500"
        data-aos-
        className="py-20  overflow-hidden lg:py-[160px]"
      >
        <div className="grid grid-cols-3 gap-4 items-center justify-center lg:grid-cols-9">
          <Image
            src="https://w7.pngwing.com/pngs/1008/952/png-transparent-typescript-hd-logo-thumbnail.png"
            width={144}
            height={144}
            alt=""
            className="mx-auto  bg-white w-[120px] rounded-2xl"
          />
          <Image
            src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729555891/nextjs.512x512_bz5wyu.png"
            width={144}
            height={144}
            alt=""
            className="mx-auto bg-white w-[120px]   rounded-2xl"
          />
          <Image
            src="https://i.ibb.co/0h8J8ZB/icons8-javascript-144.png"
            width={144}
            height={144}
            alt=""
            className="mx-auto"
          />
          <Image
            src="https://i.ibb.co/6s46TzN/icons8-tailwind-css-144.png"
            width={144}
            height={144}
            alt=""
            className="mx-auto"
          />

          <Image
            className="animate-spin mx-auto"
            src="https://i.ibb.co/Jq2Ygqn/icons8-react-144.png"
            width={144}
            height={144}
            alt=""
          />

          <Image
            src="https://i.ibb.co/4mzVqrD/icons8-firebase-144.png"
            width={144}
            height={144}
            alt=""
            className="mx-auto"
          />
          <Image
            src="https://i.ibb.co/dLr9RBY/icons8-node-js-144.png"
            width={144}
            height={144}
            alt=""
            className="mx-auto"
          />
          <Image
            className="dark:bg-white w-[120px] rounded-2xl mx-auto"
            src="https://i.ibb.co/r3HLtXr/icons8-express-js-150.png"
            width={144}
            height={144}
            alt=""
          />
          <Image
            className="w-[140px] mx-auto"
            src="https://i.ibb.co/kX7cM1S/icons8-mongo-db-96.png"
            width={144}
            height={144}
            alt=""
          />
        </div>
        <div className="pt-10">
          <p className="text-xl text-center font-medium">
            I can make a website using HTML, CSS, JavaScript,
            React,Nextjs,TypeScript, Tailwind CSS, Firebase, Node.js,
            Express.js, MongoDB.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SkillSection;
