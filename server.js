const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando Aplicação
const app = express();

//Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
requireDir("./src/models");

const Product = mongoose.model('Product');

//Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description:'Build native Apps with React!',
        url:'http://github.com/facebook/react-native'
    });
    return res.send("Hello Rocketseat!");
});

app.listen(3001);