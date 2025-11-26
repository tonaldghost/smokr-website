import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Head from "next/head";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className={` min-h-screen text-black bg-white`}>
      <Head>
        <title>Smokr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}
