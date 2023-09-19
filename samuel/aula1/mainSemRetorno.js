//Pegamos o elemento do input cep
const cep = document.querySelector('#cep');

//Pegamos o elemento do input button buscar 
const botao = document.querySelector('#buscar');

//evento criado para realizar o envio de requisição
// o (e) é a captura do evento 
// botao.addEventListener('click', function(e) {
cep.addEventListener('blur', function(e) {

    //replace função para substiturir um caracter 
    let search = cep.value.replace('-', '');

    //crio o objeto com as propriedades do envio para o ajax
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }


    //buscar - acessar a url de onde será acessado, nesse caso a api o viaCEPT
    //passa por parâmetro o CEP em questão, e passa os parâmetros necessários, como por exemplo op CORS
    //serve para dizer que está trabalhando com servidores diferentes, como se fosse uma permissão de acesso
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)


        //quando utilizamos o fetch ele retorna uma promessa, ele é assincrono, então fazemos as verificações abaixo
        //então faça algo, nesse caso crio uma função onde pego o "response" a resposta, no formato json
        .then(function (response) {
            response.json()
                //o json também retorna uma promessa, então precisamos verificar se deu certo
                //se der certo nesse caso retorna os dados p nós 
                .then(function (data) {
                    console.log(data);
                })
        })

        //se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error:' + e.message);
        })

    //console.log(search);
})
