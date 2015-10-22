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

  var url = require('url');
var urlValue = require('http');

var parsedUrl = url.parse(req.url, true);
var spell = parsedUrl.query.spell;
console.log('spell is %s',spell);
spell = counter(spell);
  res.send(spell);
  
}

exports.key = function(req, res) 
{

  res.render('key.html');
  //res.render('keycss.html');
  
}

exports.flappy = function(req, res) 
{
	
	//	res.send("Hello POST");
	
      
  console.log("Request handler random was called.");
  response.writeHead(200, {"Content-Type": "application/json"});
  var time = ["144545748669"];
  var nextTime =  "144545748699" ;
  var json = JSON.stringify({ 
    queue: time, 
    next : nextTime
  });

  res.send(json);

  res.send("not hello");
  
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

var counter = function(spell){
	var result = "";
	for(var i =0;i<spell.length;){
		var c = spell.charAt(i);
		console.log(c);
		if(c=='t'){
			if(spell.charAt(i+1) == 'h' && spell.charAt(i+2) == 'u'&& spell.charAt(i+3) == 'd'){
			result = result + "fred";
			i = i+4;
			}
			else{
			return "Invalid spell";
			}
		}

		else if(c=='f'){
			if(spell.charAt(i+1) == 'r' && spell.charAt(i+2) == 'e'&& spell.charAt(i+3) == 'd'){
				result = result + "grault";
				i = i+4;
			}
			else{
			return "Invalid spell";
			}
		}

		else if(c=='g'){
			if(spell.charAt(i+1) == 'r' && spell.charAt(i+2) == 'a'&& spell.charAt(i+3) == 'u'&& spell.charAt(i+4) == 'l'&& spell.charAt(i+5) == 't'){
			result = result + "thud";
			i = i+6;
			}
			else{
			return "Invalid spell";
			}
		}
		else{
			return "Invalid spell";
		}
	}
		return result;

	}








