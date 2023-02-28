// import { useState } from "react";
// import {}
// import headerNavLinks from "@/lib/headernavLinks";
// import { useTheme } from "next-themes";

import React from "react";

const MobileNavb = () => {
  return <>awd</>;
};

export default MobileNavb;

// import Link from "next/link";

// const MobileNav = () => {
//   const [navShow, setNavShow] = useState(false);
//   const { systemTheme, theme, setTheme } = useTheme();
//   const currentTheme = theme === "system" ? systemTheme : theme;
//   const onToggleNav = () => {
//     setNavShow((status) => {
//       if (status) {
//         document.body.style.overflow = "auto";
//       } else {
//         // Prevent scrolling
//         document.body.style.overflow = "hidden";
//       }
//       return !status;
//     });
//   };

//   return (
//     <div className="max-h-screen max-w-fit lg:hidden">
//       <button
//         type="button"
//         className="m-0 h-8 w-8 rounded py-1"
//         aria-label="Toggle Menu"
//         onClick={onToggleNav}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="text-gray-900"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       <div
//         className={` top-0 left-0 h-full w-full transform bg-gray-300 opacity-95 duration-300 ease-in-out ${
//           navShow ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-end">
//           <button
//             type="button"
//             className="mr-8 mt-11 h-8 w-8 rounded"
//             aria-label="Toggle Menu"
//             onClick={onToggleNav}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="text-gray-900"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>
//         <div>
//           <div
//             className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
//               navShow ? "block" : "hidden"
//             }`}
//           >
//             <div className="items-center justify-center space-y-8 lg:flex lg:space-y-0 lg:space-x-6">
//               {headerNavLinks.map((item, idx) => {
//                 return (
//                   <Link
//                     href={item.href}
//                     key={idx}
//                     className={
//                       "block text-neutral-900 hover:text-neutral-900 dark:text-neutral-200 lg:inline-flex"
//                     }
//                     onClick={() => setNavShow(!navShow)}
//                   >
//                     {item.title}
//                   </Link>
//                 );
//               })}
//               {currentTheme === "dark" ? (
//                 <button
//                   type="button"
//                   onClick={() => setTheme("light")}
//                   className="rounded-xl bg-slate-100 p-2"
//                 >
//                   <RiSunLine size={25} color="black" />
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={() => setTheme("dark")}
//                   className="rounded-xl bg-slate-100 p-2"
//                 >
//                   <RiMoonFill size={25} />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNav;
