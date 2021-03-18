var express = require('express');
var router = express.Router();
const { SmsClient } = require('@azure/communication-sms');


const formidable = require('formidable')
// Instantiate the SMS client



/* GET users listing. */
router.post('/sendSms',  function(req, res, next) {
  new   formidable.IncomingForm().parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }

    const smsClient = new SmsClient(fields.connectionString);
    let numbers = fields.toNumbers.split(',')
    const sendResults = await smsClient.send({
      from: fields.fromNumber,
      to: numbers,
      message: fields.message
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
  //  console.log('Fields', fields)
   // console.log('Files', files)
  //  var fr=new FileReader(); 

 //   console.log(fr.readAsText(files[0])); 
    // for (const file of Object.entries(files)) {
    //   console.log(file)
    // }
  })
  console.log(req.files)
  return false
 // const smsClient = new SmsClient(req.body.connectionString);
 console.log(req)

 
});
router.get('/', function(req, res, next) {
  res.render('Home');
});



module.exports = router;
