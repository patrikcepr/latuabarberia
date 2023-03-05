import "../styles/globals.scss";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";

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
                <title>Jennie&apos;s barbershop</title>
                <meta name="description" content="Jennie's barbershop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
