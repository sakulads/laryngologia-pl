import Image from "next/image";
import Link from "next/link";
import ListBlock from "@/components/modules/raty/ListBlock";

const RatyPage = () => {
  return (
    <>
      <div className="container mx-auto w-full max-w-screen-2xl p-4 xl:px-24">
        <div>
          <section className="mx-auto flex flex-col justify-between">
            <h2 className="mb-4 text-left font-montserrat text-2xl font-bold text-blue-900 dark:text-blue-400 md:py-2 lg:text-4xl">
              Zabiegi laryngologiczne na raty
            </h2>
            <div className="flex flex-col items-center justify-between grid-auto-fit-xl  sm:mx-auto md:grid-cols-2 md:flex-row md:flex-nowrap">
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div className="flex flex-col items-start justify-items-start rounded-xl">
                  <h1 className="text-md text-left font-medium text-blue-400 xl:text-lg">
                    Rozłóż koszt zabiegu na raty
                  </h1>
                  <h2 className="mb-4 font-montserrat text-2xl font-semibold text-blue-900 dark:text-blue-400 md:py-2 xl:text-3xl">
                    Kredytujemy wszystkie zabiegi
                    <br /> dostępne w naszej ofercie.
                  </h2>
                  <p className="mb-4 w-full max-w-screen-2xl font-montserrat text-base text-gray-400 dark:text-gray-200 lg:text-lg">
                    Klinika istnieje na rynku od ponad 27 lat, do naszych
                    wiodących specjalizacji należą chirurgia plastyczna,
                    chirurgia naczyniowa, medycyna estetyczna, transplantacja
                    włosów, trychologia, urologia i proktologia. Chcąc zapewnić
                    naszym Pacjentom jeszcze bardziej kompleksową opiekę
                    medyczną, poszerzyliśmy naszą ofertę o otolaryngologię.
                  </p>
                  <Link
                    className="opacity-85 ripple-bg-emerald-400 my-2 flex h-14 min-w-max items-center justify-center rounded-2xl p-4 text-lg font-semibold text-white shadow-lg md:w-20 lg:my-2 lg:h-16"
                    href="/klinika"
                  >
                    Poznaj naszą klinikę
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-lg py-6">
                <Image
                  className="mx-auto w-full max-w-2xl rounded-lg bg-cover object-cover shadow-lg sm:h-[300px]"
                  priority
                  src="/gridImage2.webp"
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="gridImage1"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="">
        <ListBlock />
      </div>
    </>
  );
};

export default RatyPage;

// import { User } from "@/lib/interfaces";
// import { loadUsers } from "@/lib/load-users";
// import { GetStaticProps, InferGetStaticPropsType } from "next";
// import Link from "next/link";

// const RatyPage = ({
//   users,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return (
//     <>
//       <ul>
//         {users?.map((user: any) => (
//           <div key={user.id}>
//             <Link href={`users/${user.id}`}>
//               <li>{user.name}</li>
//             </Link>
//           </div>
//         ))}
//       </ul>
//     </>
//   );
// };

// export const getStaticProps: GetStaticProps<{ users: User[] }> = async (
//   context,
// ) => {
//   // Call an external API endpoint to get users.
//   // You can use any data fetching library
//   const users: User[] = await loadUsers();

//   // By returning { props: { users } }, the Blog component
//   // will receive `users` as a prop at build time
//   return {
//     props: {
//       users,
//     },
//   };
// };

// export default RatyPage;
