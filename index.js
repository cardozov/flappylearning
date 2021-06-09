const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('.')); //Diretorio base para a aplicação

app.listen(port);
console.log("App listening on port " + port);
