import { FaCode, FaGlobe } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";

const WhatIDo = () => {
  return (
    <section className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <h2 className="heading text-blue fontRoma">What I Do</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flexCenter flex-col text-center p-3 normalBg normalText rounded-md border-1">
          <div className="my-4">
            <IoLayers className="text-4xl" />
          </div>
          <h3 className="text-xl text-blue font-medium my-2">
            UI/UX Implementation
          </h3>
          <p>
            Implementing designs with pixel-perfect precision and intuitive user
            experiences
          </p>
        </div>
        <div className="flexCenter flex-col text-center p-3 normalBg normalText rounded-md border-1">
          <div className="my-4">
            <FaCode className="text-4xl" />
          </div>
          <h3 className="text-xl text-blue font-medium my-2">
            Frontend Development
          </h3>
          <p>
            Building responsive and interactive user interfaces with modern
            JavaScript frameworks
          </p>
        </div>
        <div className="flexCenter flex-col text-center p-3 normalBg normalText rounded-md border-1">
          <div className="my-4">
            <FaGlobe className="text-4xl" />
          </div>
          <h3 className="text-xl text-blue font-medium my-2">
            Web Performance
          </h3>
          <p>
            Optimizing for speed, accessibility and the best possible user
            experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
