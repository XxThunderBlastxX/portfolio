import React from 'react';

function LoadingScreen() {
    return (
        <section className={'h-screen w-full items-center justify-center flex bg-black'}>
            <video
                autoPlay={true} loop={true} muted={true} className={'w-48 h-48'}>
                <source src={'/loader/loader.mp4'} type={'video/mp4'}/>
            </video>
        </section>
    );
}

export default LoadingScreen;