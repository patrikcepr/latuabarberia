import { Typography } from "@mui/material";
import { Satisfy } from "@next/font/google";
import Head from "next/head";

import styles from "@/styles/Home.module.scss";

// const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const satisfy = Satisfy({ weight: ["400"], subsets: ["latin"] });

const Home = () => {
    return (
        <>
            <Head>
                <title>La tua barberia</title>
                <meta name="description" content="La tua barberia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Typography variant="h1" style={satisfy.style}>
                    La tua Barberia
                </Typography>
            </main>
        </>
    );
};

export default Home;
