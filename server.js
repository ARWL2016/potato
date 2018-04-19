const express = require('express');
const path = require('path');
const rp = require('request-promise');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/data?', (req, res) => {
  const tags = req.query.tags;
  rp(`https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&tags=${tags}`)
    .then(resp => {
      console.log(typeof resp)
      // res.status(200).send(resp)
    })
    .catch(e => {
      res.status(500).send(error)
    });
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Listening on PORT', PORT);
})

