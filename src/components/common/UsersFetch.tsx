import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sampleUserData } from "@/utils/sample-data";
import { IoIosArrowForward } from "react-icons/io";

const UsersFetch = () => {
  return (
    <div className="p-4 xl:px-24">
      <h2 className="mb-6 text-center font-montserrat text-4xl font-bold text-blue-900 dark:text-blue-400 md:py-4 lg:text-4xl">
        Nasz zespół laryngologiczny
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-3">
        {sampleUserData?.map((user: any) => {
          return (
            <div key={user.id} className="w-full overflow-hidden rounded-xl">
              <Link
                className="duration-700 hover:opacity-80 hover:transition-all"
                href={{
                  pathname: "/user/[id]",
                  query: { id: user.id },
                }}
              >
                <Image
                  priority
                  width="300"
                  height="300"
                  className="h-[350px] w-full rounded-2xl bg-cover bg-center object-cover object-left-top md:h-auto lg:mx-auto lg:w-fit"
                  src={user?.image}
                  alt={user?.name}
                  style={{
                    maxWidth: "100%",
                  }}
                />
                {/* md:h-80 xl:h-96 */}
              </Link>
              <div className="flex flex-wrap items-stretch justify-center py-4">
                <div className="text-center text-lg font-bold text-emerald-400 hover:text-blue-900 xl:text-2xl">
                  <Link
                    className="text-xl duration-300 hover:transition-all dark:text-gray-200"
                    href={{
                      pathname: "/user/[id]",
                      query: { id: user.id },
                    }}
                  >
                    {user.name}
                  </Link>
                </div>
                <p className="lg:text-md text-md items-center overflow-hidden truncate py-2 text-center align-middle font-montserrat text-gray-400 dark:text-gray-200 md:px-6">
                  {user.description}
                </p>
              </div>
              <Link
                className="ripple-bg-emerald-400 flex justify-center rounded-xl p-3 text-white md:w-full"
                href={{
                  pathname: "/user/[id]",
                  query: { id: user.id },
                }}
              >
                <button className="text-md flex h-3 w-full items-center justify-center py-3 px-4 font-semibold md:text-lg lg:mx-auto">
                  Poznaj lekarza{" "}
                  <IoIosArrowForward
                    size={18}
                    className="flex items-center md:mt-1"
                  />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="flex flex-col flex-wrap justify-center md:flex-row md:items-center md:justify-between">
    //   <div className="flex flex-col p-4 md:mx-auto md:flex-row md:flex-wrap md:justify-between lg:justify-around lg:gap-6">
    //     {sampleUserData?.map((user: any) => {
    //       return (
    //         <div
    //           className="flex flex-col justify-center md:flex-col"
    //           key={user.id}
    //         >
    //           <Link className="" href={`/user/${user.id}`}>
    //             <Image
    //               src={user.image}
    //               alt={user.name}
    //               width="300"
    //               height="300"
    //               className="flex h-[400px] w-full rounded-lg object-cover object-center md:h-full md:min-w-max md:max-w-fit md:flex-row md:flex-wrap md:items-center md:justify-between md:p-4"
    //             />
    //           </Link>
    //           <div className="flex justify-center">
    //             <h2 className="text-md text-center font-montserrat font-bold uppercase text-emerald-400">
    //               {user.name}
    //             </h2>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default UsersFetch;
