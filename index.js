//Using twitter node package
var Twitter = require('twitter');
require('dotenv').config()
//Axios will help use to make the request to the excuses
var axios = require('axios');
//Need to create a .env 
var client = new Twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
axios("https://pacific-springs-69478.herokuapp.com/excuses").then(Response => {
	return [Response.data.marche];
}).then(([ Responses ]) => {
    for (const Response in Responses) {  
        client.post('statuses/update', {status: `Excusez-moi, ${Responses[Response].text} #TrouveTonExcuse #Retard `}, function(error, tweet, response){
            if(!error){
                console.log(`${Response}) Excusez-moi, ${Responses[Response].text} #TrouveTonExcuse #Retard`);
                console.log(`Tweeté avec sucès ! ✅`);
            }
            else{
                console.log(error);
            }
        })

    }
});