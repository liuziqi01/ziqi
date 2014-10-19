exports.index = function(req, res) {
	res.send("Welcome to CS 1501");
}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

exports.play = function(req,res)
{
	
    res.render('play.html');
}

exports.watch = watchf;