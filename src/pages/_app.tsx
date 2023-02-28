import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { motion, useScroll } from "framer-motion";
import Layout from "@/components/shared/layout/Layout";
import "@/styles/Nprogress.css";
import Head from "next/head";


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-2 origin-top-left bg-emerald-300"
        style={{ scaleX: scrollYProgress }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
