const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let hero = { face: '',   x: 2,    y: 0   };
let array = [0,0,0,0,0,0,0,0,0,0];
console.log('');
console.log(hero);
function startTheGame(){
    creatingPerson();
};
function creatingPerson() {
    console.log('');
rl.question('Pls enter symbol of your person : ', pers => {
    hero.face = pers;
    console.log('');
    console.log(`It's your char " ${hero.face} " !`);
    console.log('');
    console.log(hero);
    console.log('');
    filingArray();
 })
};
function filingArray(arr) {
    console.log('');
    for (i=0;i<array.length;i++){
        if (i===hero.x ){
            array[i]=hero.face;
            console.log(array);
        } else {
            array[i]=0;
            console.log(array);
        }
    }    
};
function game() {
};

startTheGame();