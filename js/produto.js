// PRODUTO

function validarProduto(nomeProduto, linkImagem, descricao, preco) {
    let nome = document.getElementById(nomeProduto).value;
    let imagem = document.getElementById(linkImagem).value;
    let descricao = document.getElementById(descricao).value;
    let preco = document.getElementById(preco).value;

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (imagem == "")
        alert("Link da imagem não pode estar em branco. Favor preenchê-lo!");
    else if (descricao == "")
        alert("Descrição do produto não pode estar em branco. Favor preenchê-lo!");
    else if (preco == "")
        alert("Preço do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, imagem, descricao, preco);
}

function cadastrarProduto(produto, imagem, descricao, preco) {
    let novoProduto = {nome:produto, imagem:imagem, descricao:descricao, preco:preco};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+ qtidade +" unidades do produto "+ produto +"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}

function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<div>");
                document.write(`<img src={produto.imagem} width="120px" height="auto"/>`);
                document.write("<h3>Produto: "+produto.nome+"</h3>");
                document.write("<p>Descrição: "+produto.descricao+"</p>");
                document.write("<h5>Preço: "+produto.preco+"</h5>");
                document.write("</div>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}
