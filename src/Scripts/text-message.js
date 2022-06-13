/* Simple module which sends a text message to the user */
// TODO This may need to be moved to the file that calls the texting function
const twilio = require('twilio');

/**
 * Sends a text message to the desired number using twilio
 * @param messageToSend Message body
 * @param numberToSendMessageTo Receiving number must take the format +13608700249
 */
function sendText(messageToSend, numberToSendMessageTo) {
    const ACCOUNT_SID = 'ACa549395e04c000a1654c6110e1ff3d2d'; // Your Account SID from www.twilio.com/console
    const AUTHORIZATION_TOKEN = 'de97d9b2bfd646524e4fd8bf611db3df'; // Your Auth Token from www.twilio.com/console
    const CLIENT = new twilio(ACCOUNT_SID, AUTHORIZATION_TOKEN);

    CLIENT.messages
        .create({
            body: body,
            to: numberToSendMessageTo, // Text this number
            from: '+19403948775', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid)); // To confirm message was sent
}

// Export the texting module
exports.sendText = sendText