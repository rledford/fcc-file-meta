var express  = require(process.cwd()+'/config/express'),
   app = express();

console.log('listening on port: ' + app.get('port'));
app.listen(app.get('port'));
