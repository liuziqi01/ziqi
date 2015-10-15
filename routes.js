module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
    app.get('/watch', handlers.watch);
app.get('/play',handlers.play);
app.get('/game',handlers.game);
app.get('/weeby/magic',handlers.weeby);
app.get('/weeby',handlers.weeby);
app.get('/weeby/yes',handlers.game);
}
