var express = require('express'),
  app = express.createServer(),
  _ = require('underscore');

app.configure(function() {
  app.use(express.static(__dirname + '/static'));
  app.register('._', {
    compile: function(str, options) {
      var compiled = _.template(str);
      return function(locals) {
        return compiled(locals);
      };
    }
  });
  app.set('view engine', '_');
});

app.get('/', function(req, res) {
  res.render('index', {title: "Demon Days", body: "test!"});
});

var port = process.argv[2] ? parseInt(process.argv[2]) : 3000;

app.listen(port);
console.log("Demon Days listening on port %d.", app.address().port);
