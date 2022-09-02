import "../styles/globals.css";
import Footer from "../components/Footer";
import ClassicNav from "../components/headers/ClassicNav";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <style>{dom.css()}</style>
      </Head>
      <ClassicNav />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}

