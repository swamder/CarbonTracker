//delivers the homepage file
var path = require('path');

exports.homePage = (req, res) => {
  res.sendFile(path.resolve('views/home.html'));
};