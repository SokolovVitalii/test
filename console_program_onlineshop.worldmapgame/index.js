const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let menu = [
     {
      id: 1,
      name: 'Green Salad',
      quantity: 1,
      price: 5.15
    },
    {
      id: 2,
      name: 'Orange Juice',
      quantity: 1,
      price: 5.55
    },
    {
        id: 3,
        name: 'Coca-Cola',
        quantity: 1,
        price: 3.55
    },
    {
        id: 4,
        name: 'French Fries',
        quantity: 1,
        price: 7.55
    },
    {
        id: 5,
        name: 'PIVASIK',
        quantity: 1,
        price: 9.99
    },
];
let receiptArray = [];
let receiptItemNew;
function lookupProduct(){
    console.log('');
    rl.question('Please, enter an item Id that you want to buy? ', (arg) => {
        saveToBasket(+arg);   
        askForNewProduct();
    });
};
function saveToBasket (id) {
    const receiptItem = menu.find(i=>i.id ===id);
    if (receiptItem === undefined) {
        console.log(''); 
        console.log('***You should choose something from our list!***');
        console.log('');        
    } else {
        let copy =  {
            id: receiptItem.id,
            name: receiptItem.name,
            price: receiptItem.price,
            quantity: 1
        };         
        for (key of receiptArray){
            if (copy.id === key.id) {                
                key.quantity+=1;
                return;
            }
        }      
        receiptArray.push(copy);
    }
};
function askForNewProduct() {
    console.log('');    
    PrintReceipt ();
    console.log('');    
    rl.question('You successfully added an item, do you want to complete payment? Y/N  ', answer =>{
        if(answer.toLowerCase() === 'n') {
            console.log('');    
            lookupProduct();
        } else if (answer.toLowerCase() === 'y') {
            console.log('');    
            PrintReceiptLast();
        } else {
            console.log('Invalid answer!');
            console.log('');    
            askForNewProduct ();
        }
    });
};
function PrintReceipt () {
    console.log(receiptArray);
    let count = 0;
    for (i=0; i<receiptArray.length; i++) {
        count +=  receiptArray[i].price * receiptArray[i].quantity;
    };
    console.log(`You should pay ${count.toFixed(2)} $.`);
};

function PrintReceiptLast () {
    console.log(receiptArray);
    let count = 0;
    for (i=0; i<receiptArray.length; i++) {
        count +=  receiptArray[i].price * receiptArray[i].quantity;
    };
    console.log(`You should pay ${count.toFixed(2)} $.`);
    console.log('');    
    rl.question ('Press any key  ', final=>{
        finalQuestion();
    })
};

function finalQuestion () {
    console.log('');    
    rl.question ('Do you want buy more ?  ', final=>{
        if (final.toLowerCase() === 'y') {
            console.log('');    
            lookupProduct();
        } else {
            console.log('');    
            console.log ('Thanks for your time :)');
            console.log('');
            rl.close();
        }
    })
};
function start() {
    lookupProduct ();
};
start();