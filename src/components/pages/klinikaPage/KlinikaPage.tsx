import KlinikaImages from "@/components/modules/klinika/klinikaImages/KlinikaImages";
import Image from "next/image";
import Link from "next/link";

export default function KlinikaPage() {
  return (
    <>
      <section className="w-full p-4 py-6">
        <div>
          <div className="grid grid-cols-1 items-center justify-center sm:mx-auto md:grid-cols-2">
            <div className="mx-auto flex flex-row items-center justify-between gap-4 rounded-xl ">
              <div className="mx-auto mb-4 flex w-full flex-col items-center justify-between gap-4 py-4 md:mb-8 md:gap-6">
                <Image
                  className="rounded-lg rounded-tl-none"
                  src="/klinika1.webp"
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="gridImage1"
                  width={250}
                  height={250}
                />
                <Image
                  loading="lazy"
                  className="rounded-lg"
                  width={250}
                  style={{ maxWidth: "100%", height: "auto" }}
                  height="250"
                  src="/klinika2.webp"
                  alt="gridImage2"
                />
              </div>
              <div className="mx-auto mt-4 flex w-full flex-col items-center justify-between gap-4 py-4 md:mt-16 md:gap-6">
                <Image
                  loading="lazy"
                  className="rounded-lg"
                  width={250}
                  style={{ maxWidth: "100%", height: "auto" }}
                  height={250}
                  src="/klinika3.webp"
                  alt="gridImage1"
                />
                <Image
                  loading="lazy"
                  className="rounded-lg rounded-br-none"
                  width={250}
                  style={{ maxWidth: "100%", height: "auto" }}
                  height={250}
                  src="/klinika4.webp"
                  alt="gridImage2"
                />
              </div>
            </div>
            <div className="flex flex-col p-4 py-4 lg:flex-col">
              <h1 className="mb-2 text-left text-lg font-medium text-blue-400 md:space-x-6 lg:text-xl">
                Medical Esthetic Klinika Laryngologiczna w Warszawie
              </h1>
              <h2 className="mb-4 font-montserrat text-3xl font-bold text-blue-900 dark:text-blue-400 md:py-2 lg:text-4xl">
                O klinice
              </h2>
              <p className="mb-4 max-w-screen-lg font-montserrat text-lg text-gray-400 dark:text-gray-200">
                W celu zapewnienia Państwu rzetelnej diagnostyki medycznej oraz
                fachowej pomocy, nasze gabinety i profesjonalne sale operacyjne
                wyposażone zostały w innowacyjny sprzęt medyczny. W naszej
                klinice przeprowadzamy szeroki zakres zabiegów i operacji
                laryngologicznych, w znieczuleniu ogólnym oraz miejscowym.
                Zapewniamy Państwu zespół wykwalifikowanych i doświadczonych
                specjalistów z zakresu laryngologii operacyjnej, którzy wiedzę i
                doświadczenie zdobywali w renomowanych ośrodkach w kraju i
                zagranicą.
              </p>
              <Link
                className="opacity-85 ripple-bg-emerald-400 my-2 flex h-14 min-w-max items-center justify-center rounded-xl p-4 text-lg font-semibold text-white shadow-lg md:w-20 lg:my-2 lg:h-16"
                href="/zespol"
              >
                Poznaj naszą kadrę
              </Link>
            </div>
          </div>
        </div>
      </section>
      <KlinikaImages />
    </>
  );
}
