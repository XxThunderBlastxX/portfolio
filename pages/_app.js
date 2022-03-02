import '../styles/globals.css'
import '../styles/main.css'
import Script from "next/script";

function MyApp({Component, pageProps}) {
    return <>
        <Component {...pageProps} />
        <Script src={"https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"}
                strategy={"beforeInteractive"}/>
    </>
}

export default MyApp
