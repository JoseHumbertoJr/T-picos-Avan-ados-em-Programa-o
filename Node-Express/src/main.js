const expres = require('express');
const morgan = require('morgan');
const app = expres();
const bodyParser = require('body-parser');

const PORTA = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Funciona !');
});

app.listen(PORTA, () => {
    console.log('Aplicação no ar em http://localhost:'+PORTA);
});

////////////////////////////////////
app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expres.static('public'));

app.use('/auth', require('./controllers/autorizacao'));
app.use('/compra', require('./controllers/autorizacao'));
app.use('/livros', require('./controllers/livros'));
