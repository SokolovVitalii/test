const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let table = [];
for (let i = 1; i <= 9; i++) {
    let row = [];
    for (let j = 1; j <=9; j++) {
        row.push(i*j);
    }   
    table.push(row); 
};
console.log('____________________________');
for (let i = 0; i < table.length; i++) {
    let a = '';
    for (j=0;j<table[i].length;j++) {
        const element = table[i][j];
        let lastElement = table[i][table[i].length-1];
        if (element <10) {            
            let b = '| ' + table[i][j];
            a = a + b;
        } else {
            let b = '|' + table[i][j];
            a = a + b;
        }
        if (element===lastElement) {
            a= a+"|";
        }
    }
    console.log(a);
};
console.log('----------------------------');

let hero = {x:0,y:0}; 


