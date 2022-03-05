import React, {useState} from 'react';
import Link from "next/link";
import axios from 'axios';

function ContactMe() {
    const [disable, setDisable] = useState(false)
    const [input, setInput] = useState({
        fName: '',
        lName: '',
        subject: '',
        email: '',
        message: ''
    })

    function changeInput(event) {
        const {
            target: {
                name, value
            }
        } = event
        setInput(old => {
            return {
                ...old,
                [name]: value
            }
        })

    }

    function sendMessage() {
        setDisable(true)

        let data = {
            ...input, name: input.fName.trim() + " " + input.lName.trim()
        }

        let config = {
            method: 'post',
            url: '/api/send_message',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section id="contact-me" className={"relative justify-center items-center h-screen flex contact font-NovoMono"}>
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
                    <div
                        className={"bounce__text bottom-1/2 text-4xl font-NovoMono py-5 text-[#5f0886] "}>
                        <div className={"contact-form-heading"}>S</div>
                        <div className={"contact-form-heading"}>e</div>
                        <div className={"contact-form-heading"}>n</div>
                        <div className={"contact-form-heading"}>d</div>
                        <div className={"w-3.5"}/>
                        <div className={"contact-form-heading"}>M</div>
                        <div className={"contact-form-heading"}>e</div>
                        <div className={"w-3.5"}/>
                        <div className={"contact-form-heading"}>M</div>
                        <div className={"contact-form-heading"}>e</div>
                        <div className={"contact-form-heading"}>s</div>
                        <div className={"contact-form-heading"}>s</div>
                        <div className={"contact-form-heading"}>a</div>
                        <div className={"contact-form-heading"}>g</div>
                        <div className={"contact-form-heading"}>e</div>
                    </div>
                    <div className={'form-box'}>
                        <div className={"input-box w50 "}>
                            <input type={"text"} value={input.fName} onChange={changeInput} required={true}
                                   name={'fName'}/>
                            <span>First Name</span>
                        </div>
                        <div className={"input-box w50"}>
                            <input type={"text"} value={input.lName} onChange={changeInput} required={true}
                                   name={'lName'}/>
                            <span>Last Name</span>
                        </div>
                        <div className={"input-box w50"}>
                            <input type={"text"} value={input.email} onChange={changeInput} required={true}
                                   name={'email'}/>
                            <span>Email Address</span>
                        </div>
                        <div className={"input-box w50"}>
                            <input type={"text"} value={input.subject} onChange={changeInput} required={true}
                                   name={'subject'}/>
                            <span>Subject</span>
                        </div>
                        <div className={"input-box w100"}>
                            <textarea value={input.message} onChange={changeInput} required={true} name={'message'}/>
                            <span>Message</span>
                        </div>
                        <div className={" input-box w100 "}>
                            <input className={'rounded-lg hover:shadow-2xl'} type={"submit"} value={'Send'}
                                   required={true} onClick={sendMessage} disabled={disable}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;