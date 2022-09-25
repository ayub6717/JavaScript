let number = (a,b) => {
    return a+b
}
console.log(number(20,10));

// this confusion resolve es-6

var html= {
    name: "html",
    library: ['bootstrap','tailwind','metarialize'],
    printLibraries: function(){
        // var self = this;
        // self.library.forEach(function(a){
        //     console.log(`${self.name} love ${(a)}`);
        // });

        this.library.forEach((a) => {console.log(`${this.name} love ${(a)}`);}); 
    },
};

html.printLibraries()


const searchInput  = document.querySelector(".search");
const result  = document.querySelector(".result");
const thanks  = document.querySelector(".thanks");

function show(){
    // var self = this;
    result.innerHTML = this.value;
    setTimeout(() => {
        thanks.innerHTML = `you have type: ${this.value}`
    }, 1000);
}

searchInput.addEventListener("keyup", show)

// Ternary operator

var age = 19;
var life = age>= 18 ? "adult" : age < 10 ? "child" : "young";

console.log(life);

// array find method
let lostMoney = [1,2,3,4,5,6,7,8,9];
var result_find = lostMoney.find((deposite_money) => {
   return (deposite_money>4);
});
console.log(result_find);


// array findIndex method
var findIndex = lostMoney.findIndex((deposite_money) => {
   return (deposite_money>6);
});
console.log(findIndex);


// array filter method
var resut_filter = lostMoney.filter((deposite_money, index, arr) => {
    return (deposite_money>6);
})
console.log(resut_filter);


// array slice method
var resut_slice = lostMoney.slice(1, 5);
console.log(lostMoney);
console.log(resut_slice);

// array splice method
var resut_splice = lostMoney.splice(1, 3, 10, 20, 30);
console.log(lostMoney);
console.log(resut_splice);


// array concat method
var hack_money = [12,16,23,21,33,50];
var white_money = [11,17,24,29,34,52];
var resut_concat = lostMoney.concat(hack_money,white_money);
console.log(resut_concat);


// array push method
var resut_push = white_money.push(44,55,66,77);
console.log(white_money);
console.log(resut_push);

// array map method

var map = [1,2,3,4,5,6];
var map_result = map.map((num) => {
    return 2*num;
});
console.log(map_result);

