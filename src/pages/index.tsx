import Head from "next/head";

// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>La tua barberia</title>
                <meta name="description" content="La tua barberia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}></main>
        </>
    );
}
