const PRODUTOS = [
    {nome: 'Notebook-Gamer Lenovo', preco: 2500, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133775/9/133775934_1GG.jpg"},
    {nome: 'Roteador d-link', preco: 240, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/125612/2/125612220SZ.jpg"},
    {nome: 'Carregador -Samsung', preco: 84, imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/8579/3/8579390_1GG.jpg"},
    {nome: 'Relogio -Champions', preco: 158, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/33236/4/33236412_1SZ.jpg"},
    {nome: 'Xbox One X', preco: 349, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/132762/6/132762613_1GG.jpg"},
    {nome: 'Smart TV -Oled', preco: 1300, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133869/3/133869367_1GG.jpg"},
    {nome: 'Iphone X-Miami', preco: 309, imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132723/7/132723729SZ.png"},
    {nome: 'Suporte cooler', preco: 100, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/36660/7/36660791_1SZ.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;