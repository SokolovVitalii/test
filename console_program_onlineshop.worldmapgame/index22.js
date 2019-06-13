const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let person = '';
function creatingPerson() {
    console.log('');
rl.question('Pls enter symbol of your person : ', pers => {
    console.log('');
    person = pers;
    console.log(`It's your char " ${person} " !`);
    console.log('');
    filingArray();
});    
};
console.log('');
let arrayNew = [];
let mapInPast = '';
function filingArray (arr) {    
    rl.question('Pls enter symbol of your map : ', mapSymbol => {        
    for (let i=0; i<10;i++){        
        arrayNew.push(mapSymbol);
        // for (let j=0;j<15;j++){
        //  arrayNew.push(mapSymbol);
        // }
    }
    mapInPast = mapSymbol;
    console.log('');
    console.log(`Your map is loks like this :  `);
    console.log('');
    console.log(`${arrayNew} `);
    console.log(`${arrayNew} `);
    console.log(`${arrayNew} `);
    console.log('');
    attention();
 });
};
function attention() {
    rl.question ('Are you ready to start ? Y/N  ', arg =>{
        if (arg.toLowerCase()==='y') {
            go();            
        } else { 
            console.log ('');
            console.log ('Thanks for you time.');
            console.log ('');
            rl.close();
        } 
    })
}
function go() {
    arrayNew[0] = person;
    console.log(`${arrayNew} `);
    console.log(`${arrayNew} `);
    console.log(`${arrayNew} `);
    console.log ('');
    rl.question ('Press A or D to move  ', arrows => {
    console.log ('');    
        if (arrows.toLowerCase()==='d') {
            arrayNew[0] = mapInPast;
            arrayNew[1] = person;
            stepToGo();
        } else {
            if (arrows.toLowerCase()==='a'){
                arrayNew[0] = mapInPast;
                console.log('');
                console.log(`${arrayNew} `);
                console.log(`${arrayNew} `);
                console.log(`${arrayNew} `);
                console.log('');
                console.log('You are going to sleep');
                console.log('');
                rl.close();

            } else {
                console.log(`Sorry, but you fall in LAWA`);
                rl.close();
            }
        }
        console.log(`${arrayNew} `);
        console.log(`${arrayNew} `);
        console.log(`${arrayNew} `);
    })
};
function stepToGo() {
    rl.question ('Press A or D to move  ', arrows => {
        console.log ('');  
        if (arrows.toLowerCase()==='a') {
            arrayNew[0] = person;
            arrayNew[1] = mapInPast;
            stepToGo();
        } else { if (arrows.toLowerCase()==='d') {

        } else { 
            console.log('You entered wrong key....You LOSE <3');
        }
      }
    });
};

function start() {
    creatingPerson();
};
start();


console.clear();

