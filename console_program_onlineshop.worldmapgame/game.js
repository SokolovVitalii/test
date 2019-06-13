const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let stdin = process.openStdin();
let currentPositionY=0,currentPositionX=0;
function move(x,y) {
    let tableMap=[];
    for (let i = 0; i <10 ; i++) {
        let row = '';
        for (let j = 0; j < 10; j++) {
            if (i===y&&j===x) {
                row=row+'*';
            } else {
                row=row + '0';
            }
        }       
        console.log(row); 
    }
};
function question() {
    console.clear();
    move(currentPositionX,currentPositionY);
    stdin.setRawMode(true);
    stdin.on('keypress', (chuck, answer) => {
        console.clear();
        console.log('');
        if (answer.name === 's') {    
            if (currentPositionY<9){
                currentPositionY = currentPositionY+1;
            }     
        }
        if (answer.name === 'w') {
            if (currentPositionY>0) {                
            currentPositionY=currentPositionY-1;
            }    
        }
        if (answer.name === 'd') {   
            if (currentPositionX<9){
                currentPositionX=currentPositionX+1;
            }             
        }
        if (answer.name === 'a') { 
            if(currentPositionX>0){
                currentPositionX=currentPositionX-1;
            }               
        }
        console.clear();
        move(currentPositionX,currentPositionY);
    });
};

function game() {
    question();
};

game();
