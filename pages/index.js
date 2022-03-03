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
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*Navigation Bar*/}
            <NavBar/>
            {/*Parallax Home Screen*/}
            <HomePage/>
            {/*<AboutMe/>*/}


        </div>
    )
}
