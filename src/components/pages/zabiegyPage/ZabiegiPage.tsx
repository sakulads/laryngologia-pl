import useSWR from "swr";
import PostComponent from "@/components/modules/zabiegi/Post";
import type { Post } from "@/lib/interfaces";
import { zabieg } from "@/lib/interfaces/datazabiegi";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ZabiegiPage() {
  const { data, error, isLoading } = useSWR<zabieg[]>("/api/post", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className="flex max-w flex-col items-center justify-center p-4 md:flex-row flex-wrap xl:px-24">
      <h1 className="mb-4 font-montserrat text-2xl font-bold text-blue-900 dark:text-blue-400 md:py-2 lg:leading-normal xl:text-4xl">
        Zabiegi laryngologiczne
      </h1>
      <ul className="flex flex-col justify-center md:flex-row md:justify-between md:gap-2">
        {data.map((p) => (
          <PostComponent key={p.id} post={p} />
        ))}
      </ul>
    </div>
  );
}
