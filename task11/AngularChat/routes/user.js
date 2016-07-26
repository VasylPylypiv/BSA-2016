let express = require('express');
let router = express.Router();
var path = require('path');
const MessageModel = require(path.resolve('./mongoose'));


router.get('/', function (req, res){
    res.sendFile(path.resolve('public/index.html'));
});


router.get('/messages', function (req, res) {
	MessageModel.find( (err, docs) => {
		res.send(docs);
	})
});

router.post('/messages', function (req, res) {
	let mes = new MessageModel({author: req.body.author, text: req.body.text});
	mes.save(); 
	MessageModel.find( (err, docs) => {
		res.send(docs);
	})
	
});

module.exports = router;