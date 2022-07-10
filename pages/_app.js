import "../styles/globals.css";
import Footer from "../components/Footer";
import { wrapper } from "../store/store";
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

export default wrapper.withRedux(MyApp);
