const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(( change ) => {
  const dataAfterChange = change.after.val();
  // Only send email for new messages.
  if (change.before.val() || !dataAfterChange.name) {
    return;
  }
  
  const val = dataAfterChange;

  const mailOptions = {
    to: val.email,
    subject: 'Mensaje Enviado desde Muebles san pedro web',
    text: `Mensaje. \n 
          Asunto: ${val.subject} \n 
          remitente: ${val.emailContact}\n
          Enviado por: ${val.name} \n
          Mansaje: ${val.message}`
  };
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Mail sent'); //The log will be shown in Firebase.
  });
});
