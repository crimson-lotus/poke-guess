
// Variables

var correct = 0, wrong = 0;
var skiptBtn = document.querySelector('.next');
var pokeImg = document.querySelector('.poke-img');
var pokeName = document.querySelector('.poke-name');
var answer = document.querySelector('.answer');
var submitVal = document.querySelector('.submit');
var hint = document.getElementById('hint');
var resetBtn = document.querySelector('.reset');
var scoreVal = document.querySelector('.score');
var pokePhoto = document.querySelector('.poke-img-div');
var count = 0, score = 0, value = 0, skips = 0;
var correctAns = document.querySelector('.correct');
var incorrectAns = document.querySelector('.incorrect');
var skippedAns = document.querySelector('.skipped');
var restartBtn = document.getElementById('restart');
const mainContainer = document.querySelector('section.main-container');
const scoreBoard = document.querySelector('section.restart-section');
scoreBoard.style.display = "none";
// Pokemons

// Creating a class via which we will create the pokemon objects

class Pokemon {
    constructor(name, imgb, imgc, hint) {
        this.name = name;
        this.imgb = imgb;
        this.imgc = imgc;
        this.hint = hint;
    }
}

// Creating the pokemons

const abra = new Pokemon("Abra", "./images/abra-b.jpeg", "./images/abra.jpeg", "First Psychic pokeom you encounter in Gen1");
const aerodactyl = new Pokemon("Aerodactyl", "./images/aerodactyl-b.jpeg", "./images/aerodactyl.jpeg", "A rock and flying type fossil pokemon in Gen1");
const alakazam = new Pokemon("Alakazam", "./images/alakazam-b.jpeg", "./images/alakazam.jpeg", "Final form of the first psychic pokemon in Gen1");
const arbok = new Pokemon("Arbok", "./images/arbok-b.jpeg", "./images/arbok.jpeg", "Final form of snake looking poison pokmeon in Gen1");
const arcanine = new Pokemon("Arcanine", "./images/arcanine-b.jpeg", "./images/arcanine.jpeg", "Final form of fire type canine in Gen1");
const beedrill = new Pokemon("Beedrill", "./images/beedrill-b.jpeg", "./images/beedrill.jpeg", "Final form of a poison type bug pokemon in Gen1");
const blastoise = new Pokemon("Blastoise", "./images/blastoise-b.jpeg", "./images/blastoise.jpeg", "Final form of water type starter in Gen1");
const bulbasaur = new Pokemon("Bulbasaur", "./images/bulbasaur-b.jpeg", "./images/bulbasaur.jpeg", "Grass type starer in Gen1");
const butterfree = new Pokemon("Buttefree", "./images/butterfree-b.jpeg", "./images/butterfree.jpeg", "Final form of first bug type encountered in Gen1");
const caterpie = new Pokemon("Caterpie", "./images/caterpie-b.jpeg", "./images/caterpie.jpeg", "First bug type you encounter in Gen1");
const charizard = new Pokemon("Charizard", "./images/charizard-b.jpeg", "./images/charizard.jpeg", "Final form of fire type starter in Gen1");
const charmander = new Pokemon("Charmander", "./images/charmander-b.jpeg", "./images/charmander.jpeg", "Fire type starter in Gen1");
const charmeleon = new Pokemon("Charmeleon", "./images/charmeleon-b.jpeg", "./images/charmeleon.jpeg", "Intermediate form of fire type starter in Gen1");
const dragonair = new Pokemon("Dragonair", "./images/dragonair-b.jpeg", "./images/dragonair.jpeg", "Intermediate form of snake like looking dragon type in Gen1");
const dragonite = new Pokemon("Dragonite", "./images/dragonite-b.jpeg", "./images/dragonite.jpeg", "Final form of most liked dragon type in Gen1");
const dratini = new Pokemon("Dratini", "./images/dratini-b.jpeg", "./images/dratini.jpeg", "Snake like looking cute dragon type in Gen1");
const eevee = new Pokemon("Eevee", "./images/eevee-b.jpeg", "./images/eevee.jpeg", "Cute normal type that has several evolution forms");
const ekans = new Pokemon("Ekans", "./images/ekans-b.jpeg", "./images/ekans.jpeg", "First snake looking poison type in Gen1");
const fearow = new Pokemon("Fearow", "./images/fearow-b.jpeg", "./images/fearow.jpeg", "Final form ferocious looking flying type in Gen1");
const gastly = new Pokemon("Gastly", "./images/gastly-b.jpeg", "./images/gastly.jpeg", "First ghost type encountered in Gen1");
const gengar = new Pokemon("Gengar", "./images/gengar-b.jpeg", "./images/gengar.jpeg", "Final form of first encountered ghost type in Gen1");
const golbat = new Pokemon("Golbat", "./images/golbat-b.jpeg", "./images/golbat.jpeg", "Intermediate form of poison type flying pokemon in Gen1");
const golduck = new Pokemon("Golduck", "./images/golduck-b.jpeg", "./images/golduck.jpeg", "Final form of duck like water pokemon in Gen1");
const growlithe = new Pokemon("Growlithe", "./images/growlithe-b.jpeg", "./images/growlithe.jpeg", "Canine looking fire type in Gen1");
const haunter = new Pokemon("Haunter", "./images/haunter-b.jpeg", "./images/haunter.jpeg", "Intermediate form of first ghost type in Gen1");
const ivysaur = new Pokemon("Ivysaur", "./images/ivysaur-b.jpeg", "./images/ivysaur.jpeg", "Intermediate form of grass type staerer in Gen1");
const jigglypuff = new Pokemon("Jigglypuff", "./images/jigglypuff-b.jpeg", "./images/jigglypuff.jpeg", "Normal or Fairy type that sings in Gen1");
const kadabra = new Pokemon("Kadabra", "./images/kadabra-b.jpeg", "./images/kadabra.jpeg", "Intermediate form of first psychic type in Gen1");
const kakuna = new Pokemon("Kakuna", "./images/kakuna-b.jpeg", "./images/kakuna.jpeg", "Intermediate form of poison type bug pokemon in Gen1");
const kangaskhan = new Pokemon("Kangaskhan", "./images/kangaskhan-b.jpeg", "./images/kangaskhan.jpeg", "Dinosaur like normal type in Gen1, that has a baby with it");
const koffing = new Pokemon("Koffing", "./images/koffing-b.jpeg", "./images/koffing.jpeg", "A ball like looking poison type in Gen1");
const lapras = new Pokemon("Lapras", "./images/lapras-b.jpeg", "./images/lapras.jpeg", "Water/Ice type pseudo legendary in Gen1");
const machamp = new Pokemon("Machamp", "./images/machamp-b.jpeg", "./images/machamp.jpeg", "A muscular pokemon with four arms in Gen1");
const machoke = new Pokemon("Machoke", "./images/machoke-b.jpeg", "./images/machoke.jpeg", "Intermediate from of humanoid looking fighter pokemon in Gen1");
const machop = new Pokemon("Machop", "./images/machop-b.jpeg", "./images/machop.jpeg", "Humanoid looking fighter type in Gen1");
const metapod = new Pokemon("Metapod", "./images/metapod-b.jpeg", "./images/metapod.jpeg", "Intermediate form of first bug type in Gen1");
const mewtwo = new Pokemon("Mewtwo", "./images/mewtwo-b.jpeg", "./images/mewtwo.jpeg", "Genetically modified Legendary pokemon in Gen1");
const pidgeot = new Pokemon("Pidgeot", "./images/pidgeot-b.jpeg", "./images/pidgeot.jpeg", "Final form of first flying type encountered in Gen1");
const pidgeotto = new Pokemon("Pidgeotto", "./images/pidgeotto-b.jpeg", "./images/pidgeotto.jpeg", "Intermediate form of first flying type in Gen1");
const pidgey = new Pokemon("Pidgey", "./images/pidgey-b.jpeg", "./images/pidgey.jpeg", "First fyling type encountered in Gen1");
const pikachu = new Pokemon("Pikachu", "./images/pikachu-b.jpeg", "./images/pikachu.jpeg", "Seriously you need a hint for this pokemon, YOU NOOB XD");
const pinsir = new Pokemon("Pinsir", "./images/pinsir-b.jpeg", "./images/pinsir.jpeg", "A terrifying looking bug type with two pincers in Gen1");
const psyduck = new Pokemon("Psyduck", "./images/psyduck-b.jpeg", "./images/psyduck.jpeg", "Water type, duck like looking pokemon in Gen1");
const raichu = new Pokemon("Raichu", "./images/raichu-b.jpeg", "./images/raichu.jpeg", "Final form of signature pokemon of the the pokemon franchise");
const raticate = new Pokemon("Raticate", "./images/raticate-b.jpeg", "./images/raticate.jpeg", "Final form of rat looking normal type in Gen1");
const rattata = new Pokemon("Rattata", "./images/rattata-b.jpeg", "./images/rattata.jpeg", "Rat looking normal type in Gen1");
const sandshrew = new Pokemon("Sandshrew", "./images/sandshrew-b.jpeg", "./images/sandshrew.jpeg", "Armadillo looking ground type in Gen1");
const sandslash = new Pokemon("Sandslash", "./images/sandslash-b.jpeg", "./images/sandslash.jpeg", "Final form of armadillo looking ground type in Gen1");
const scyther = new Pokemon("Scyther", "./images/scyther-b.jpeg", "./images/scyther.jpeg", "Bug/Flying type pokemon thats pseudo legendary in Gen1");
const snorlax = new Pokemon("Snorlax", "./images/snorlax-b.jpeg", "./images/snorlax.jpeg", "Laziest pokemon of all time, that only eats and sleeps");
const spearow = new Pokemon("Spearow", "./images/spearow-b.jpeg", "./images/spearow.jpeg", "Ferocious flying type in Gen1");
const squirtle = new Pokemon("Squirtle", "./images/squirtle-b.jpeg", "./images/squirtle.jpeg", "Water type starter of Gen1");
const tauros = new Pokemon("Tauros", "./images/tauros-b.jpeg", "./images/tauros.jpeg", "Bull like looking ferocious normal pokemon of Gen1");
const venusaur = new Pokemon("Venusaur", "./images/venusaur-b.jpeg", "./images/venusaur.jpeg", "Final form of grass type starter in Gen1");
const vulpix = new Pokemon("Vulpix", "./images/vulpix-b.jpeg", "./images/vulpix.jpeg", "Fox like looking cute fire type in Gen1");
const wartortle = new Pokemon("Wartortle", "./images/wartortle-b.jpeg", "./images/wartortle.jpeg", "Intermediate form water type starter in Gen1");
const weedle = new Pokemon("Weedle", "./images/weedle-b.jpeg", "./images/weedle.jpeg", "First poison type bug pokemon in Gen1");
const weezing = new Pokemon("Weezing", "./images/weezing-b.jpeg", "./images/weezing.jpeg", "Final from of ball like looking poison pokemon in Gen1");
const wigglytuff = new Pokemon("Wigglytuff", "./images/wigglytuff-b.jpeg", "./images/wigglytuff.jpeg", "Final form of a pokemon that likes to sing a lot");
const zubat = new Pokemon("Zubat", "./images/zubat-b.jpeg", "./images/zubat.jpeg", "The most annoying flying type in any cave");

pokeList = [abra, aerodactyl, zubat, alakazam, arbok, beedrill, blastoise, bulbasaur, butterfree, caterpie, charizard, charmander, charmeleon, dragonair, dragonite, dratini
, eevee, ekans, fearow, gastly, gengar, golbat, golduck, growlithe, haunter, ivysaur, kadabra, kakuna, kangaskhan, koffing, lapras, machamp, machoke, machop, 
metapod, mewtwo, pidgeot, pidgeotto, pidgey, pikachu, pinsir, raichu, raticate, rattata, sandshrew, sandslash, scyther, tauros, venusaur, vulpix, wartortle,
weedle, weezing, wigglytuff, jigglypuff, arcanine, psyduck, snorlax, spearow, squirtle];

// console.log(pokeList.length);


// Functions

function restart() {
    answer.value = "";
    mainContainer.style.display = "none";
    correctAns.innerHTML = `<h3>Correct : ${correct}</h3>`;
    incorrectAns.innerHTML = `<h3>Incorrect : ${wrong}</h3>`;
    skippedAns.innerHTML = `<h3>Skipped : ${skips}</h3>`;
    scoreVal.innerText = "Score : " + score;
    scoreBoard.style.display = "flex";
}

function start() {
    if(count !== 10) {
        var num = Math.floor(Math.random() * 60);
        // console.log(num);
        value = num;
        pokeImg.src = pokeList[num].imgb;
        pokeName.style.display = "none";
        pokeName.innerText = pokeList[num].name;
    } else {
        restart();
    }
}

window.onload = () => {
    start();
}

// Checking for the value submitted

submitVal.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log(answer)
    // if(count !== 10) {
        if(answer.value.toLowerCase() === pokeName.innerText.toLowerCase()) {
            score += 3;
            correct += 1;
            // scoreVal.innerText = ("Score : " + score);
        } else {
            score -= 1.5;
            wrong += 1;
            // scoreVal.innerText = ("Score : " + score);
        }

        count += 1;
        pokeImg.src = pokeList[value].imgc;
        pokePhoto.classList.add('.image-fade');
        pokeName.style.display = "block";
        answer.value = "";
        pokePhoto.classList.remove('.image-fade');

        // Moving to next pokemon
        setTimeout(() => {
            start();
        }, 2000);
    // } else {
    //     restart();
    // } 
})

// Skip the current one and move to next pokemon

skiptBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // if(count !== 10) {
        skips += 1;
        count += 1;
        answer.value = "";
        start();
        pokeName.style.display = "none";
    // } else {
    //     restart();
    // }
})

// Reset everything 

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    answer.value = "";
    start();
    pokeName.style.display = "none";
    correct = wrong = score = skips = count = 0;
    scoreVal.innerText = "Score : 0"
})

// Hint function 

hint.addEventListener("click", (event) => {
    event.preventDefault();
    hintText = pokeList[value].hint;
    alert(hintText);
})

// Play again

restartBtn.addEventListener("click", (event) => {
    event.preventDefault();
    correct = wrong = score = skips = count = 0;
    scoreVal.innerText = "Score : " + score;
    answer.value = "";
    scoreBoard.style.display = "none";
    mainContainer.style.display = "flex";
    start();
})
