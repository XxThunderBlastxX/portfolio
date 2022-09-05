import React from 'react';
import Link from "next/link";

const tech = ["Flutter", "Dart", "Go", "Go Fiber", "MongoDB", "Redis", "C/C++", "HTML", "CSS", "TailwindCSS", "Git", "Docker", "NextJS", "React"]

function AboutMe() {
    return (
        <section id={"about-me"} className={"w-full h-screen relative flex justify-center items-center"}>
            <div className={"flex justify-center items- w-9/12 "}>
                <div className={"image w-8/12 h-64 m-5 max-w-40 relative"}>
                    <img src={"/images/personal_pic.jpeg"} alt={"Koustav Mondal"}
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
                    <p className={"text-xl max-w-max"}>
                        Hello👋, Let me Introduce myself, I am <span
                        className={"text-[#5CFFA0FF]"}>Koustav Mondal</span>. I am a self taught full stack developer
                        expecting to complete my
                        <span className={"text-[#5CFFA0FF]"}> B.Tech in Computer Science</span> from <span
                        className={"text-[#5CFFA0FF]"}> Amity University,Kolkata </span>
                        by 2025. I am particularly interested in developing mobile apps in flutter and backend
                        services in Go.
                        <br/>
                        <br/>
                        From my childhood I have been passionate about any kind of technology and computer. I always
                        tried to explore the technology and try to understand how things work, with this passion I
                        started learning coding. Although I spent most of my time in programming and studies, I also
                        enjoy listening music and playing online games like Valorant and Minecraft with friends.
                        <br/>
                        <br/>
                        Some of the technologies I'm familiar with !!
                        <div className={'flex space-x-28 text-[#5CFFA0FF] familiar-tech'}>
                            <ul className={'grid grid-cols-3 grid-rows-5 gap-x-20 gap-y-1'}>
                                {tech.map((tech) => {
                                    return (
                                        <li className={''}>
                                            <div className={'flex '}>
                                                <svg className={'mt-1 text-[#5CFFA0FF]'}
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     aria-hidden="true" role="img" width="1em" height="1em"
                                                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                                    <path fill="currentColor"
                                                          d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                                </svg>
                                                <span>{tech}</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <br/>
                        Currently, I am working as a <span
                        className={"text-[#5CFFA0FF]"}>Flutter Developer</span> in PhitNest<br/>
                        <br/>
                        <button
                            className={"transition duration-150 ease-out hover:ease-in bg-transparent hover:bg-[#8229B1] text-[#5CFFA0FF] font-semibold hover:text-white py-2 px-4 border border-[#5CFFA0FF] hover:border-transparent rounded hover:shadow-2xl"}>
                            <Link href="/resume/Koustav_Resume.pdf" download={"Koustav_Resume"}>Download
                                CV</Link>
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;