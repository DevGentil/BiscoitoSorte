const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const clickOnCookie = document.querySelector("#closedCookie");
const btnTry = document.querySelector('#btnTry');
let randomPhrase = document.querySelector("#randomPhrase");
let generateRandomPhrase;

const phrases = [
  "A jornada de mil milhas começa com um único passo. Boa sorte!",
  "Seja a mudança que você deseja ver no mundo. Sorte está ao seu lado.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia. Continue perseverando!",
  "Acredite em si mesmo e tudo será possível. A sorte sempre acompanha os corajosos.",
  "A vida é feita de escolhas. Escolha ser feliz hoje. Boa sorte!",
  "O otimismo é a chave para abrir todas as portas. Boa sorte em suas conquistas!",
  "Grandes realizações nascem de grandes sonhos. Que sua jornada seja cheia de realizações.",
  "Cada novo dia é uma página em branco. Escreva uma história incrível. Boa sorte!",
  "Não tenha medo de falhar, tenha medo de não tentar. O sucesso espera por você!",
  "A sorte favorece a mente preparada. Esteja pronto para as oportunidades que surgirem."
];

clickOnCookie.addEventListener('click', generatePhrase);
btnTry.addEventListener('click', buttonTry);
document.addEventListener('keydown', pressEnterKey);

function generatePhrase(){
    toggleScreen();

    generateRandomPhrase = Math.floor(Math.random() * phrases.length);

    randomPhrase.innerText = phrases[generateRandomPhrase];
}

function buttonTry(event){
    event.preventDefault();
    toggleScreen();
}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen();
    }
}
