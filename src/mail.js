/* eslint no-console: 0 */

'use strict';

const nodemailer = require('nodemailer');

export async function main() {
  // Create a SMTP transporter object
  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'windows',
    logger: false,
  });

  // Message object
  let message = {
    from: 'Instgram <fortestapis1@gmail.com>',

    // Comma separated list of recipients
    to: 'Muath <moathaza@gmail.com>',
    bcc: 'andris@ethereal.email',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔',

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html:
      '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
      '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

    // An array of attachments
    attachments: [
      // String attachment
      {
        filename: '',
        content: 'Some notes about this e-mail',
        contentType: 'text/plain', // optional, would be detected from the filename
      },

      // Binary Buffer attachment
      {
        filename: 'image.png',
        content: Buffer.from(
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
            '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
            'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
          'base64'
        ),

        cid: 'moathaza@gmail.com', // should be as unique as possible
      },

      // File Stream attachment
      {
        filename: 'nyan cat ✔.gif',
        path: __dirname + '/assets/nyan.gif',
        cid: 'moathaza@gmail.com', // should be as unique as possible
      },
    ],
  };

  let info = await transporter.sendMail(message);
  console.log('Message sent successfully as %s', info.messageId);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
