var express = require('express');
var router = express.Router();

const messages = [
  {
    'title': 'John Doe',
    'text': 'Message 1 text',
    'added': new Date()
  },
  {
    'title': 'Jane Doe',
    'text': 'Message 2 text',
    'added': new Date()
  },
  {
    'title': 'Jane Doe',
    'text': 'Message 3 text',
    'added': new Date()
  },
  {
    'title': 'John Doe',
    'text': 'Message 4 text',
    'added': new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  console.log(req.body)
  debugger
  messages.push({
    'title': req.body.message_author,
    'text': req.body.message_text,
    'added': new Date()
  })
  res.redirect('/')
})

module.exports = router;
