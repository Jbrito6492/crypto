const path = require('path');
const { PythonShell } = require('python-shell');

const options = {
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: path.join(__dirname, '..', '..', 'data_analysis'),
};


exports.retrieveSimpleRateOfReturn = (req, res) => {
  console.log("testing in the method")
  PythonShell.run('main.py', options, function (err, results) {
    if (err) throw err;
    console.log('results: %j', results);
    res.end();
  });
};

