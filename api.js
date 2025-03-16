const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('api index');
});

router.get('/example', function (req, res) {
  res.json({message: 'example'});
});

module.exports = router;
