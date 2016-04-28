var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, './asset/js/app.js')
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  externals: {
    'angular': 'angular'
  }
};