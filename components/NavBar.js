import React, {useEffect, useState} from 'react'

function NavBar() {
    const [colorChange, setColorChange] = useState(false);
    useEffect(function mount() {
        function onScroll() {
            if (window.scrollY >= 150) {
                setColorChange(true);
            } else {
                setColorChange(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });
    return (
        <div
            className={`rounded-b-3xl px-2 py-3  fixed flex flex-wrap z-40 top-0 justify-between w-full h-18 nav ${colorChange && "nav__changeColor"}`}>
            <img src={"/images/logo.png"} draggable="false" alt={"logo"}
                 className={"object-contain select-none left-9 ml-2 rounded-full border-2 border-gray-300"}
                 width="85"
                 height="85"/>
            <div
                className={"flex justify-between select-none font-NovoMono font-black text-xl text-xl mt-4 tracking-widest"}>
                <div className={"px-5 "}><a href={'#home'}>&lt;Home/&gt; </a></div>
                <div className={"px-5 "}><a href={'#about-me'}>&lt;About Me/&gt; </a></div>
                <div className={"px-5 "}><a href={'#projects'}> &lt;Projects/&gt; </a></div>
                <div className={"px-5 pr-40 "}><a href={'#contact-me'}> &lt;Contact Me/&gt; </a></div>
            </div>
        </div>
    )
}

export default NavBar
