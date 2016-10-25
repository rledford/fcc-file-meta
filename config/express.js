var express = require('express'),
   multer = require('multer'),
   storage = multer.memoryStorage(),
   upload = multer({storage: storage}),
   indexController = require(process.cwd()+'/app/controllers/index.server.controller');

module.exports = function(){
   app = express();

   //set express up for using res.sendFile from the app/views directory
   app.use(express.static(process.cwd()+'/app/views/'));

   app.route('/')
      .get(indexController.render)
      .post(upload.single('fname'), indexController.getFileSize);

   app.set('port', process.env.PORT || 3000);
   console.log('created and configured express app');
   return app;
};
