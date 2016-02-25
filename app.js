var restify = require('restify');

var server = restify.createServer({
  name: 'MyApp'
});

var port = process.env.PORT || 3002;
server.listen(port);

server.get('/1/articles', function(req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.json([{ 
    	title: "Facebook's new 'Like' buttons are rolling out now - go 'wow' at someone",
    	summary: 'After announcing that Facebook users would soon be able to express a wider range of emotions on the platform through emoji, the company is now delivering on that promise by rolling it out to all users.',
    	date: '18h ago',
    	author: 'Ben Woods',
    	image: 'http://cdn1.tnwcdn.com//wp-content//blogs.dir//1//files//2016//02//Likes-4-9.gif'
    },{
    	title: 'Report: Google to bring Chromecast-like features to TVs',
    	summary: 'While many of us are pleased with the stick or disc-shaped media dongle hanging out of the back of our regular old dumb televisions — the well-lived Chromecast — it seems that Google has plans to put those features directly in televisions. According to a scoop by Variety, a new model of Vizio televisions will offer Chromecast-like functionality right out of the box.',
    	date: '8h ago',
    	author: 'Lauren Hockenson',
    	image: 'http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2015/05/Chromecast.jpg'
    }
    ]);
});