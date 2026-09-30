//variável que guarda o tema atual (false = claro, true = escuro)
let escuro = false;

//variável única de mensagem: tudo que aparece no alert passa por ela
let mensagem;

//array de objetos: cada objeto é uma playlist (um card)
let playlists = [
    { nome: "Noite de Rock",    genero: "Rock",       emoji: "🎸", curtidas: 0, favorito: false },
    { nome: "Roda de Samba",    genero: "Samba",      emoji: "🪘", curtidas: 0, favorito: false },
    { nome: "Pop do Momento",   genero: "Pop",        emoji: "🎤", curtidas: 0, favorito: false },
    { nome: "Modão Sertanejo",  genero: "Sertanejo",  emoji: "🤠", curtidas: 0, favorito: false },
    { nome: "Festa Eletrônica", genero: "Eletrônica", emoji: "🎧", curtidas: 0, favorito: false },
    { nome: "Piano para Estudar", genero: "Clássica", emoji: "🎹", curtidas: 0, favorito: false }
];


function trocarTema (){

    //inverte o valor: se era false vira true, se era true vira false
    escuro = !escuro;

    if (escuro){

        document.body.classList.add('escuro');
        document.getElementById('botao_tema').textContent = 'Modo claro';
        mensagem = "Modo escuro ligado";

    }else{

        document.body.classList.remove('escuro');
        document.getElementById('botao_tema').textContent = 'Modo escuro';
        mensagem = "Modo claro ligado";

    }

    alert(mensagem);

}


function mostrarCards (){

    //iniciando as variaveis
    let html = "";
    let totalCurtidas = 0;
    let mostrar;

    //Pegando o filtro escolhido
    let filtro = document.getElementById('filtro').value;

    //percorrendo o array para criar um card de cada playlist
    for (let i = 0; i < playlists.length; i++){

        let p = playlists[i];

        totalCurtidas = totalCurtidas + p.curtidas;

        //serve para separar em opções sem usar vários if else
        switch (filtro) {

            case 'favoritos':
                mostrar = p.favorito;
            break

            case 'populares':
                mostrar = p.curtidas >= 5;
            break

            default:
                mostrar = true;
        }

        if (mostrar){

            //se for favorito, o card ganha a classe "favorito" (borda amarela)
            let classe = "card";
            let textoFavorito = "⭐ Favoritar";

            if (p.favorito){
                classe = "card favorito";
                textoFavorito = "★ Favorita";
            }

            html = html +
                "<div class='" + classe + "'>" +
                    "<div class='emoji'>" + p.emoji + "</div>" +
                    "<h3>" + p.nome + "</h3>" +
                    "<p class='genero'>" + p.genero + "</p>" +
                    "<p>❤ " + p.curtidas + " curtidas</p>" +
                    "<button class='curtir' onclick='curtir(" + i + ")'>Curtir</button> " +
                    "<button class='favoritar' onclick='favoritar(" + i + ")'>" + textoFavorito + "</button>" +
                "</div>";
        }
    }

    //caso nenhum card passe pelo filtro
    if (html === ""){
        html = "<p>Nenhuma playlist para mostrar.</p>";
    }

    //mostrando na tela
    document.getElementById('cards').innerHTML = html;
    document.getElementById('total').textContent = "Total de curtidas: " + totalCurtidas;

}


function curtir (posicao){

    playlists[posicao].curtidas = playlists[posicao].curtidas + 1;

    mostrarCards();

    mensagem = "Você curtiu " + playlists[posicao].nome + ". Agora ela tem " + playlists[posicao].curtidas + " curtidas.";

    //quando chega em 10 curtidas, acrescenta um aviso na mesma mensagem
    if (playlists[posicao].curtidas === 10){

        mensagem = mensagem + " É sucesso!";

    }

    alert(mensagem);

}


function favoritar (posicao){

    //inverte o boolean do card
    playlists[posicao].favorito = !playlists[posicao].favorito;

    mostrarCards();

    if (playlists[posicao].favorito){

        mensagem = playlists[posicao].nome + " foi para as favoritas";

    }else{

        mensagem = playlists[posicao].nome + " saiu das favoritas";

    }

    //alert com a variável mensagem
    alert(mensagem);

}


function filtrar (){

    //Pegando o filtro escolhido
    let filtro = document.getElementById('filtro').value;

    mostrarCards();

    switch (filtro) {

        case 'favoritos':
            mensagem = "Mostrando só as playlists favoritas";
        break

        case 'populares':
            mensagem = "Mostrando só as playlists com 5 ou mais curtidas";
        break

        default:
            mensagem = "Mostrando todas as playlists";
    }

    alert(mensagem);

}


//mostra os cards assim que a página abre
mostrarCards();