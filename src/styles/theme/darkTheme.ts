import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "@next/font/google";

export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff",
            // main: "#cd7f32",
            dark: "#90500d",
        },
        secondary: {
            main: "#053e69",
            dark: "#002038",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default darkTheme;
