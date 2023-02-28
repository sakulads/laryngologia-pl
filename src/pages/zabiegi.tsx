// import * as React from "react";
// import dynamic from "next/dynamic";
// import { Suspense } from "react";

// const ZabiegiPage = dynamic(
//   () => import("@/components/pages/zabiegyPage/ZabiegiPage"),
//   {
//     loading: () => (
//       <Suspense fallback={true}>
//         <>Loading ...</>
//       </Suspense>
//     ),
//   },
// );
// const Zabiegi = () => {
//   return (
//       <ZabiegiPage />
//   );
// };

// export default Zabiegi;

import useSWR from "swr";
import PostComponent from "@/components/modules/zabiegi/Post";
import type { zabieg } from "@/lib/interfaces/datazabiegi";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSWR<zabieg[]>("/api/post", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className="mx-auto w-full flex-col md:flex-wrap md:flex-row items-center justify-center max-w-screen-2xl xl:px-24 p-4 py-6">
      <h1 className="mb-4 font-montserrat text-3xl font-bold text-blue-900 dark:text-blue-400 md:py-2 xl:text-4xl lg:leading-normal">
        Zabiegi laryngologiczne
      </h1>
      <ul className="flex flex-col justify-center md:flex-row md:gap-4">
        {data.map((p) => (
          <PostComponent key={p.id} post={p} />
        ))}
      </ul>
    </div>
  );
}
