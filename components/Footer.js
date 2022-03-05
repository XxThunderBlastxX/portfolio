import React from 'react';

function Footer(props) {
    return (
        <div
            className={"flex-col border-[#573E88] border-t-2 flex text-mg font-NovoMono items-center justify-center h-28 w-full bg-[#381369]"}>
            <img className={'w-12 rounded-lg'} src={'/images/logo.png'} alt={'logo'}/>
            <span>Designed and Developed with ❤ By Koustav Mondal ©2022</span>
        </div>
    );
}

export default Footer;