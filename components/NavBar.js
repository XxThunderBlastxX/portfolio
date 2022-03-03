import React from 'react'
import Image from 'next/image'

function NavBar() {
    return (
        <div className={"fixed flex flex-wrap z-40 top-0 justify-between w-full h-9 m-3"}>
            <img src={"/images/logo.png"} draggable="false" alt={"logo"}
                 className={"object-contain select-none left-9 ml-2 rounded-full border-2 border-gray-300"}
                 width="85"
                 height="85"/>

            <div
                className={"flex justify-between select-none font-NovoMono font-black text-xl text-lg mt-4 tracking-widest"}>
                <div className={"mx-5 "}> &lt;Home/&gt; </div>
                <div className={"mx-5 "}> &lt;About Me/&gt; </div>
                <div className={"mx-5 "}> &lt;Projects/&gt; </div>
                <div className={"mx-5 mr-96 "}> &lt;Contact Me/&gt; </div>
            </div>

        </div>
    )
}

export default NavBar
