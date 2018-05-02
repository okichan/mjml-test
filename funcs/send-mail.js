const mjmlUtils = require('mjml-utils')
// const nodemailer = require('nodemailer');
const pathToHtmlEmailTemplate = path.join(__dirname, '../public/index.html')
const accessKeyId = 'AWS_IAM_ACCESS_KEY_ID'
const secretAccessKey = 'AWS_IAM_SECRET_ACCESS_KEY'
const region = 'AWS_SES_REGION'
// const fs = require('fs')

// var transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//       user: 'xxx@gmail.com',
//       pass: 'xxx'
//    }
// })

mjmlUtils.sendmail.config({
   fromAddress: 'you@domain.com',
   transport: nodemailer.createTransport(
      sesTransport({
         service: 'gmail',
         auth: {
            user: 'xxx@gmail.com',
            pass: 'xxx'
         }
      })
   )
})

mjmlUtils
   .sendmail({
      to: 'someone@domain.com',
      subject: 'Custom transactional email made easy!',
      text: "If the HTML email doesn't show up, this text should help you out.",
      template: pathToHtmlEmailTemplate
      // The same data you would pass to #inject()
      // data: { confirmationURL: '...' }
   })
   .then(() => {
      console.log('Email sent!')
   })
   .catch(error => {
      console.warn('mjmlUtils.sendmail error', error)
   })

// fs.readFile('dist/deploy/index.html', "utf-8", (err, data) => {
//    const mailOptions = {
//       from: 'tomomi oki', // sender address
//       to: 'xxx@gmail.com', // list of receivers
//       subject: 'Tomomichan test', // Subject line
//       html: data// plain text body
//     };

//      transporter.sendMail(mailOptions, function (err, info) {
//       if(err)
//         console.log(err)
//       else
//         console.log(info);
//    });
// })
