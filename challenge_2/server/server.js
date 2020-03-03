const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT=3000;

app.use(express.urlencoded());
app.use(bodyParser.json())
app.use(express.static('./client'));

app.post('/uploadjson',(req, res)=>{
console.log(JSON.parse(req.body.jsonText))
})

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
  });