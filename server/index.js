const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const port = process.env.PORT || 3333;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public', 'dist')));

app.use('/', router);

app.listen(port, () => {
  console.log('listening on port:', port);
});
