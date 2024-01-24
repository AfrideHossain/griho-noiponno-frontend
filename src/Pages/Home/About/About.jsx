import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="mx-auto w-full md:w-[1280px] flex md:flex-row flex-col gap-40 items-center mt-40 p-4">
      <div className="w-full rounded-full flex justify-center items-center image-bg-blur">
        <img
          src="https://i.ibb.co/mGFfjY6/1521-removebg-preview-1.png"
          className="w-96 h-96 object-cover"
          alt=""
        />
      </div>
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-white">
          We Are One Of The Biggest Furniture Brand
        </h1>
        <p className="mb-10 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          autem commodi explicabo beatae numquam odio, sint minus quibusdam
          quidem optio debitis et iusto qui esse! Rem at, eum vitae voluptates
          ullam aspernatur quisquam corporis, perspiciatis excepturi recusandae
          beatae, obcaecati architecto?
        </p>
        <Link className="btn btn-primary text-white border px-10 py-4 rounded-full relative transition-all duration-500">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default About;
