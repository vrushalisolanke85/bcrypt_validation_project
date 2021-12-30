var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/login', (req, res, next)=> {
  (req.body.username=="AK" && req.body.password=="BK")?res.send("OK"):res.send("NOT OK")
});


module.exports = router;
