const Nexmo = require("nexmo")

function sendMessage(text){
    const nexmo = new Nexmo({
        apiKey: '5222cc63',
        apiSecret: '0YZisImNOTL2nizq',
      });
      
      const from = '15877604428';
      const to = '16478813554';
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
