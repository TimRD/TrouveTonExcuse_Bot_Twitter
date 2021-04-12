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
//Generate random int between 1 and 22 to get the excuse
var Numbre = Math.floor(Math.random() * 22) + 1;
axios("https://pacific-springs-69478.herokuapp.com/excuses").then(Response => {
	return ["Excusez-moi, " + Response.data.intercours[Numbre].text];
}).then(([ Response ]) => {
    client.post('statuses/update', {status: `${Response}`}, function(error, tweet, response){
		if(!error){
			console.log(Response);
		}
        else{
            console.log(error);
        }
	})
});