console.log('The Ridder Bot is running');
const reddit = require('redditor');
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
// Setting up a user stream
const userStream = T.stream('user');
const searchStream = T.stream('statuses/filter', {
    track: 'retweet to win',
    language: 'en'
});

//
reddit.get('/r/politics.json', function(err, response) {
    if (err) throw err;
    for (i = 0; i < 3; i++) {
        const result = response.data.children;
        const potatoResult = result[i].data.url;
        console.log(potatoResult);
        T.post('statuses/update', {
            status: potatoResult + " #news"
        }, function(err, data, response) {});
    }
});
