// Load env variables
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

// Bring in sendgrid mail and set your API Key
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Configure message
const msg = {
  to: 'test@example.com',
  from: process.env.FROM_EMAIL,
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

// Send email
sgMail.send(msg);
console.log(`Email sent to ${msg.to}`);
