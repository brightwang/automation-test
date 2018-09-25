const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.post('/login', function (req, res) {
    var name = req.param('name');
    var pwd = req.param('pwd');
    res.json({name: name, 'pwd': pwd});
});

router.get('/user/:uid', function (req, res) {
    res.json({'uid':req.param('uid')});
});

router.get('/index', function (req, res) {
    res.json({message: 'api index'});
});

app.use('/api', router);

app.listen(3000);

console.log('begin');