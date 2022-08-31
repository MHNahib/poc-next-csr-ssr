import Footer from "../src/components/Footer/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <div className="py-4 bg-blue-50 text-center font-bold text-3xl">
        NEXT.Js POC
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
