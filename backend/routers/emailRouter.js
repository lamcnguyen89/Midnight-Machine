// Source: https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app
// Source for explaining express responses: https://expressjs.com/en/api.html#res.render

//=============================================
// DEPENDENCIES
// include the path module to allow the JS file to move to the correct path to the specified file
//=============================================

import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

//=============================================
// ROUTING
//=============================================

const emailRouter = express.Router();

    // POST- for sending form data that the user inputs in the contact form to gmail
    emailRouter.post("/send", function(req,res) {

        
        // Create the SMTP server for Gmail
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS
                }
            })

        // Specify what the email will look like
        const mailOpts = {
            from: req.body.email,
            to: GMAIL_USER,
            subject: 'Message from the Midnight Machine',
            text: 
`Name:${req.body.name} 
Email Address:(${req.body.email})

Message: 
${req.body.message}`
                }

        // Attempt to send the email
        smtpTrans.sendMail(mailOpts, (error, response) => {
            if (err) {
                res.json({
                    status: 'fail'
                })
            }
            else {
                res.json({
                    status: 'sucess'
                })
            }
        });

    });

export default emailRouter;



  
