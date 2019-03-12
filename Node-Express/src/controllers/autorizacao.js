const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const constantes = require('../config/constantes');
///////////////////////////////////////////////////
const fs = require('fs');
const extract = require('extract-zip');
const archiver = require('archiver');
var compactador = archiver('zip'); 
///////////////////////////////////////

router.post('/login', (req, res) => {
    if (req.body.username == 'admin' && 
        req.body.password == 'admin'){
        ////////////////////////////////////////////////////
        var saida = fs.createWriteStream('Arquivo.zip');
        var dados = req.body.username + req.body.password;
        compactador.pipe(saida);
        compactador.append(fs.createReadStream(dados), {name: 'dados.txt'});
        compactador.finalize();
        ////////////////////////////////////////////////////
        let payload = {
            username: 'admin',
            roles: ['ADMIN', 'USER'],
            email: 'admin@email.com'
        };
        var token = jwt.sign({payload}, constantes.JWT_SECRET,{
            expiresIn: 300
        });
        res.status(200).send({auth: true, token});
    }
    else {
        res.status(500).send('Login inválido!');
    }
});
router.post('/livros', (req, res) => {
    if (req.body.username == 'use' && 
        req.body.password == 'use'){

        let payload = {
            username: 'use',
            roles: ['USE', 'USER'],
            email: 'user@email.com'
        };
        var token = jwt.sign({payload}, constantes.JWT_SECRET,{
            expiresIn: 300
        });
        res.status(200).send({auth: true, token});
    }
    else {
        res.status(500).send('Login inválido!');
    }
});

module.exports = router;