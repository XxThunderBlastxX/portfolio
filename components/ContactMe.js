import React from 'react';

function ContactMe() {
    return (
        <section className={"w-full h-screen py-40 px-10 grid-cols-1"}>
            <div className={"bounce__text bottom-1/2 text-6xl font-NovoMono pb-8"}>
                <div className={"font-black"}>C</div>
                <div className={"font-black"}>o</div>
                <div>n</div>
                <div>t</div>
                <div>a</div>
                <div>c</div>
                <div>t</div>
                <div className={"w-3.5"}/>
                <div>M</div>
                <div>e</div>
            </div>
            <div className={"w-full border-2 h-full rounded-xl "}>
                <div>

                </div>
                <input type={"text"} placeholder={"Name"}></input>

            </div>
        </section>
    );
}

export default ContactMe;