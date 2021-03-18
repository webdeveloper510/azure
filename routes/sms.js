var express = require('express');
var router = express.Router();
const { SmsClient } = require('@azure/communication-sms');


const formidable = require('formidable')
// Instantiate the SMS client



/* GET users listing. */
router.post('/sendSms', async function(req, res, next) {
//   new formidable.IncomingForm().parse(req, (err, fields, files) => {
//     if (err) {
//       console.error('Error', err)
//       throw err
//     }
//   //  console.log('Fields', fields)
//    // console.log('Files', files)
//   //  var fr=new FileReader(); 

//  //   console.log(fr.readAsText(files[0])); 
//     // for (const file of Object.entries(files)) {
//     //   console.log(file)
//     // }
//   })
  //console.log(req.files)
  //return false
 // const smsClient = new SmsClient(req.body.connectionString);
  const smsClient = new SmsClient("endpoint=https://lapp.communication.azure.com/;accesskey=tI/HIx5ROdnKciLFE1HaMZ3DLKpg7Mbq38k3rH7wNMI7xkKIc9B8Qxk5pTpr6dCpf19hJ6/ZMw2ai0QRwgao1Q==");

  const sendResults = await smsClient.send({
    from: '+18337292762',
    to: ["+17652481999"],
    message: "Hello World 👋🏻 via SMS"
    //enableDeliveryReport: true
  });

  // individual messages can encounter errors during sending
  // use the "successful" property to verify
  for (const sendResult of sendResults) {
    if (sendResult.successful) {
      console.log("Success: ", sendResult);
    } else {
      console.error("Something went wrong when trying to send this message: ", sendResult);
    }
  }
 
});
router.get('/', function(req, res, next) {
  res.render('Home');
});



module.exports = router;
