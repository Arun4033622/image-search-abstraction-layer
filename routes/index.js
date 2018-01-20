const express = require('express'),
      https   = require('https'),
      axios   = require('axios'),
      dotenv  = require('dotenv'),
      History = require('../models/history'),
      router  = express.Router();

dotenv.config();
      
let subscriptionKey = process.env.APIKEY;
      
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/imagesearch/:term', (req, res) => {
    let responseArr = [];
    let offset;
    (req.query.offset) ? offset = req.query.offset: offset = 0;
    axios({
        method : 'GET',
        url: `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${encodeURIComponent(req.params.term)}&count=10&offset=${offset}`,
        headers : {
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
        }
    })
      .then(function(response) {
          for (let i = 0; i < 10; i++) {
              responseArr.push({
                  url: response.data.value[i].contentUrl,
                  snippet: response.data.value[i].name,
                  thumbnail: response.data.value[i].thumbnailUrl,
                  context: response.data.value[i].hostPageUrl
              });
          }
          History.create({term: req.params.term});
          res.json(responseArr);
    }).catch(console.log);
});

router.get('/history', (req, res) => {
    var responseArr = [];
    History.find({}).sort({date: -1}).limit(10).exec((err, foundHistory) => {
        if (err) throw err;
        else {
            for (let i = foundHistory.length - 1; i >= 0 ; i--) {
                responseArr.push({term: foundHistory[i].term, when: foundHistory[i].when});
            }
            res.json(responseArr);
        }
    });
});

module.exports = router;