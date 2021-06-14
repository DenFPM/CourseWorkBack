var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '95.142.46.149',
  user: 'monty',
  password: 'LHBR[m!h_>bMV2,n',
  database: 'CourseWork'
})

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  })

module.exports = connection