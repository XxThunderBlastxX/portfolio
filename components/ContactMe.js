import React from 'react';
import Link from "next/link";

// import {InboxInIcon} from '@heroicons/react/'

function ContactMe() {
    return (
        <section id="contact-me" className={"relative justify-center items-center h-screen flex contact font-NovoMono"}>
            {/*<div className={"bounce__text bottom-1/2 text-6xl font-NovoMono pb-8"}>*/}
            {/*    <div className={"font-black"}>C</div>*/}
            {/*    <div className={"font-black"}>o</div>*/}
            {/*    <div>n</div>*/}
            {/*    <div>t</div>*/}
            {/*    <div>a</div>*/}
            {/*    <div>c</div>*/}
            {/*    <div>t</div>*/}
            {/*    <div className={"w-3.5"}/>*/}
            {/*    <div>M</div>*/}
            {/*    <div>e</div>*/}
            {/*</div>*/}
            <div className={"container__css"}>
                <div className={"contact-info"}>
                    <div>
                        <h2 className={"font-NovoMono"}>Contact Info</h2>
                        <ul className={"info"}>
                            <li>
                                <span><img src={'/images/icons/location.svg'} alt={'Inbox'}
                                           className={"inbox-icon"}/></span>
                                <span><Link
                                    href={"https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.6607738,88.2555317,10.75z/data=!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895"}>Kolkata, West Bengal</Link><br/><Link
                                    href={"https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.6607738,88.2555317,10.75z/data=!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895"}>India</Link></span>
                            </li>
                            <li>
                                <span><img src={'/images/icons/IconIn.svg'} alt={'Inbox'}/></span>
                                <span><Link
                                    href={"mailto:koustavmondal55@gmail.com"}>koustavmondal55@gmail.com</Link></span>
                            </li>
                        </ul>
                        <ul className={'info'}>
                            <li>
                                <span><img src={'/images/icons/Github.svg'} alt={'Inbox'}/></span>
                                <span><Link
                                    href={"https://github.com/xXThunderBlastxX"}>github.com/xXThunderBlastxX</Link></span>
                            </li>
                            <li>
                                <span><img src={'/images/icons/linkedin.svg'} alt={'Inbox'}/></span>
                                <span><Link
                                    href={"https://www.linkedin.com/in/koustav-mondal/"}>linkedin.com/in/koustav-mondal</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"contact-form"}>
                    <h2> Send Me Message</h2>
                    <div className={'form-box'}>
                        <div className={"input-box w50"}>
                            <input type={"text"} required={true}/>
                            <span>First Name</span>
                        </div>
                        <div className={"input-box w50"}>
                            <input type={"text"} required={true}/>
                            <span>Last Name</span>
                        </div>
                        <div className={"input-box w50"}>
                            <input type={"text"} required={true}/>
                            <span>Email Address</span>
                        </div>
                        <div className={"input-box w50"}>
                            <input type={"text"} required={true}/>
                            <span>Subject</span>
                        </div>
                        <div className={"input-box w100"}>
                            <textarea required={true}/>
                            <span>Message</span>
                        </div>
                        <div className={" input-box w100 "}>
                            <input className={'rounded-lg hover:shadow-2xl'} type={"submit"} value={'Send'}
                                   required={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;