var app = require('./server/server')

var PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('Server started on PORT: '+PORT);