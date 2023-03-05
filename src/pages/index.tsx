/* eslint-disable max-len */
import { Box, Container, Grid, Typography } from "@mui/material";
import { Satisfy } from "@next/font/google";
import Image from "next/image";

import NavBar from "@/components/NavBar";
import Text from "@/cs.json";
import galImg02 from "@/images/IMG_5620.jpg";
import galImg03 from "@/images/IMG_5629.jpg";
import galImg06 from "@/images/IMG_5633.jpg";
import galImg04 from "@/images/IMG_5634.jpg";
import galImg01 from "@/images/IMG_5639.jpg";
import galImg05 from "@/images/IMG_5648.jpg";
import aboutImage from "@/images/IMG_5726.jpg";
import { priceList } from "@/priceList";

import styles from "../styles/Home.module.scss";

const satisfy = Satisfy({ weight: ["400"], subsets: ["latin"] });

const galleryList = [
    { url: galImg01, alt: "gallery one" },
    { url: galImg02, alt: "gallery two" },
    { url: galImg03, alt: "gallery three" },
    { url: galImg04, alt: "gallery four" },
    { url: galImg05, alt: "gallery five" },
    { url: galImg06, alt: "gallery six" },
];

const Home = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container disableGutters maxWidth={false}>
                    <Box
                        component="section"
                        py={"4rem"}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        className={styles["aboutus-container"]}
                    >
                        <Grid container spacing={3} justifyContent={"center"}>
                            <Grid item xs={12} lg={4} xl={4}>
                                <Grid item container xs={12} sx={{ height: "100%", paddingLeft: { xl: "4rem" } }}>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant="h2"
                                            component="h1"
                                            style={satisfy.style}
                                            color="primary"
                                            textAlign={"center"}
                                            className={`${styles["jennies-heading"]}`}
                                        >
                                            {Text.title}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        sx={{
                                            display: { xs: "none", lg: "grid", xl: "grid" },
                                            alignSelf: "flex-end",
                                            padding: "2rem",
                                        }}
                                        container
                                        rowGap={3}
                                        className={styles["aboutus-text"]}
                                    >
                                        <Typography variant="subtitle1" component="h3" color="white" textAlign="right">
                                            {Text.aboutUs.aboutPointOne}
                                        </Typography>
                                        <Typography variant="subtitle1" component="h3" color="white" textAlign="right">
                                            {Text.aboutUs.aboutPointTwo}
                                        </Typography>
                                        <Typography variant="subtitle1" component="h3" color="white" textAlign="right">
                                            {Text.aboutUs.aboutPointThree}
                                        </Typography>
                                        <Typography variant="subtitle1" component="h3" color="white" textAlign="right">
                                            {Text.aboutUs.aboutPointFour}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={5}
                                xl={4}
                                sx={{
                                    zIndex: "2",
                                    display: {
                                        xs: "none",
                                        lg: "flex",
                                        xl: "flex",
                                        justifyContent: "flex-end",
                                    },
                                    paddingRight: { xl: "2rem" },
                                }}
                            >
                                <Image
                                    src={aboutImage}
                                    alt="barbershop image"
                                    width={480}
                                    height={640}
                                    className={styles["aboutus-image"]}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        component="section"
                        sx={{
                            display: { xs: "grid", lg: "none" },
                            padding: { xs: "8rem 2rem", md: "8rem 4rem" },
                            background: "linear-gradient(180deg, rgba(5, 62, 105, 0.24) 0%, rgba(5, 62, 105, 0.43) 99.71%)",
                        }}
                    >
                        <Box
                            sx={{
                                display: { xs: "grid" },
                                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                                gap: { xs: "4rem", md: "4rem" },
                            }}
                        >
                            <Typography variant="subtitle1" component="h3" color="primary" textAlign="center">
                                {Text.aboutUs.aboutPointOne}
                            </Typography>
                            <Typography variant="subtitle1" component="h3" color="primary" textAlign="center">
                                {Text.aboutUs.aboutPointTwo}
                            </Typography>
                            <Typography variant="subtitle1" component="h3" color="primary" textAlign="center">
                                {Text.aboutUs.aboutPointThree}
                            </Typography>
                            <Typography variant="subtitle1" component="h3" color="primary" textAlign="center">
                                {Text.aboutUs.aboutPointFour}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        id="priceList"
                        component="section"
                        sx={{
                            padding: { xs: "8rem 2rem", md: "8rem 4rem", lg: "8rem", xl: "8rem 16rem" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        className={styles["pricelist-container"]}
                    >
                        <Typography variant="h4" component="h2" textAlign="center">
                            {Text.priceList.title}
                        </Typography>
                        <Box sx={{ padding: "2rem 0", display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {priceList.map((item, i) => {
                                return (
                                    <Grid key={i} container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h6">{item.name}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8} lg={9}>
                                            <Typography variant="subtitle1" color={"#bbb"}>
                                                {item.content}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={8} sx={{ display: { sm: "none" } }} />
                                        <Grid item xs={3} sm={2} lg={1}>
                                            <Typography textAlign={"right"}>{item.price}</Typography>
                                        </Grid>
                                        <Grid item xs={4} sm={2} lg={2}>
                                            <Typography textAlign={"right"}>{item.time}</Typography>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                            <Typography variant="h6" sx={{ padding: "2rem 0" }}>
                                {Text.priceList.beverage}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        id="gallery"
                        component="section"
                        sx={{
                            padding: { xs: "8rem 2rem", md: "8rem 4rem", lg: "8rem" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        className={styles["gallery-container"]}
                    >
                        <Typography variant="h4" component="h2" textAlign="center">
                            {Text.contact.title}
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gridTemplateRows: "repeat(6, 1fr)",
                                gap: "2rem",
                                padding: "8rem 0",
                            }}
                        >
                            {galleryList.map((img, i) => {
                                return (
                                    <div key={i} className={styles["image-frame"]}>
                                        <Image src={img.url} alt={img.alt} fill />
                                    </div>
                                );
                            })}
                        </Box>
                    </Box>
                </Container>
            </main>
        </>
    );
};

export default Home;
