function validarCliente(idNomeCliente, idCpf, idData_nascimento, idEndereco, idEmail, idTelefone) {
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
    else cadastrarCliente(nome, cpf, data_nascimento, endereco, email, telefone);
}

function cadastrarCliente(cli_nome, cli_cpf, cli_data_nascimento, cli_endereco, cli_email, cli_telefone) {
    let novoCliente = {nome:cli_nome, cpf:cli_cpf, data_nascimento:cli_data_nascimento, endereco:cli_endereco, email:cli_email, telefone:cli_telefone};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; // Nenhum produto ainda foi cadastrado
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); // Adiciona um novo produto
        localStorage.setItem("clientes",JSON.stringify(clientes))
        //alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
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

function listarCliente() {
    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        document.write("<h1>Clientes:</h1>")
        if (clientes == null)
            document.write("<h3>Ainda não há nenhum cliente cadastrado</h3>");
        else {
            clientes = JSON.parse(clientes);
            clientes.forEach(cliente => {
                document.write('<div>');
                document.write("<h2>Nome: "+cliente.nome+"</h2>");
                document.write("<p>CPF: "+cliente.cpf+"</p>");
                document.write("<p>Data de nascimento: "+cliente.data_nascimento+"</p>");
                document.write("<p>Endereço: "+cliente.endereco+"</p>");
                document.write("<p>E-mail: "+cliente.email+"</p>");
                document.write("<p>Telefone: "+cliente.telefone+"</p>");
                document.write("</div>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}