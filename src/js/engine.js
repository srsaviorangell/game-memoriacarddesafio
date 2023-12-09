// iniciaremos criando uma const com os as figuras que precisamo 3 e qi iniciaremos //
// nessa const criamos o array das imagem ela nao e alterada //
const personagens =[
    'romeu',

    'ninja',

    'ninja',

    'larga',

    'larga',

    'coruja',

    'coruja',

    'Gato',
        'Gato',
        'lunar',
    'lunar',
    'romeu'
];

// criaremos agora uma let que vai deixa os elementos aberto//

let openCards = [];

// criaremos agora um embaralhador com a função random//

let shufflPersonagen = personagens.sort(() => (Math.random( ) > 0.5 ) ? 2 : -1 );
// aqui criamos uma variavel que vai embaralhar as cartas//

// esse for aqui ele vai percorre o comprimento da var e enquanto o i for menor que o compimento ele vai adicionando mais um e embaixa criamos a var box e nela colomcamos a parte que cria a div . em baixa nos dizemos qual vai ser a class a ser criada e depoisdirencionamos o valor a aela com a posição do index e no fim dizemos que queros adicionar essa div a cassa game //
for (let i=0; i<personagens.length; i++){
    let card = document.createElement("div");
    let imagem = document.createElement("img");
    card.className = 'intem';
    document.querySelector('.game').appendChild(card); 
  
    card.onclick = handleClick; 
    card.style.backgroundImage = `url("./src/imagen/${shufflPersonagen[i]}.jpg")`;
    card.appendChild(imagem);
     
}


function handleClick() {
    if(openCards.length < 2 ){
        this.classList.add("boxOpen");
        openCards.push(this);

    }

    if ( openCards.length == 2 ){
        setTimeout(checkMatch , 500);
    }
}
function checkMatch(){
     if (openCards[0].style.backgroundImage === openCards[1].style.backgroundImage) {
        openCards[0].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards=[];

    if (document.querySelectorAll("boxMatch").length === personagens.length) {
        alert("Você venceu!");
    }
}
