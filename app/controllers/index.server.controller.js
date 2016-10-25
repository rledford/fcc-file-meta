exports.render = function(req, res){
   //sendFile able to locate index.html because /config/express.js declared
   //app.use(exprees.static(process.cwd()+'/app/views/')
   //which is where index.html is located
   res.sendFile(process.cwd()+'/index');
};

exports.getFileSize = function(req, res, next){
   if (!req.file){
      res.send('No file!');
   }
   res.json({'size': req.file.size});
   next();
};
