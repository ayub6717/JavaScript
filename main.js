// var a = 5;
// var b = 6;
// var c = a + b;
// console.log(c)

// if(true){
//     let rohan = 7;
//     var afnan = 10;
//     console.log(rohan)
// }
// console.log(afnan);

// function mycal(b,c){
//     return (b+c);
// }
// let x = mycal(4,5)
// let y = "my name is rohan " + x;
// console.log(y);
// document.getElementById("tell").innerHTML =  y;


// function degree(a,f,b,c){
//     return (a*f)/(b+c)-7
// }
// let x = degree;
// let y = "I feel effected by fever around " + x(12,2,1,1);
// document.getElementById("top").innerHTML = y;

// const car ={
//     model: "0726",
//     weight: "560kg",
//     color: "White",
//     start: function(){
//         this.drive();
//         console.log("My car has benn starting");
//     },
//     drive: function(){
//         console.log("I'm driving");
//     },
// };

// console.log(car.color);
// console.log(car["weight"]);
// car.start();

// onclick="document.getElementById('femno').innerHTML = Date()"

// document.getElementById("red").onclick = function() {showed()}

// function showed(){
//     document.getElementById("femno").classList.add("bg") ;
// }

// const a = document.getElementsByClassName('dropbtn').onclick = function() {drop()};
// function drop(){
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// const contain = document.getElementById("myBtn")
// const taip = contain.getElementsByClassName('dropbtn').onclick = function() {drop()};

// document.getElementById("myBtn").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementsByClassName("dropdown-content").classList.toggle("show");
// }

// let str = "apple, banana, orange";
// let mx = str.slice(7,13);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);

// let strr = 'Apple, banana, kola';
// console.log(strr.indexOf('banana'));

const rohan = ["banana","amm","apple","noodlse","peyara"]
// rohan.push("Lemon");
// rohan[3] = "seemon";
// let len = rohan.length;

// let text = "<select>"

// for (let index = 0; index <len; index++) {
    
//     text += "<option>" + rohan[index] + "</option>";
    
// }
// let text += "</select>";
// console.log(text);
// document.getElementById("femno").innerHTML = text;

// let texts = "<ul>";
// rohan.forEach(show);
// texts += "</ul>";
// function show(element){
//     texts += "<li>" + element + "</li>";
// }
// document.getElementById("femno").innerHTML = texts;






const items = ['rohan','afnan','samia','monalisa','tuha','juhan','mostafa kamal','nurjahan','baby','hannan','mishba','shoumik','sifat','nasima','kianu','zakir','faruq','momotaz'];

let text = "<ul>";
items.forEach(showed);
text += "</ul>";

function showed(element) {
    text += "<li>" + element + "</li>";
}
document.getElementById("item").innerHTML = text;

    $(".expand").click(function(){
        var el = $('.parrent');
        var curHeight = $('.parrent').height();


        if(curHeight == 200){
            let autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({height: autoHeight}, 1000);
            $(".expand").text("see less")
            console.log("a");
        }
        else{
            let autoHeight = el.css('height', '200px').height();
            el.height(curHeight).animate({height: autoHeight}, 1000);
            $(".expand").text("see more");
            console.log("b");
        }
    });
