var mysql = require("mysql");

// configration file
var connection = mysql.createConnection({
  user: "tsinat",
  password: "Kingts1@",
  server: "localhost",
  database: "entries"
 
});

connection.connect();

exports.wordMeaning = function (res, searchterm) {
  connection.query(
    'select * from entries where word = "' + searchterm + '"',
    function (err, rows) {
      if (err) throw err;
      //   res.send(rows);
      res.status(200).json(rows);
    }
  );
};
