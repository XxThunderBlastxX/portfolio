import '../styles/globals.css'
import '../styles/bounce.css'
import '../styles/aboutMe.css'
import '../styles/navBar.css'
import '../styles/contactMe.css'
import Script from "next/script";
import LoadingScreen from "../components/LoadingScreen";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => {
            url !== router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url) => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);
    return <>
        <LoadingScreen loading={loading}/>
        <Component {...pageProps} />
        <Script src={"https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"}
                strategy={"beforeInteractive"}/>
    </>
}

export default MyApp
