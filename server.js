const express = require('express');
const path = require('path');
const rp = require('request-promise');
const util = require('util');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/data?', (req, res, next) => {
  const {tags} = req.query;
  rp(`https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&tags=${tags}`)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(e => next(e));
});

app.use((err, req, res) => {
  console.log({err})
  res.status(500).send(err);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Listening on PORT', PORT);
})

