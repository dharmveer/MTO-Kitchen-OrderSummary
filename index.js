const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
//const axios = require('axios');
const JsBarcode = require('jsbarcode');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/generateBarcode/loyaltyNum/:loyaltynum', (req, res) => {
    res.render('orderInfo', {loyalty: req.params.loyaltynum});
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});