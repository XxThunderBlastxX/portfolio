import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import HomePage from "../components/homePage";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <div>
            <style type="text/css">
                
            </style>
            <Head>
                <title>Koustav Mondal</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="Portfolio Made with ❤ by Koustav"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="publisher" content="Koustav Mondal"/>
                <meta name="author" content="Koustav Mondal"/>

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
            {/*Contact Me*/}
            <ContactMe/>
            {/*Footer*/}
            <Footer/>


        </div>
    )
}
