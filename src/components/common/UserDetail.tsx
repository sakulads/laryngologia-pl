import * as React from "react";
import { motion, spring } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

import { User } from "@/lib/interfaces/index";
import Image from "next/image";

type UserDetailProps = {
  item: User;
};

const UserDetail = ({ item: user }: UserDetailProps) => (
  <>
    {/* <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p> */}
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="show"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 2.85,
            type: "spring",
            bounce: 50,
            stiffness: 30,
          },
        },
      }}
    >
      <motion.div className="mx-auto flex max-w-screen-2xl items-center justify-center py-6 sm:py-8 lg:py-12 xl:px-24">
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mx-auto flex max-w-screen-2xl items-center px-4 md:px-8"
        >
          <div className="mx-auto grid items-center gap-12 md:grid-cols-2 lg:gap-12">
            <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="flex max-h-screen  items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto"
              >
                <Image
                  sizes="100vw"
                  style={{ width: "100%" }}
                  width="250"
                  height="250"
                  src={user.image}
                  alt={user.name}
                  className="h-[400px] w-full rounded-3xl object-cover object-center shadow-md lg:h-auto"
                />
              </motion.div>
            </motion.div>

            <div className="flex flex-col md:pt-8">
              <motion.h1
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="mb-4 text-start text-3xl font-bold text-blue-900 dark:text-blue-400 sm:text-3xl md:mb-6 md:text-left lg:text-4xl"
              >
                {user.name}
              </motion.h1>
              <motion.p
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="mb-6 text-base text-gray-400 dark:text-gray-300 sm:text-lg md:mb-8"
              >
                {user.description}
              </motion.p>
              {user.itemsList.map((itemList) => {
                return (
                  <div key={itemList.id}>
                    <motion.ul
                      variants={FADE_DOWN_ANIMATION_VARIANTS}
                      className="m-2 mb-4 list-disc px-4 text-start sm:text-lg md:mb-8"
                    >
                      <li className="text-md md:text-md font-medium leading-7 xl:text-lg">
                        {itemList.title}
                      </li>
                      <li className="text-md md:text-md font-medium leading-7 xl:text-lg">
                        {itemList.title2}
                      </li>
                      <li className="text-md md:text-md font-medium leading-7 xl:text-lg">
                        {itemList.title3}
                      </li>
                      <li className="text-md md:text-md font-medium leading-7 xl:text-lg">
                        {itemList.title4}
                      </li>
                      {itemList.title5 ? (
                        <li className="text-md md:text-md font-medium leading-7 xl:text-lg">
                          {itemList.title5}
                        </li>
                      ) : undefined}
                      {itemList.title6 ? (
                        <li className="text-md md:text-md font-medium leading-7 xl:text-lg">
                          {itemList.title6}
                        </li>
                      ) : undefined}
                    </motion.ul>
                    <p>{user.description2}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </>
);

export default UserDetail;
