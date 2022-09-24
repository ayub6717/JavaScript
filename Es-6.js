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


