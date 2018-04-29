const nodemailer = require('nodemailer');
const fs = require('fs')


var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
          user: 'xxx@gmail.com',
          pass: 'xxx'
      }
  });

fs.readFile('dist/deploy/index.html', "utf-8", (err, data) => {
   const mailOptions = {
      from: 'tomomi oki', // sender address
      to: 'xxx@gmail.com', // list of receivers
      subject: 'Tomomichan test', // Subject line
      html: data// plain text body
    };
   
     transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   });
})