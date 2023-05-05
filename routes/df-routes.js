const chatbot = require('./chatbot/chatbot')

module.exports = app => {
       
    app.post('/textquery', async(req,res) => {
        const {text,userId} = req.body;
        const resultQuery = await chatbot.textQuery(text,userId)
       console.log(resultQuery);
       const resObj = {
        fulfillmentText: resultQuery.fulfillmentText
       }
        res.json(resObj);
    })
}