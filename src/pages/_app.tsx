import "../styles/globals.scss";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";

import Text from "@/cs.json";

import darkTheme from "../styles/theme/darkTheme";
import createEmotionCache from "../utility/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface MuiAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MuiAppProps) => {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>{Text.title}</title>
                <meta name="description" content={Text.description} />
                <meta name="ogTitle" content={Text.title} />
                <meta name="ogDescription" content={Text.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="ogImage" content="/assets/images/IMG_5726.jpg" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};

export default App;
