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
var result_show = lostMoney.find((deposite_money) => {
   return (deposite_money>4);

});

// array findIndex method
var result_showed = lostMoney.findIndex((deposite_money) => {
   return (deposite_money>6);

});

// array filter method
var resut_shown = lostMoney.filter((deposite_money, index, arr) => {
    return (deposite_money>6);
})
console.log(result_show);
console.log(result_showed);
console.log(resut_shown);