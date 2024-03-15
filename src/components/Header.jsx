import React, { useState } from "react";

const Header = () => {
    const [barndName, setbarndName] = useState("Priyanshu Raj");
    const [menuLinks, setmenuLinks] = useState([
        {
            tittle:"Home",
            link:"/home",
            id:1,
        },
        {
            tittle:"About",
            link:"/about",
            id:2
        },
        {
            tittle:"Skills",
            link:"/skills",
            id:3
        },
        {
            tittle:"Portfolio",
            link:"/portfolio",
            id:4
        },
        {
            tittle:"Contact",
            link:"/contact",
            id:5
        }
    ])
    const [actionButton, setactionButton] = useState({
        tittle:"Hire Me",
        link:"/hire-me"
    })
  return (
    <>
      <div className="main w-full h-14 border-2 border-red-100 flex items-center justify-between px-2 ">
        <div className="barnd">
          <h1 className="brandi text-2xl font-bold  tracking-tight">{barndName}</h1>
        </div>
        <div className="menu space-x-5 font-bold font-mono tracking-tight">
            {menuLinks.map((links)=>(
                      <a  href="{links.link}" className="hover:text-orange-600 hover:font-thin hover:underline ">{links.tittle}</a>
            ))}
        </div>
        <div className="button">
          <a href="{actionButton.link}" className="px-3 py-1 text-2xl bg-orange-600 rounded-lg font-semibold  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-2xl">{actionButton.tittle}</a>
          <i class=" ri-menu-line  "></i>
        </div>
      </div>
    </>
  );
};

export default Header;
