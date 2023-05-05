const dialogflow =  require('dialogflow');
// const dialogflow = require('@google-cloud/dialogflow');
const config = require('.././../config/keyfile');
const privateKey = config.googlePrivateKey;
const projectId = "virtual-doctor-tvxxbp";
const sessionId = config.dialogflowSessionId
const credential = {
    client_email: config.googleClientEmail,
    privateKey: config.googlePrivateKey
}
const sessionClient = new dialogflow.SessionsClient();

const textQuery = async(userText, userId) => {
const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId)
const request = {
    session: sessionPath,
    queryInput: {
       text: {
        text:userText,
        languageCode: 'en',
       }
    }
}

try {
    const responses = await sessionClient.detectIntent(request)
    const results = responses[0].queryResult
    console.log(results);
    return results
} catch(err) {
    console.log(err)
}
}

module.exports = {
    textQuery
}