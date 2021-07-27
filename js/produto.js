function validarProduto(idNomeCliente, idCpf, idData_nascimento, idEndereco, idEmail, idTelefone) {
    let nome = document.getElementById(idNomeCliente).value;
    let cpf = document.getElementById(idCpf).value;
    let data_nascimento = document.getElementById(idData_nascimento).value;
    let endereco = document.getElementById(idEndereco).value;
    let email = document.getElementById(idEmail).value;
    let telefone = document.getElementById(idTelefone).value;

    if (nome == "")
        alert("Nome não pode estar em branco. Favor preenchê-lo!");
    else if (cpf == "")
        alert("CPF não pode estar em branco. Favor preenchê-lo!");
    else if (data_nascimento == "")
        alert("Data de nascimento não pode estar em branco. Favor preenchê-lo!");
    else if (endereco == "")
        alert("Endereço não pode estar em branco. Favor preenchê-lo!");
    else if (email == "")
        alert("E-mail não pode estar em branco. Favor preenchê-lo!");
    else if (telefone == "")
        alert("Telefone não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, cpf, data_nascimento, endereco, email, telefone);
}

function cadastrarProduto(cli_nome, cli_cpf, cli_data_nascimento, cli_endereco, cli_email, cli_telefone) {
    let novoProduto = {nome:cli_nome, cpf:cli_cpf, data_nascimento:cli_data_nascimento, endereco:cli_endereco, email:cli_email, telefone:cli_telefone};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
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
                document.write("<h2>Nome: "+produto.nome+"</h2>");
                document.write("<p>CPF: "+produto.cpf+"</p>");
                document.write("<p>Data de nascimento: "+produto.data_nascimento+"</p>");
                document.write("<p>Endereço: "+produto.endereco+"</p>");
                document.write("<p>E-mail: "+produto.email+"</p>");
                document.write("<p>Telefone: "+produto.telefone+"</p>");
                document.write("</div>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}
