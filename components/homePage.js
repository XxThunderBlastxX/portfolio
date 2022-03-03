import React, {useEffect} from 'react';


function HomePage(props) {
    useEffect(() => {
        let scene = document.getElementById('scene');
        let parallaxInstance = new window.Parallax(scene);

        let box = document.getElementById('box');
        new window.Parallax(box);
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
                <div data-depth="0.5" className={"glowFlare w-full h-screen absolute left-0 top-0"}/>
                <div data-depth="0.5" className={"glow  w-full h-screen absolute left-0 top-0"}/>
                {/*TODO:- Need to fade the box at end*/}
                <div data-depth="0.5" className={"h-16 absolute fade"}/>


            </section>
            <div className={"absolute top-1/4 left-0 w-2/5 bg-black/[0.3] px-6 py-5 rounded-r-lg"}>
                <div className={"text-5xl font-NovoMono flex items-center"}>
                    <div className={"bounce__text"}>
                        <button className={"font-black"}>H</button>
                        <button className={"font-black"}>i</button>
                        <button>,</button>
                        <button>I</button>
                        <div className={"w-3.5"}/>
                        <button>a</button>
                        <button>m</button>
                        <div className={"w-3.5"}/>
                        <br/>
                        {/* Koustav */}
                        <button>K</button>
                        <button>o</button>
                        <button>u</button>
                        <button>s</button>
                        <button>t</button>
                        <button>a</button>
                        <button>v</button>
                        <div className={"w-3.5"}/>
                        {/* Mondal */}
                        <button>M</button>
                        <button>o</button>
                        <button>n</button>
                        <button>d</button>
                        <button>a</button>
                        <button>l</button>
                    </div>


                </div>
                <p className={"my-5 text-lg font-NovoMono"}>
                    A passionate Student Developer from India, love to code and
                    develop new stuffs and contribute to Opensource Project.
                </p>
            </div>
            <div id={"box"} className={"relative"} data-friction-y="0.015" data-friction-x="0.0205" data-scalar-y={"8"}>
            </div>
        </>


    );
}

export default HomePage;