require('./config/config');

const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT;
const root = __dirname + '/../public/';

app.use(express.static(root));

app.use('/design', express.static(root));
app.use('/info', express.static(root));

app.get('/design-images', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

  fs.readdir(root + 'images/design', (err, images) => {
    images = images.filter((image) => {
      extension = require('path').extname(image);
      if(extension === '.jpg' || extension === '.png' || extension === '.gif') {
        return image;
      }
    });
    res.send(images);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
