import React from 'react';

// Project config data
const proj = [{
    title: "DNS-Lookup",
    desc: " Microservice build with Go to get DNS records for a domain.",
    img: "https://geekflare.com/wp-content/uploads/2022/01/reverse-DNS-look-up-1.png"
}, {
    title: "Chamting-API",
    desc: "An chatting websocket with Authentication build with Fiber Websockets and written in Go for Chamting Windows App.",
    img: "https://img.freepik.com/premium-vector/chatting-design-concept-with-hand-holding-cellphone_7087-798.jpg"
}, {
    title: "Email- Verifier",
    desc: "Microservice build with Go to verify email by checking its all DNS records.",
    img: "https://miro.medium.com/max/960/0*AHzehVlhhBbrKeWm"
}]

function Projects() {
    return (
        <>
            <section id={"projects"} className={'w-screen'}>
                <div className={"bounce__text bottom-1/2 text-6xl font-NovoMono py-5 px-16"}>
                    <div>P</div>
                    <div>r</div>
                    <div>o</div>
                    <div>j</div>
                    <div>e</div>
                    <div>c</div>
                    <div>t</div>
                    <div>s</div>
                    <div className={"w-3.5"}/>
                </div>

                <div
                    className="flex justify-center grid gap-5 md:grid-cols-5 sm:grid-cols-2 px-28 py-10 ">
                    {proj.map((data) => {
                        return (
                            <div className="rounded-lg shadow-lg bg-white max-w-sm h-auto w-60">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" className={"flex"}>
                                    <img className="rounded-t-lg h-36 object-cover w-full"
                                         src={data.img}
                                         alt=""/>
                                </a>
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{data.title}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {data.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Projects;
