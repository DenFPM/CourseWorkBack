const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/index.route'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
