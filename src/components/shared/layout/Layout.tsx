import { ReactNode } from "react";
import Head from "next/head";
// import { motion, useScroll } from "framer-motion";
import Nav from "../nav/Nav";
import { ThemeProvider } from "next-themes";
import Footer from "../footer/Footer";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Klinika Laryngologiczna" }: LayoutProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="max-w-screen-4xl relative mx-auto bg-gradient-to-b from-[#e9f2ff] to-transparent dark:from-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl">
          <nav>
            <Nav />
          </nav>
          {/* <MobileNav /> */}
          <main>{children}</main>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default Layout;

// <div className="mx-auto min-h-screen max-w-screen-2xl">
//   <header className="mx-4 flex justify-between py-10 sm:mx-8 lg:mx-auto lg:justify-between lg:px-8">
//     <div>
//       <Link className="custom-link" href="/">
//         <div className="flex items-center justify-between">
//           <div className="mr-3 h-auto w-full">
//             <Image
//               width={200}
//               height={200}
//               src="/logo.svg"
//               alt="logo"
//               className="object-fit w-fit object-cover object-center"
//             />
//           </div>
//         </div>
//       </Link>
//     </div>
//     <div className="text-gray-normal flex items-center font-medium leading-5">
//       <div className="hidden lg:block">
//         {headerNavLinks.map(
//           (link: any): JSX.Element => (
//             <Link
//               key={link.title}
//               href={link.href}
//               className="text-gray-light hover:text-green-light p-2 font-medium sm:p-4"
//             >
//               {link.title}
//             </Link>
//           ),
//         )}
//       </div>
//       {/* <button className="hover:bg-blue-dark hidden h-12 max-h-screen w-36 rounded-xl border-0 bg-emerald-400 text-white shadow-md transition-all hover:text-white lg:block">
//               Umów wizytę
//             </button> */}
//       <button className="ripple-bg-emerald-400 hidden h-14 w-40 items-center justify-center rounded-2xl px-5 py-4 font-semibold text-white lg:flex lg:text-lg">
//         Umów wizytę
//       </button>
//       <MobileNav />
//     </div>
//   </header>
// </div>
