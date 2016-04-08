var app = require('../server');


/* send users to angular app */
app.get('/', (req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
});