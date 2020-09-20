var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

//concat do link com a palavra digitada
mongoose.connect('mongodb+srv://deploy:frdp123@cluster0.4fccf.mongodb.net/desafio?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));


server.listen(3333);
console.log('ok');
exports = module.exports = app;


