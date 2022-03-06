import '../styles/globals.css'
import '../styles/bounce.css'
import '../styles/aboutMe.css'
import '../styles/navBar.css'
import '../styles/contactMe.css'
import Script from "next/script";
import LoadingScreen from "../components/LoadingScreen";
import {useState, useEffect} from "react";

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            return setLoading(false)
        }, 2800)
    }, []);

    return <>
        <Script src={"https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"}
                strategy={"beforeInteractive"}/>
        {loading ? <LoadingScreen/> : <Component {...pageProps} />}

    </>

}

export default MyApp
