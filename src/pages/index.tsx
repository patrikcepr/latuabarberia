/* eslint-disable max-len */
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import NavBar from "@/components/NavBar";
import Text from "@/cs.json";
import galImg02 from "@/images/IMG_5620_thumb.png";
import galImg03 from "@/images/IMG_5629_thumb.png";
import galImg06 from "@/images/IMG_5633_thumb.png";
import galImg04 from "@/images/IMG_5634_thumb.png";
import galImg01 from "@/images/IMG_5639_thumb.png";
import galImg05 from "@/images/IMG_5648_thumb.png";
import { priceList } from "@/priceList";

import logo from "../../public/assets/images/logo.png";
import styles from "../styles/Home.module.scss";

const galleryList = [
    { url: galImg01, alt: "gallery one" },
    { url: galImg02, alt: "gallery two" },
    { url: galImg03, alt: "gallery three" },
    { url: galImg04, alt: "gallery four" },
    { url: galImg05, alt: "gallery five" },
    { url: galImg06, alt: "gallery six" },
];

const Home = () => {
    const router = useRouter();

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container disableGutters maxWidth={false}>
                    <Box
                        id="aboutus"
                        component="section"
                        p={"8rem 0 4rem"}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        className={styles["aboutus-container"]}
                    >
                        <Grid item container xs={12} lg={8} sx={{ height: "100%", gap: "4rem" }}>
                            <Grid item xs={12} textAlign="center">
                                <div className={styles["logo-frame"]}>
                                    <Image src={logo} alt="Jannie's Barbershop logo" />
                                </div>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    display: { xs: "none", lg: "grid", xl: "grid" },
                                    padding: "2rem",
                                    gap: "4rem",
                                }}
                                container
                                rowGap={3}
                                className={styles["aboutus-text"]}
                            >
                                <Typography variant="h5" component="h1" color="white" textAlign="center">
                                    {Text.aboutUs.aboutPointOne}
                                </Typography>
                                <Typography variant="h6" component="p" color="white" textAlign="center">
                                    {Text.aboutUs.aboutPointTwo}
                                </Typography>
                                <Typography variant="h6" component="p" color="white" textAlign="center">
                                    {Text.aboutUs.aboutPointThree}
                                </Typography>
                                <Typography variant="h6" component="p" color="white" textAlign="center">
                                    {Text.aboutUs.aboutPointFour}
                                </Typography>
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
                        <Container disableGutters>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr",
                                    gap: "4rem",
                                }}
                            >
                                <Typography variant="h5" component="h1" color="primary" textAlign="center">
                                    {Text.aboutUs.aboutPointOne}
                                </Typography>
                                <Typography variant="subtitle1" component="p" color="primary" textAlign="center">
                                    {Text.aboutUs.aboutPointTwo}
                                </Typography>
                                <Typography variant="subtitle1" component="p" color="primary" textAlign="center">
                                    {Text.aboutUs.aboutPointThree}
                                </Typography>
                                <Typography variant="subtitle1" component="p" color="primary" textAlign="center">
                                    {Text.aboutUs.aboutPointFour}
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                    <Box
                        id="pricelist"
                        component="section"
                        sx={{
                            padding: { xs: "8rem 0" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        className={styles["pricelist-container"]}
                    >
                        <Container maxWidth="lg" disableGutters>
                            <Typography variant="h4" component="h2" textAlign="center" letterSpacing={5}>
                                {Text.priceList.title}
                            </Typography>
                            <Box
                                sx={{
                                    padding: "8rem 2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2rem",
                                }}
                            >
                                {priceList.map((item, i) => {
                                    return (
                                        <Grid key={i} container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h6" component="p">
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={8} lg={8}>
                                                <Typography variant="subtitle1" component="p" color={"#bbb"}>
                                                    {item.content}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={5} sm={8} sx={{ display: { sm: "none" } }} />
                                            <Grid item xs={3} sm={2} lg={2}>
                                                <Typography textAlign={"right"}>{item.price}</Typography>
                                            </Grid>
                                            <Grid item xs={4} sm={2} lg={2}>
                                                <Typography textAlign={"right"}>{item.time}</Typography>
                                            </Grid>
                                        </Grid>
                                    );
                                })}
                                <Typography variant="h6" component="p" sx={{ padding: "2rem 0" }}>
                                    {Text.priceList.beverage}
                                </Typography>
                                <Grid textAlign="center">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                        endIcon={<SendIcon />}
                                        sx={{ width: "fit-content" }}
                                        onClick={() => router.push("https://janniesbarber.snippet.myfox.cz")}
                                    >
                                        Rezervace online
                                    </Button>
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                    <Box
                        id="gallery"
                        component="section"
                        sx={{
                            padding: { xs: "8rem 0" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        className={styles["gallery-container"]}
                    >
                        <Container maxWidth="lg" disableGutters>
                            <Typography variant="h4" component="h2" textAlign="center" letterSpacing={5}>
                                {Text.gallery.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" },
                                    gap: "4rem",
                                    padding: "8rem 2rem",
                                }}
                            >
                                {galleryList.map((img, i) => {
                                    return (
                                        <Box
                                            key={i}
                                            sx={{
                                                justifySelf: "center",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <Image src={img.url} alt={img.alt} />
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Container>
                    </Box>
                    <Box
                        id="contact"
                        component="section"
                        sx={{
                            padding: { xs: "8rem 0" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        className={styles["contact-container"]}
                    >
                        <Container maxWidth="lg" sx={{ zIndex: 2 }}>
                            <Typography variant="h4" component="h2" textAlign="center" letterSpacing={5}>
                                {Text.contact.title}
                            </Typography>
                            <Grid
                                container
                                spacing={{ xs: 6 }}
                                columns={{ xs: 4, lg: 12 }}
                                alignContent={{ xs: "flex-end" }}
                                sx={{ padding: "6rem 0" }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    lg={6}
                                    sx={{ display: "grid", gap: "0.5rem", textAlign: { xs: "center", lg: "left" } }}
                                >
                                    <Typography variant="h5" component={"h3"}>
                                        {Text.contact.openingHours.title}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        component="h4"
                                        sx={{ whiteSpace: "pre-line", verticalAlign: "bottom", lineHeight: "2.25rem" }}
                                    >
                                        {Text.contact.openingHours.hours}
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    lg={6}
                                    sx={{
                                        display: "grid",
                                        gap: "0.5rem",
                                        textAlign: { xs: "center", lg: "right" },
                                    }}
                                >
                                    <Typography variant="h5">{Text.contact.location.title}</Typography>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{ whiteSpace: "pre-line", verticalAlign: "bottom", lineHeight: "2.25rem" }}
                                    >
                                        {Text.contact.location.address}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={{ xs: 1, lg: 2 }} columns={12}>
                                <Grid item xs={12} lg={5} sx={{ textAlign: { xs: "center", lg: "right" } }}>
                                    <Typography component={"span"}>
                                        <Link href={`mailto:${Text.contact.email}`}>e-mail: {Text.contact.email}</Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs sx={{ textAlign: { xs: "center", lg: "center" } }}>
                                    <Link href={`tel:${Text.contact.tel.replace(/\s/g, "")}`}>
                                        <Typography component={"span"}>tel.: {Text.contact.tel}</Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} lg={5} sx={{ textAlign: { xs: "center", lg: "left" } }}>
                                    <Typography component={"span"}>ičo: {Text.contact.ico}</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Container>
            </main>
        </>
    );
};

export default Home;
