const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/barcode/loyaltyNum/:loyaltynum', (req, res) => {
    res.render('orderInfo', {loyalty: req.params.loyaltynum});
});

app.listen(80, () => {
  console.log('Listening on 80');
});