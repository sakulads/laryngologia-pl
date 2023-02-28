import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
// import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

function Content({}) {
  return (
    <section className="p-4 xl:px-24">
      <motion.div>
        <div className="grid grid-cols-1 items-center justify-between gap-4 sm:mx-auto md:grid-cols-2 md:gap-8 md:p-4 lg:gap-12">
          <div className="flex flex-row items-center justify-between gap-4 rounded-xl md:gap-4 ">
            <div className="mx-auto mb-4 flex w-full flex-col items-center justify-between gap-4 py-4 md:mb-8 md:gap-6">
              <Image
                className="rounded-3xl rounded-tl-none"
                src="/gridImage2.webp"
                style={{ width: "100%", height: "auto" }}
                alt="gridImage1"
                width={250}
                height={250}
              />
              <Image
                className="rounded-3xl"
                width={250}
                style={{ width: "100%", height: "auto" }}
                height={250}
                src="/gridImage1.webp"
                alt="gridImage2"
              />
            </div>
            <div className="mx-auto mt-4 flex w-full flex-col items-center justify-between gap-4 py-4 md:mt-16 md:gap-6">
              <Image
                className="rounded-3xl"
                width={250}
                style={{ width: "100%", height: "auto" }}
                height={250}
                src="/gridImage3.webp"
                alt="gridImage1"
              />
              <Image
                className="max-w-full rounded-3xl rounded-br-none"
                width={250}
                style={{ width: "100%", height: "auto" }}
                height={250}
                src="/gridImage4.webp"
                alt="gridImage2"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-xl">
            <h1 className="text-md text-left font-medium text-blue-400 lg:text-lg">
              Od 27 lat
            </h1>
            <h2 className="mb-4 font-montserrat text-3xl font-bold text-blue-900 dark:text-blue-400 lg:leading-normal md:py-2 lg:text-4xl">
              Laryngolodzy <br /> z doświadczeniem
            </h2>
            <p className="text-md mb-4 font-montserrat text-gray-400 dark:text-gray-200 lg:text-lg">
              Klinika istnieje na rynku od ponad 27 lat, do naszych wiodących
              specjalizacji należą chirurgia plastyczna, chirurgia naczyniowa,
              medycyna estetyczna, transplantacja włosów, trychologia, urologia
              i proktologia. Chcąc zapewnić naszym Pacjentom jeszcze bardziej
              kompleksową opiekę medyczną, poszerzyliśmy naszą ofertę o
              otolaryngologię.
            </p>
            <Link
              className="opacity-85 ripple-bg-emerald-400 my-2 flex h-14 min-w-max items-center justify-center rounded-2xl p-4 text-lg font-semibold text-white shadow-lg md:w-20 lg:my-2 lg:h-16"
              href="/klinika"
            >
              Poznaj naszą klinikę
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Content;
