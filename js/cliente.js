// CLIENTE

function validarCliente(nome, cpf, data_nascimento, endereco, email, telefone) {
    let nome = document.getElementById(nome).value;
    let cpf = document.getElementById(cpf).value;
    let data_nascimento = document.getElementById(data_nascimento).value;
    let endereco = document.getElementById(endereco).value;
    let email = document.getElementById(email).value;
    let telefone = document.getElementById(telefone).value;

    if (nome == "")
        alert("Nome não pode estar em branco.");
    else if (cpf == "")
        alert("Data de nascimento não pode estar em branco.");
    else if (data_nascimento == "")
        alert("Data de nascimento não pode estar em branco.");
    else if (endereco == "")
        alert("Data de nascimento não pode estar em branco.");
    else if (email == "")
        alert("Data de nascimento não pode estar em branco.");
    else if (telefone == "")
        alert("Data de nascimento não pode estar em branco.");
    else cadastrarCliente(nome, cpf, data_nascimento, endereco, email, telefone);
}

function cadastrarCliente(nome, cpf, data_nascimento, endereco, email, telefone) {
    let novoCliente = {nome:nome, cpf:cpf, data_nascimento:data_nascimento, endereco:endereco, email:email, telefone:telefone};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; // Nenhum produto ainda foi cadastrado
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); // Adiciona um novo produto
        localStorage.setItem("clientes",JSON.stringify(clientes))
        alert(nome + " foi cadastrado com sucesso!");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function listarCliente() {
    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        document.write("<h1>Cliente:</h1>")
        if (clientes == null)
            document.write("<h3>Ainda não há nenhum cliente cadastrado</h3>");
        else {
            clientes = JSON.parse(clientes);
            clientes.forEach(cliente => {
                document.write("<ul>");
                document.write("<li>Nome: "+ clinte.nome +"</li>");
                document.write("<li>CPF: "+ cliente.cpf +"</li>");
                document.write("<li>Data de nascimento: "+ cliente.data_nascimento +"</li>");
                document.write("<li>Endereço: "+ cliente.endereco +"</li>");
                document.write("<li>E-mail: "+ cliente.email +"</li>");
                document.write("<li>Telefone: "+ cliente.telefone +"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}