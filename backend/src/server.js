const express = require('express');
/**Permite executar as ações do bd usando sintax js */
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const { config } = require('./.env');
const server = express();

mongoose.connect(config,
    { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);