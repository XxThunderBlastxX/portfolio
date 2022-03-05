import React from 'react';


function LoadingScreen(props) {
    return (
        <section className={props.loading ? 'h-screen w-full items-center justify-center flex bg-black' : 'hidden'}>
            <video
                autoPlay={true} loop={true} muted={true}>
                <source src={'/loader/loader.mp4'} type={'/video/mp4'}/>
            </video>
        </section>
    );
}

export default LoadingScreen;