import * as React from "react";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { RiPhoneFill, RiMapPinLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

const KontaktPage = () => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl p-4 xl:px-24">
      <h2 className="mb-4 text-left font-montserrat text-2xl font-bold text-blue-900 dark:text-blue-400 md:py-2 lg:text-4xl">
        Kontakt
      </h2>
      <div className=" flex flex-col flex-wrap justify-center sm:flex-row md:grid md:grid-cols-2">
        <div className="rounded-xl">
          <form action="#" method="POST">
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 dark:bg-gray-800 dark:text-gray-200 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                    >
                      Imie
                    </label>

                    <input
                      type="text"
                      name="imie"
                      id="imie"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-md border-emerald-400 shadow-sm focus:ring-emerald-300 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="naziwsko"
                      className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                    >
                      Naziwsko
                    </label>

                    <input
                      type="text"
                      id="naziwsko"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-md border-emerald-400 shadow-sm focus:ring-emerald-300 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                      E-mail
                    </label>
                    <input
                      type="text"
                      name="e-mail"
                      id="e-mail"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-md border-emerald-400 shadow-sm focus:ring-emerald-300 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Twoj numer telefonu
                    </label>
                    <input
                      type="number"
                      name="telephone"
                      id="telephone"
                      autoComplete="telephone-name"
                      className="mt-2 block w-full rounded-md border-emerald-400 shadow-sm focus:ring-emerald-400 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 row-span-2">
                    <label
                      htmlFor="textarea"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Wiadomość
                    </label>
                    <textarea
                      rows={4}
                      className="form-textarea mt-2 block w-full rounded-md border-emerald-400 shadow-sm focus:ring-emerald-400 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full bg-slate-50 p-4 py-3 text-center dark:bg-gray-200">
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
        <motion.div className="mx-auto flex-col flex-wrap items-center justify-center rounded-3xl bg-opacity-50 px-6 dark:bg-gray-800 md:mb-0 lg:bg-cover">
          <motion.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mb-6 py-2 text-left font-montserrat text-xl font-bold text-blue-900 dark:text-blue-400 lg:text-3xl"
          >
            Napisz do nas lub zadzwoń
          </motion.h2>
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex w-full items-center justify-center sm:block md:justify-between"
          >
            <ul className="flex flex-col space-y-6">
              <li className="flex items-center">
                <div className="block">
                  <RiPhoneFill
                    className="rounded-full bg-emerald-400 p-2 text-white"
                    size={45}
                  />
                </div>
                <div className="flex-w ml-4 flex flex-col items-start">
                  <span className="text-xs text-stone-400">Numer telefonu</span>
                  <span className="text-md font-semibold text-blue-900">
                    +48 695 938 094
                  </span>
                </div>
              </li>
              <li className="inline-flex items-center">
                <div className="block">
                  <MdOutlineAlternateEmail
                    className="rounded-full bg-emerald-400 p-2 text-white"
                    size={45}
                  />
                </div>
                <div className="ml-4 flex flex-col flex-wrap items-start justify-start">
                  <span className="text-xs text-stone-400">Email</span>
                  <p className="text-md text-clip break-words font-semibold text-blue-900">
                    klinika@
                    <br />
                    laryngologiawarszawa.pl
                  </p>
                </div>
              </li>
              <li className="inline-flex items-center">
                <div className="block">
                  <RiMapPinLine
                    className="rounded-full bg-emerald-400 p-2 text-white"
                    size={45}
                  />
                </div>
                <div className="ml-4 flex flex-col items-start">
                  <span className="text-xs text-stone-400">Lokalizacja</span>
                  <span className="text-md font-semibold text-blue-900">
                    ul.Modzelewskiego 17 <br /> 02-679 Warszawa
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <div className="container mx-auto w-full py-10">
        <iframe
          title="laryngologiawarszawa map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.840757158247!2d21.009540315919274!3d52.17358866959566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932dd03a58513%3A0x5b047f839a381f02!2zWnlnbXVudGEgTW9kemVsZXdza2llZ28gMTcsIDAyLTY3OSBXYXJzemF3YSwg0J_QvtC70YzRidCw!5e0!3m2!1suk!2sua!4v1676484777790!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default KontaktPage;
