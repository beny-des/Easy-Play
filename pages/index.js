import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Glider from "../components/glide/Glider";
import { useEffect, useState } from "react";
import HomeContext from "../context/HomeContext";
import  Products  from "../components/products/Products";
import { useFunctions } from "../context/FunctionsContext";

export default function Home() {
  const {products}=useFunctions();

  // const [category, setCategory] = useState([]);
  // const [products, setProducts] = useState([]);


  return (
    <div className={styles.container}>
      <HomeContext.Provider
       value={{
        products: products,
       

      }}
      >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <Glider />
      </section>
          <Products/>
     
     
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </HomeContext.Provider>
    </div>
  );
}
