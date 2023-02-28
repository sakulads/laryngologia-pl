import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="p-4 xl:px-24">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:justify-items-center lg:flex xl:px-12">
        <div className="order-last md:order-first md:col-start-1 md:row-start-1 md:text-left">
          <span className="text-md text-left font-medium text-blue-400 dark:text-blue-200 lg:text-lg">
            LARYNGOLOGIA WARSZAWA
          </span>
          <h2 className="mb-4 animate-slide-up-fade font-montserrat text-3xl font-bold text-blue-900 dark:text-blue-400 md:py-2 lg:text-4xl lg:leading-normal">
            Klinika laryngologiczna <br /> w Warszawie
          </h2>
          <p className="text-md mb-4 animate-slide-down-fade font-montserrat text-gray-400 dark:text-gray-200 lg:text-lg lg:leading-relaxed">
            Medical Esthetic Laryngologia Warszawa to nowoczesna klinika,
            mieszcząca się w Warszawie, w której zajmujemy się diagnostyką oraz
            leczeniem schorzeń laryngologicznych.
          </p>
          <div className="flex items-center">
            <button className="w-46 ripple-bg-emerald-400 flex h-14 items-center justify-center rounded-2xl px-5 py-4 font-semibold text-white lg:text-lg">
              Umów wizytę
            </button>
            <button className="w-46 flex h-14 items-center justify-center rounded-2xl px-5 py-4 font-semibold text-blue-400 hover:underline lg:text-lg">
              <Link href="/zabiegi" passHref>
                Nasze zabiegi
              </Link>
            </button>
          </div>
        </div>
        <div className="mx-auto w-full animate-slide-up-fade md:col-start-2 md:row-start-1 md:h-full md:max-w-md">
          <Image
            width="370"
            height="300"
            style={{
              width: "100%",
            }}
            priority
            className="h-[400px] w-40 rounded-lg object-cover object-left-top md:h-auto"
            alt="hero"
            src={"/heroImg.webp"}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
