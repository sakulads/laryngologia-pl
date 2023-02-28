import { cennik } from "@/lib/cennik-data";
import * as React from "react";

type CennikProps = {
  id: number | string;
  title: string;
  price: string;
};

export default function Cennik({}: CennikProps) {
  return (
    <div className="container relative mx-auto w-full max-w-screen-2xl p-4 xl:px-24">
      <h1 className="mx-auto mb-4 text-left font-montserrat text-2xl font-bold text-blue-900 dark:text-blue-400 md:py-2 lg:text-4xl">
        Cennik zabiegów laryngologicznych
      </h1>
      <h2 className="text-xl font-medium text-emerald-400 md:text-2xl">
        Zabiegi w znieczuleniu ogólnym
      </h2>
      <div className="mx-auto flex w-full min-w-fit items-center justify-around py-6">
        <ul className="flex w-full flex-col justify-around space-y-4">
          {cennik.map((item: CennikProps) => (
            <li
              key={item.id}
              className="mx-auto flex w-full flex-row place-items-center justify-center lg:px-12"
            >
              <span className="text-md w-4/6 rounded-lg bg-blue-900 p-4 font-medium text-white lg:text-lg">
                {item.title}
              </span>
              <span className="text-md ml-2 flex w-2/6 max-w-md items-center justify-center rounded-lg bg-blue-400 p-4 font-medium text-white lg:text-lg">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
