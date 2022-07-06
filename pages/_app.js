import "../styles/globals.css";
import Header from "../components/headers/Header";
import AltHeader2 from "../components/headers/AltHeader2";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AltHeader2 />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}

export default MyApp;
