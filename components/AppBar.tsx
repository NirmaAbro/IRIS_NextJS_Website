"use client";

import React, { useEffect, useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import LionIcon from "./icons/LionIcon";
import logo from "/public/logo.png";
import logoColor from "/public/logoColor.png";
import Logo from "./icons/Logo";
import CloseIcon from "./icons/CloseIcon";

const AppBar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    {
      name: "About Us",
      link: "#home",
      pages: [
        { name: "test One", link: "#home" },
        { name: "test Two", link: "#home" },
        { name: "test Three", link: "#home" },
      ],
    },
    {
      name: "About Us",
      link: "#home",
      pages: [
        { name: "test One", link: "#home" },
        { name: "test Two", link: "#home" },
        { name: "test Three", link: "#home" },
      ],
    },
    {
      name: "About Us",
      link: "#home",
      pages: [
        { name: "test One", link: "#home" },
        { name: "test Two", link: "#home" },
        { name: "test Three", link: "#home" },
      ],
    },

    // { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // const nav = document.querySelector("nav");
      console.log(window.innerWidth);
      console.log(window.innerHeight);
      window.scrollY > window.innerHeight - 200
        ? setSticky(true)
        : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] rounded-b-xl   text-white`}
    >
      <div
        className={`flex flex-col bg-transparent backdrop-blur-sm  ${
          open
            ? "rounded-none backdrop-blur-3xl"
            : "rounded-b-xl shadow-lg shadow-black/70"
        }`}
      >
        <div
          className={`flex items-center justify-between px-9 md: py-3 lg:px-16`}
        >
          <Logo
            myStyle={`h-7 w-10 md:h-10 md:w-14 lg:h-16 lg:w-24`}
            path={!sticky ? logo : logoColor}
          />
          <div className={`flex items-center justify-center gap-5 lg:hidden`}>
            <SearchIcon
              myStyle={`${
                sticky
                  ? "text-[#022061] hover:text-blue-700"
                  : "text-gray-300 hover:text-white"
              }`}
            />
            {open ? (
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <CloseIcon
                  myStyle={`${
                    sticky
                      ? "text-[#022061] hover:text-blue-700"
                      : "text-gray-300 hover:text-white"
                  }`}
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <LionIcon
                  myStyle={`${
                    sticky
                      ? "text-[#022061] hover:text-blue-700"
                      : "text-gray-300 hover:text-white"
                  }`}
                />
              </button>
            )}
          </div>

          <ul className="hidden lg:flex lg:items-center lg:gap-1 lg:py-2 lg:text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="flex items-end">
                {/* <div className="w-[1px] h-20 bg-white mx-4"></div> */}
                <div
                  className={`w-[1px] ${
                    sticky ? "h-10 bg-[#022061]" : "h-20 bg-white"
                  }  mx-4`}
                ></div>
                <a
                  className={`${
                    sticky
                      ? "text-[#022061] hover:text-blue-800"
                      : "text-gray-400 hover:text-white"
                  } font-sans font-bold tracking-widest`}
                  href={menu?.link}
                >
                  {menu?.name}
                </a>
                {/* <ul> */}
                {/* {menu?.pages} */}
                  
                  {/* {menu?.pages.map((page, i) => {
                    <li key={i} className="">
                      <a
                        className={`${
                          sticky
                            ? "text-[#022061] hover:text-blue-800"
                            : "text-gray-400 hover:text-white"
                        } font-sans font-bold tracking-widest`}
                        href={menu?.link}
                      >
                        {page?.name}
                      </a>
                    </li>;
                  })} */}
                {/* </ul> */}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${
            open ? "block rounded-b-xl shadow-lg shadow-black/70" : "hidden"
          }  rounded-b-xl w-full px-7 h-fit lg:hidden`}
        >
          <ul className="flex flex-col gap-1 p-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="flex">
                {/* <div className="w-[1px] h-20 bg-white mx-4"></div> */}
                <a
                  className={` ${
                    sticky
                      ? "text-black hover:text-blue-800"
                      : "text-gray-200 hover:text-white"
                  } font-sans font-semibold tracking-widest`}
                  href="#"
                  >
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;

// import React, { useEffect, useState } from "react";

//   return (
//     <nav
//       className={`fixed w-full left-0 top-0 z-[999] ${
//         sticky ? "bg-white/60  text-gray-900" : "text-white"
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <div className="mx-7">
//           <h4 className="text-4xl uppercase font-bold">
//             Muhammad<span className="text-cyan-600"> Ismail</span>
//           </h4>
//         </div>
//         <div
//           className={` ${
//             sticky ? "md:bg-white/0 bg-white" : "bg-white"
//           } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
//         >
//           <ul className="flex items-center gap-1 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li key={i} className="px-6 hover:text-cyan-600">
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className={`z-[999]  ${
//             open ? "text-gray-900" : "text-gray-100"
//           } text-3xl md:hidden m-5`}
//         >
//           <ion-icon name="menu"></ion-icon>
//         </div>
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/3 h-screen
//       px-7 py-2 font-medium bg-white top-0 duration-300 ${
//         open ? "right-0" : "right-[-100%]"
//       }`}
//         >
//           <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li
//                 onClick={() => setOpen(false)}
//                 key={i/}
//                 className="px-6 hover:text-cyan-600"
//               >
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
