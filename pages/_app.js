import "../styles/globals.css";
import Header from "../components/headers/Header";
import AltHeader2 from "../components/headers/AltHeader2";
import Footer from "../components/Footer";
import ClassicNav from "../components/headers/ClassicNav";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
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

export default MyApp;
