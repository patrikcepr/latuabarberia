import { Box, Container, Typography } from "@mui/material";
import { Satisfy } from "@next/font/google";

import NavBar from "@/components/NavBar";

import styles from "../styles/Home.module.scss";

const satisfy = Satisfy({ weight: ["400"], subsets: ["latin"] });

const Home = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    <Box my={16} sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            style={satisfy.style}
                            color="primary"
                            textAlign={"center"}
                            className={`${styles["skewed-text"]} ${styles["json-newline"]}`}
                        >
                            {`Jennie's \nBarbershop`}
                        </Typography>
                    </Box>
                </Container>
            </main>
        </>
    );
};

export default Home;
