import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { MouseEvent, useState } from "react";

// import Text from "@/cs.json";
// import logo from "../../../public/assets/images/logo.png";

const pages = [
    { name: "O nás", link: "#aboutus" },
    { name: "Ceník", link: "#pricelist" },
    { name: "Galerie", link: "#gallery" },
    { name: "Kontakt", link: "#contact" },
];

const NavBar = () => {
    // const theme = useTheme();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar component="nav" position="fixed">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <div>
                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#aboutus"
                            sx={{
                                mr: 2,
                                px: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "Roboto",
                                fontWeight: 400,
                                textDecoration: "none",
                            }}
                        >
                            {Text.title}
                        </Typography> */}
                    </div>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color="#fff" style={{ textDecoration: "none" }}>
                                        <a href={page.link}>{page.name}</a>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <div>
                        {/* <div className={styles["logo-frame"]}>
                            <Image src={logo} alt="jannies barber logo" />
                        </div> */}
                        {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            color="#fff"
                            sx={{
                                mr: 2,
                                px: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "Satisfy",
                                fontWeight: 400,
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            {Text.title}
                        </Typography> */}
                    </div>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} justifyContent="flex-end" color="#fff">
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: "block", textTransform: "none" }}
                            >
                                <a href={page.link}>{page.name}</a>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
