import React from 'react';
import Link from "next/link";

function AboutMe() {
    return (
        <section id={"about-me"} className={"w-full h-screen relative flex justify-center items-center"}>
            <div className={"flex justify-center items- w-9/12 "}>
                <div className={"image w-8/12 h-64 m-5 max-w-40 relative"}>
                    <img src={"/images/personal_pic.jpeg"} alt={"koustav_pic"}
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
                        language that I learned was C++. Thereafter I developed my interest in Coding in solving
                        problems via
                        code.
                        <br/>
                        <br/>
                        Some of the technologies I'm familiar with!!
                        <div className={'flex space-x-28 text-[#5CFFA0FF] familiar-tech'}>
                            <ul>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>Flutter</span>
                                </li>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>Dart</span></li>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>HTML</span>
                                </li>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>CSS</span>
                                </li>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>React</span>
                                </li>

                            </ul>
                            <ul>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>TailwindCSS</span>
                                </li>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>Git</span>
                                </li>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>Docker</span>
                                </li>
                                <li className={'flex'}>
                                    <svg className={'mt-1 text-[#5CFFA0FF]'} xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" role="img" width="1em" height="1em"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"/>
                                    </svg>
                                    <span>NextJS</span>
                                </li>
                            </ul>
                        </div>

                        <br/>

                        Currently, I am Working as a <span
                        className={"text-[#5CFFA0FF]"}>Flutter Developer</span> in PhitNest & Beyond.
                        <br/>
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