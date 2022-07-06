import "../styles/globals.css";
import Header from "../components/headers/Header";
import AltHeader2 from "../components/headers/AltHeader2";
import Footer from "../components/Footer";
import ClassicNav from "../components/headers/ClassicNav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ClassicNav />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}

export default MyApp;
