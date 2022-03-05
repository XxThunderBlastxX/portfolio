import nodemailer from 'nodemailer'
import {Body} from "next/dist/server/web/spec-compliant/body";

require('dotenv').config()

const Querytemplate = (body) => `<h2>Message from Koustav's Porfolio Contact Form</h2>
  \n <h4>From ${body.name} regarding ${body.subject}</h4>
  \n
  \n His/Her Message : - <b>${body.message}</b>`

let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD,
    },
})


export default function handler(req, res) {

    let mailOptions = {
        from: `Portfolio Contact Form < ${process.env.FROMEMAIL}>`,
        to: `${process.env.RECEIVEEMAIL}`,
        subject: `Message from ${req.body.name}`,
        replyTo: `${req.body.email}`,
        html: Querytemplate(req.body),
    }


    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
            res.send('I am unable to send your email')
        } else {
            return res.status(200).send('your mail was send')
        }
    })

}
