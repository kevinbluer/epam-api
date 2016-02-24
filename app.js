var restify = require('restify');

var server = restify.createServer({
  name: 'MyApp'
});

var port = process.env.PORT || 3002;
server.listen(port);

server.get('/1/articles', function(req, res, next) {
    res.json([{ 
    	title: 'hello'
    },{
    	title: 'world'
    }]);
});