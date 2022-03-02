import React, {useEffect} from 'react';


function HomePage(props) {
    useEffect(() => {
        let scene = document.getElementById('scene');
        let parallaxInstance = new window.Parallax(scene);
    }, []);

    return (
        <>
            <section id={"scene"} data-friction-y="0.015" data-friction-x="0.0205" data-scalar-y={"8"}
                     className={"parallax w-full h-screen relative"}>
                <div data-depth="0.4" className={"sky w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.4" className={"mountain2 w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.3" className={"tree4 w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.7"
                     className={"mountain1 w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.3" className={"tree3 w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.3" className={"tree2 w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.7" className={"tree1 w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.8" className={"moon w-full h-screen absolute left-0 top-0"}/>
                <div
                    data-depth="0.5" data-scalar-x="10"
                    className={"home w-full h-screen absolute left-0 top-0 object-contain"}
                    style={{left: "-7% !important", top: "-7vh !important"}}/>
                <div data-depth="0.5" className={"glowFlare  w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.5" className={"glow  w-full h-screen absolute left-0 top-0"}/>


            </section>
            <div className={"absolute top-1/4 left-0 w-2/5 bg-black/[0.3] px-6 py-5 rounded-r-lg"}>
                <h1 className={"text-5xl "}><span className={"font-bold"}>Hi,</span> I am Koustav
                    Mondal</h1>
                <p className={"my-5 text-lg"}>
                    A passionate Student Developer from India, love to code and
                    develop new stuffs and contribute to Opensource Project.
                </p>
            </div>


            <section style={{height: '100vh'}}/>
        </>


    );
}

export default HomePage;