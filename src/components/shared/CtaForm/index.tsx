import React, { FC } from "react";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";

type CtaFormProps = {};

const CtaForm: FC<CtaFormProps> = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto container w-full p-4 xl:px-24">
        <div className="flex flex-col flex-nowrap justify-center grid-auto-fit sm:grid-cols-2 sm:flex-row sm:items-center md:grid lg:gap-12">
          <motion.div className="flex flex-col flex-wrap items-center justify-center  rounded-3xl bg-blue-100 bg-opacity-50 px-6 py-14 dark:bg-gray-800 sm:items-center md:mb-0 lg:bg-cover lg:px-24 lg:pb-24">
            <motion.h2 className="font-montserrat text-base font-medium text-blue-900 dark:text-blue-400 xl:text-lg">
              Zamów rozmowę
            </motion.h2>
            <motion.h2
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mb-6 py-2 font-montserrat text-center text-xl font-bold text-blue-900 dark:text-blue-400 lg:text-3xl lg:leading-10"
            >
              Umów wizytę laryngologiczną
            </motion.h2>
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="flex w-full items-center justify-center sm:block md:justify-between"
            >
              {/* LIST */}

              <ul className="md:text-md grid grid-cols-1 items-center space-y-2 text-left text-gray-400 dark:text-gray-200 md:grid-cols-2 md:gap-6">
                <li className="inline-flex items-center space-x-5">
                  {/* Icon */}
                  <svg
                    className="text-emerald-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {/* Icon */}

                  <span>Szybkie terminy</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="text-emerald-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Najlepsi specjaliści</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="text-emerald-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="">Szeroki zakres zabiegów</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="text-emerald-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Wygodna lokalizacja</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <div className="container mx-auto w-full rounded-xl py-6">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 dark:bg-gray-800 dark:text-gray-200 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                      >
                        First name
                      </label>

                      <input
                        placeholder="First name"
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-emerald-400 shadow-sm focus:ring-emerald-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        Last name
                      </label>
                      <input
                        placeholder="Last name"
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-emerald-400 shadow-sm focus:ring-emerald-400 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        Email address
                      </label>
                      <input
                        placeholder="Email address"
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-emerald-400 shadow-sm  focus:ring-emerald-400 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        Phone-number
                      </label>

                      <input
                        placeholder="(000)-123-45-67"
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="mt-1 block w-full rounded-md border-emerald-400 shadow-sm  focus:ring-emerald-400 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 px-4 py-3 text-center dark:bg-gray-200 sm:px-6">
                  <button
                    type="submit"
                    className="text-md ripple-bg-emerald-400 flex h-10 items-center justify-center rounded-md border border-transparent py-4 px-4 font-semibold text-white shadow-sm hover:duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:text-gray-200 sm:w-full lg:text-lg xl:text-xl"
                  >
                    Zamow kontakt
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CtaForm;
