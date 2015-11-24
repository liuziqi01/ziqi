module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
    app.get('/watch', handlers.watch);
app.get('/play',handlers.play);
app.get('/game',handlers.game);
app.get('/weeby/magic',handlers.weeby);
app.get('/weeby/key.css',handlers.key);
app.get('/bitcoin_project',handlers.bitcoin_project);


}
