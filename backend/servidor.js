const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('./database');

app.set('nombreApp', 'Aplicacion para manejo de gastos SRI');
app.set('puerto', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/', require('./src/routes/server.routes'));

app.listen(app.get('puerto'), () => {
    console.log('Nombre de la App: ', app.get('nombreApp'));
    console.log('Puerto del servidor: ', app.get('puerto'));
});