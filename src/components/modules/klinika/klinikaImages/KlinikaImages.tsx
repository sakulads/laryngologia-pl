import Image from "next/image";
import React from "react";

export type Images = [
  {
    id: number | string;
    img: string;
  },
];
const images = [
  { id: 1, img: "/klinika1.webp" },
  { id: 2, img: "/klinika7.jpg" },
  { id: 3, img: "/klinika4.webp" },
  { id: 4, img: "/klinika6.jpg" },
  { id: 5, img: "/klinika5.jpg" },
];

const KlinikaImages = () => {
  return (
    <div className="mx-auto p-4 lg:max-w-screen-2xl xl:px-24">
      <h2 className="font-montserrat text-3xl font-bold text-blue-900 dark:text-blue-400">
        Nasza klinika
      </h2>
      <div className="mx-auto grid grid-auto-fit md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => {
          return (
            <div key={image.id} className="mb-4 rounded-md p-1 sm:p-4">
              <Image
                style={{ height: "auto", width: "100%" }}
                src={image.img}
                width={250}
                height={250}
                alt={image.img}
                className="mx-auto w-full max-w-sm rounded-md shadow-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KlinikaImages;
