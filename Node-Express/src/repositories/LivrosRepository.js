const logger = require('../config/logger');

const livros = [];
let proxId = 0;
const getLivroIdx = id => livros.map(l => l.id).indexOf(id);

const LivrosRepository = {
    adicionar: (livro) =>{
        livros.push({
            id: proxId++,
            titulo: livro.titulo,
            autor: livro.autor});     
    },
    recuperar: id => livros[getLivroIdx(id)],
    alterar: (id, novo) => livros[getLivroIdx(id)] = novo,
    remover: id => livros.splice(getLivroIdx(id), 1),
    todos: () => livros
};

module.exports = LivrosRepository;
