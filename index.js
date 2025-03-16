const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const api = require('./api');
app.use(express.json());
app.use(express.static('static'));

app.use('/api/', api);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
