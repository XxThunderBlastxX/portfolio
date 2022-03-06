import React from 'react';
import {RemoveScrollBar} from 'react-remove-scroll-bar';

function LoadingScreen() {
    return (
        <section
            className={'h-screen w-full items-center justify-center flex bg-black fixed top-0 left-0 z-50 overflow-hidden'}>
            <video
                autoPlay={true} loop={true} muted={true} className={'w-48 h-48'}>
                <source src={'/loader/loader.mp4'} type={'video/mp4'}/>
            </video>
        </section>
    );
}

export default LoadingScreen;