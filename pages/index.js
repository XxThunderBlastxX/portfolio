import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import HomePage from "../components/homePage";
import AboutMe from "../components/AboutMe";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Koustav Mondal</title>
                <meta name="description" content="Portfolio Made with ❤ by Koustav"/>
                <link rel="icon" href="/favicon/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
            </Head>
            {/*Navigation Bar*/}
            <NavBar/>
            {/*Parallax Home Screen*/}
            <HomePage/>
            {/*About me */}
            <AboutMe/>


        </div>
    )
}
