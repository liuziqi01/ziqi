exports.index = function(req, res) {
	res.render('ziqi.html');
}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}


exports.weeby =  function(req, res) {
  // Happy hacking :)
	//res.send(req);
  res.send('hello, world')
})


exports.play = function(req,res)
{
	
    res.render('play.html');
}

exports.game = function(req,res){
    console.log("handlersing");
    res.render('game.html');
}

exports.watch = watchf;

