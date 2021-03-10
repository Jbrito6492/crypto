const path = require('path');
const { PythonShell } = require('python-shell');

const options = {
  mode: 'json',
  pythonOptions: ['-u'],
  scriptPath: path.join(__dirname, '..', '..', 'data_analysis'),
  args: ['BTC-USD', 'ETH-USD', 'ADA-USD', 'LTC-USD', 'DOGE-USD']
};


exports.retrieveSimpleRateOfReturn = (req, res) => {
  PythonShell.run('main.py', options, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

