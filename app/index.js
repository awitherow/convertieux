var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression')
var cors = require('cors')

var { getConversions } = require('./exchanges.js')

app.use(compression())
app.use(cors())

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/conversions', async (req, res) => {
  const conversions = await getConversions();
  console.log("api", conversions);
  return res.status(200).json({
    success: true,
    data: "hello, world!"
  })

  // TODO: add coin conversion logic
  // - query coinbase
  // - for each coin get the coin/fiat price
  // - calculate which number is needed to get
  // - - conversion rate from coin -> fiat
  // - - conversion rate from fiat -> coin
  // res.status(200).json({ success: true, data }) -> success
  // res.status(500).json({ status: 'error', success: false, err }) -> error
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});