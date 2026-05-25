// Classe Contato com inicial maiúscula (padrão de boas práticas)
class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    // Instancia a classe capturando os valores do formulário
    let dadosContato = new Contato(
        form.elements["nome"].value,
        form.elements["email"].value,
        form.elements["telefone"].value,
        form.elements["contato"].value,
        form.elements["mensagem"].value
    );

    // Executa a função de envio/validação
    let envioSucesso = Enviar(dadosContato);

    if (envioSucesso) {
        console.log("Dados enviados com sucesso:", dadosContato);
        form.reset(); // Limpa os campos do formulário após o sucesso
    }

    return false;
}

function Enviar(dados) {
    // Validação básica de campos vazios ou não selecionados
    if (
        dados.nome.trim() === "" ||
        dados.email.trim() === "" ||
        dados.telefone.trim() === "" ||
        dados.tipoContato.trim() === "" ||
        dados.mensagem.trim() === ""
    ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Mensagem de sucesso para o usuário
    alert(
        "Obrigado, " +
        dados.nome +
        "! Sua mensagem de " + 
        dados.tipoContato + 
        " foi enviada com sucesso."
    );

    return true;
}
