exports.index = function(req, res) {
	res.render('ziqi.html');
}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}


exports.weeby = function(req, res) 
{
  // Happy hacking :)
  /*
var url = require('url');
var urlValue = 'http://ziqi.herokuApp.com/test1/test2?query=value';

var parsedUrl = url.parse(urlValue, true, true);

console.log('Search is : ',parsedUrl.search);

  res.send('hello, world');
  */
  res.render('ziqi.html');
  console.log("Hello");
}


exports.play = function(req,res)
{
	
    res.render('play.html');
}

exports.game = function(req,res){
    console.log("handlersing");
    res.render('game.html');
}

exports.watch = watchf;

