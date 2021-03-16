const path = require('path');
const { PythonShell } = require('python-shell');

const options = {
  mode: 'json',
  pythonOptions: ['-u'],
  args: ['BTC-USD', 'ETH-USD', 'ADA-USD', 'LTC-USD', 'DOGE-USD']
};


exports.retrieveSimpleRateOfReturn = (req, res) => {
  options.scriptPath = path.join(__dirname, '..', '..', 'data_analysis', 'simple_return');
  PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    res.json(results[0]);
  });
};

exports.retrieveLogRateOfReturn = (req, res) => {
  options.scriptPath = path.join(__dirname, '..', '..', 'data_analysis', 'log_return');
  PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    res.json(results[0]);
  });
}

exports.retrieveBeta = (req, res) => {
  console.log(req.body);
  options.scriptPath = path.join(__dirname, '..', '..', 'data_analysis', 'log_return');
  PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    res.json(results[0]);
  })
}

