const Nexmo = require("nexmo")

require("dotenv").config()

const apiKey = process.env.VONAGE_API_KEY
const apiSecret = process.env.VONAGE_API_SECRET

function sendMessage(text){
    const nexmo = new Nexmo({
        apiKey: apiKey,
        apiSecret: apiSecret,
      });
      
      const from = process.env.FROM;
      const to = process.env.TO;
      // const text = 'Hello from Vonage SMS API';

    // nexmo.message.sendSms(from, to, text, {}, (error, response) => {
    //     if (error) {
    //       console.error(error)
    //     }
       
    //     if (response) {
    //       console.log(response)
    //     }
    //   });
}
module.exports = sendMessage
