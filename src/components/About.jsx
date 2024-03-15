import React from "react";

const About = () => {
  return (
    <>
      <div className="main2  py-8 w-full min-h-fit bg-gray-100">
        <h1 className=" text-center text-3xl font-semibold underline ">
          About Me
        </h1>
       <div className="container2 py-10 flex">
       <div className=" w-1/2 flex justify-center img2 ">
          <img
            className="object-cover h-[22vmax] w-[22vmax] rounded-full"
            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="text2 w-1/2 flex items-center justify-center">
            <div className="textc2 w-[80%]">
                <h1 className="text-3xl font-semibold mb-3">Java Developer & Web  <br /> Developer</h1>
                <p className="text-sm leading-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quas cumque voluptatum a fuga, nisi repudiandae repellendus hic illo. Impedit consequuntur inventore rem ratione explicabo nulla ab quae eum illo.</p>
                <button className="px-3 py-2 bg-orange-600 rounded-lg mt-3">Read More</button>
            </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default About;
