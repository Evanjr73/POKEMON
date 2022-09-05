var formulario = document.querySelector("form")

formulario.addEventListener('submit' , function(e){
    //bloqueia o refrsh da pagina (o ré carregamento)
    e.preventDefault()

    //url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    
    //valor do imput name
    let nome =  document.getElementById("name")

    //concaquena a url com inputname
    urlForm = urlForm + this.name.value

    //tranasformar as letras em minusculas
    urlForm = urlForm.toLocaleLowerCase()

    // id content
    let resposta = document.getElementById("content")

    // id imgPokemon
    let imagem = document.getElementById("imgPokemon")

    // REsposta em html
    let html = " "

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data){
            
            html = 'Nome:' + maiuscula(data.name) + '<br>'
            html = html + 'Tipo: ' +  maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado! 😒'
            } else {
                html = err
            }
            resposta.innerHTML = html
        })
})
function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}