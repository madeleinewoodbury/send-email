const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Set your API Key
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
