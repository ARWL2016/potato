const express = require('express');
const path = require('path');
const rp = require('request-promise');
const util = require('util');
const app = express();

const PORT = 4200;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/data?', (req, res, next) => {
  const {tags} = req.query;
  rp(`https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&nojsoncallback=1&tags=${tags}`)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(e => next(e));
});

app.use((err, req, res) => {
  console.log({err})
  res.status(500).send(err);
});

app.listen(PORT, () => {
    console.log('Listening on PORT', PORT);
});

