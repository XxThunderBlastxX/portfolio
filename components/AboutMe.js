import React from 'react';

function AboutMe() {
    return (
        <section className={"w-full h-screen relative flex justify-center items-center"}>
            <div className={"flex justify-center items- w-9/12 "}>
                <div className={"image w-8/12 h-64 m-5 max-w-40 relative"}>
                    <img src={"/images/personal_pic.jpg"} alt={"koustav_pic"}
                         className={"w-full h-full object-cover absolute"}/>
                    <div className={"absolute overlay w-full h-full"}/>
                </div>
                <div className={"w-3/12"}/>
                {/*Me, My self and I */}
                <div className={"flex-col"}>
                    <div className={"bounce__text bottom-1/2 text-6xl font-NovoMono py-5"}>
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
                    <p className={"font-NovoMono text-xl"}>
                        Hello👋, Let me Introduce myself, I am <span
                        className={"text-[#5CFFA0FF]"}>Koustav Mondal</span>. Currently I
                        am a student of 2nd Semester
                        at <span className={"text-[#5CFFA0FF]"}>Amity University, Kolkata</span> pursuing
                        <span className={"text-[#5CFFA0FF]"}> B.Tech in Computer Science.</span>
                        <br/>
                        <br/>
                        I have started learning coding when I was in Class 11 of my School. My first programming
                        language that I learned was C++. Thereafter I got interest in Coding in solving problems via
                        code.
                        <br/>
                        <br/>
                        Currently, I am Working as a <span
                        className={"text-[#5CFFA0FF]"}>Flutter Developer</span> in PhitNest & Beyond.
                        <br/>
                        <br/>
                        {/*Here is a list of the technologies that I'm familiar with!*/}
                        {/*<ul>*/}
                        {/*    <li>HTML</li>*/}
                        {/*    <li>CSS</li>*/}
                        {/*    <li>TailwindCSS</li>*/}
                        {/*    <li>MaterialUI</li>*/}
                        {/*    <li>Flutter</li>*/}
                        {/*</ul>*/}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;