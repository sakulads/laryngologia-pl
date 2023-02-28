import Image from "next/image";
import Link from "next/link";
import { zabieg } from "@/lib/interfaces/datazabiegi";

type PostProps = {
  post: zabieg;
};
const API_URL = "https://laryngologia.vercel.app/";
export default function PostComponent({ post }: PostProps) {
  return (
    <>
      <div className="container">
        <li className="">
          <Link className="" href={`/post/${post.id}`}>
            <Image
              priority
              width="200"
              height="200"
              style={{ width: "100%", height: "auto" }}
              className="w-[350px] md:w-full"
              src={API_URL + post.image1}
              alt="post.title"
            />
          </Link>
          <div className="md:py-2">
            <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {post.name}
            </h2>
            <p className="py-2 text-base text-neutral-600 dark:text-neutral-200">
              {post.title}
            </p>
            <Link href="/post/[id]" passHref as={`/post/${post.id}`}>
              Read more...
            </Link>
          </div>
        </li>
      </div>
    </>
  );
}
