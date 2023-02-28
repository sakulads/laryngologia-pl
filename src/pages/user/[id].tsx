import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { sampleUserData } from "@/lib/sample-data";
import UserDetail from "@/components/common/UserDetail";

const UserPage = ({ item }: any) => {
  return (
    <>
      <UserDetail item={item} key={item.id} />
      {/* <div className="flex flex-col items-center p-4 md:flex-row">
        <div className="mx-auto w-full md:col-start-2 md:row-start-1 md:h-full md:max-w-md">
          <Image
            className="h-[400px] w-40 rounded-lg object-cover object-left-top md:h-auto"
            width={300}
            height={300}
            style={{ width: "100%" }}
            alt={item.name}
            src={item.image}
          />
        </div>
        <div className="flex flex-col">
          <div className="mb-4 flex flex-col py-4 font-montserrat text-3xl font-bold text-blue-900 dark:text-red-400">
            {item?.name}
          </div>
          <div>
            <h2>{item?.description}</h2>
          </div>
        </div>
      </div> */}
    </>
  );
};

export async function getStaticPaths({}) {
  // Call an external API endpoint to get posts

  // Get the paths we want to pre-render based on users
  const paths = sampleUserData?.map((user: any) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find((users: any) => users.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};

export default UserPage;
