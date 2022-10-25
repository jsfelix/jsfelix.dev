import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen">
      <Header title="Jefferson Felix" />
      <main className="pb-10 max-w-6xl m-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
