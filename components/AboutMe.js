import React from 'react';

function AboutMe() {
    return (
        <section className={"w-full h-screen relative"}>
            <div className={"flex "}>
                <img src={"/images/personal_pic.jpg"} alt={"koustav_pic"}
                     className={"w-40 object-contain rounded-full"}/>
                <div className={"bounce__text bottom-1/2 text-6xl"}>

                    <div className={"font-black"}>M</div>
                    <div className={"font-black"}>e</div>
                    <div>,</div>
                    <div className={"w-3.5"}/>
                    <div>M</div>
                    <div>y</div>
                    <div>s</div>
                    <div>e</div>
                    <div>l</div>
                    <div>f</div>
                    <div className={"w-3.5"}/>
                    <div>&</div>
                    <div className={"w-3.5"}/>
                    <div>I</div>
                    <div className={"w-3.5"}/>


                </div>
            </div>

        </section>
    );
}

export default AboutMe;