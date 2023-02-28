import { useRouter } from "next/router";
import useSWR from "swr";
import type { ResponseError } from "@/lib/interfaces";
import type { zabieg } from "@/lib/interfaces/datazabiegi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function PostPage() {
  const { query } = useRouter();
  const { data, error, isLoading, isValidating } = useSWR<
    zabieg,
    ResponseError
  >(() => (query.id ? `/api/post/${query.id}` : null), fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div>
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center p-4 py-6 md:justify-between md:gap-12 lg:flex-nowrap lg:items-start">
        {isValidating ? (
          <span>Validating...</span>
        ) : (
          <>
            <div className="flex w-full flex-col items-stretch lg:w-4/6 lg:max-w-screen-2xl xl:px-24">
              <Image
                className="container mx-auto max-h-96 rounded-md bg-cover object-cover object-left-top shadow-md"
                src={data.image1}
                width="450"
                height="450"
                style={{ maxWidth: "100%", height: "auto" }}
                alt={data.name}
              />
            </div>

            <div className="flex flex-col py-6 lg:w-4/6 lg:py-0">
              <h1 className="text-ellipsis font-montserrat text-3xl font-bold text-blue-900 dark:text-blue-400 md:text-inherit">
                {data.name}
              </h1>

              <h2 className="text-md py-2 font-montserrat font-bold leading-tight text-emerald-400">
                {data.title}
              </h2>
              <h3 className="py-2 font-raleway text-base text-gray-600 dark:text-gray-200">
                {data.subTitle}
              </h3>
              <h4 className="py-4 text-3xl font-semibold text-blue-900 dark:text-blue-400">
                {data.listTitle}
              </h4>
              <div>
                <div>
                  {data.listItems.map((i) => {
                    return (
                      <ul className="space-y-6" key={i.id}>
                        <li className="flex flex-row justify-items-center py-2">
                          <IoMdCheckmarkCircleOutline
                            size={26}
                            className="mr-2 text-emerald-400"
                          />
                          <span className="">{i.itemTitles}</span>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mx-auto flex w-full flex-col p-4 py-6 xl:px-24">
        <div>
          <p className="py-4 font-montserrat text-3xl font-bold text-blue-900">
            {data.opisZabiegu}
          </p>
          <p className="py-2 text-base font-bold text-gray-600">
            {data.opisTitle}
          </p>

          <p className="py-2 text-base text-gray-600">{data.opisContent1}</p>
          <p className="py-2 text-base text-gray-600">{data.opisContent2}</p>
          <p className="py-2 text-base font-bold text-gray-600 ">
            {data.opisContent3}
          </p>
          <p className="py-2 text-base text-gray-600">{data.opisContent4}</p>
          <p className="py-2 text-base text-gray-600">{data.opisContent5}</p>
          <p className="py-2 text-2xl font-semibold text-gray-600">
            {data.opisTitle2}
          </p>
          <p className="py-2 text-base text-gray-600">{data.opisContent6}</p>
        </div>
        <div className="container mx-auto flex max-w-screen-2xl flex-col justify-between py-20 md:flex-row-reverse md:flex-nowrap md:items-center md:gap-6">
          <div className="md:w-3/6">
            <Image
              className="max-h-96 w-full rounded-md bg-cover object-cover object-left-top shadow-md lg:min-h-full"
              style={{ width: "100%", height: "auto" }}
              width="450"
              height="450"
              src={data.image2}
              alt={data.name}
            />
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl p-4 shadow-xl md:w-3/6">
            <p className="text-2xl font-bold text-blue-900">
              {data.wkazaniaZabiegu}
            </p>
            <div className="max-w-full flex flex-col justify-center mx-auto lg:items-start">
              {data.wkazaniaLists.map((i) => {
                return (
                  <ul className="" key={i.id}>
                    <li className="flex flex-row justify-self-auto py-2">
                      <IoMdCheckmarkCircleOutline
                        size={26}
                        className="mr-2 text-emerald-400"
                      />
                      <span className="">{i.wkazaniaTitle}</span>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
