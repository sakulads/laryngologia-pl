import * as React from "react";
import { BsCheckCircle } from "react-icons/bs";

const ListBlock = () => {
  return (
    <>
      <div className="mx-auto flex flex-col justify-between max-w-screen-2xl p-4 py-4 sm:flex-row sm:items-baseline lg:justify-center xl:px-24">
        <div className="flex flex-col flex-wrap items-start justify-between sm:w-6/12 ">
          <div className="item-start flex w-full flex-col justify-center">
            <h2 className="p-2 font-montserrat text-lg font-bold text-blue-900 dark:text-blue-400 xl:text-3xl">
              Kredyt przysługuje osobom
              <br /> pozyskującym dochód z:
            </h2>
            <ul className="flex flex-col flex-wrap items-start justify-start space-y-3 py-6 text-gray-400 dark:text-gray-200 lg:text-lg">
              <li className="flex flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="block w-7 text-emerald-400"
                />
                <span className="ml-2">umowy o pracę,</span>
              </li>
              <li className="flex flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="block w-7 text-emerald-400"
                />
                <span className="ml-2">umowy cywilnoprawnej,</span>
              </li>
              <li className="flex flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="block w-7 text-emerald-400"
                />
                <span className="ml-2"> emerytury lub renty,</span>
              </li>
              <li className="inline-flex flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="block w-7 text-emerald-400"
                />
                <span className="ml-2">działalności gospodarczej,</span>
              </li>
              <li className="inline-flex flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="block w-7 text-emerald-400"
                />
                <span className="ml-2"> gospodarstwa rolnego.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex flex-wrap items-baseline justify-between sm:w-6/12">
          <div className="mx-auto flex flex-grow flex-col justify-center">
            <h2 className="p-2 font-montserrat text-lg font-bold text-blue-900 dark:text-blue-400 xl:text-3xl">
              Zdolność kredytową sprawdzamy na podstawie przedstawienia
              dokumentu:
            </h2>
            <ul className="mx-auto inline-flex w-full flex-col flex-nowrap items-start justify-center space-y-3 py-6 text-gray-400 dark:text-gray-200 lg:text-lg">
              <li className="flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="inline-flex w-7 text-emerald-400"
                />
                <span className="ml-2">
                  potwierdzenia przelewu od pracodawcy w przypadku umowy o pracę
                  za ostatni miesiąc,
                </span>
              </li>
              <li className="flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="inline-flex w-7 text-emerald-400"
                />
                <span className="ml-2">
                  potwierdzenia podatku dochodowego do urzędu skarbowego za
                  ostatnie 3 miesiące
                </span>
              </li>
              <li className="flex-row items-center justify-evenly align-middle">
                <BsCheckCircle
                  size={20}
                  className="inline-flex w-7 text-emerald-400"
                />
                <span className="ml-2">
                  potwierdzenia wpływów emerytury lub renty na konto.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListBlock;
