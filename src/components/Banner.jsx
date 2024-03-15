import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software developer", "web developer", "Android developer", "Mern stack developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: ""
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="main-container flex ">
        <div className="text mt-4 bg-no-repeat  bg-[length:28vmax_28vmax] bg-center w-full flex justify-center items-center bg-[url('https://img.freepik.com/premium-vector/design-elements-wave-many-purple-lines-circle-ring-abstract-vertical-wavy-stripes-white-background-isolated-vector-illustration-eps-10-colourful-waves-with-lines-created-using-blend-tool_299644-12402.jpg?w=740')]">
          <div className="text-con w-2/3">
            <h3 className="mt-6 text-2xl ">Hi, I am</h3>
            <h1 className=" text-4xl font-bold">Priyanshu Raj</h1>
            <h2 className="animation-main mt-1 text-2xl font-bold">And I am <span className="animation underline text-green-900 font-bold" ref={el}></span></h2>
            <p className="mt-1 text-sm leading-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              provident omnis ea incidunt, at officia error voluptates et!
              Incidunt doloremque dignissimos ullam eos quo quos provident totam
              nisi harum doloribus, enim molestias fugit culpa vel obcaecati
              laudantium. Perspiciatis quidem porro reprehenderit quo neque
              quaerat mollitia iusto! Minima deserunt blanditiis molestiae?
            </p>
            <div className="icons space-x-7 text-[6vmin] text-gray-900 ">
              <i class="ri-linkedin-box-fill"></i>
              <i class="ri-instagram-line"></i>
              <i class="ri-facebook-box-fill"></i>
              <i class="ri-twitter-x-line"></i>
            </div>
            <a
              className="transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 font-bold mt-2 mb-2 px-3 py-2 bg-orange-500 rounded-lg inline-block"
              href="/contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="img w-full pt-4 flex justify-center items-center ">
          <img
            className="aspect-auto h-[18vw] rounded-3xl border-2 border-zinc-400"
            src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
