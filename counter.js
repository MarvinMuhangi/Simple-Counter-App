// function blocknumber(){
//     var number = "623";
//     var number2 = "805";
//     var number3 = "948";
//     var num = prompt("Enter your phone number");
//     if (num == number){
//      alert("stop calling me!");
//     } else if (num == number2){
//       alert("Hello there!");
//     } else if(num == number3){
//       alert("I said no, stop calling me!");
//     } else{
//       alert("Hello, who is this?");
//     }
//   return num;
//   };
//   blocknumber();




// var num1 = parseInt(prompt("Enter your first number:"));''

// var num2 = parseInt(prompt("Enter second number:"));

// var total = num1 * num2;

// alert("Your total is " + total);





// var age = parseInt(prompt("How old are you?"))

// if (age < 18){
//  alert("Sorry, you are too young to drive this car. Powering off");
// } else if ( age == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (age > 18){
//     alert("Powering On. Enjoy the ride!");
// }


let count = 0
let btn = document.querySelector(".increase-btn");
let btn2 = document.querySelector(".decrease-btn");
let btn3 = document.querySelector(".reset-btn");
let counter = document.querySelector(".counter-num") ;


btn.addEventListener('click', function(e){
    count++;
    counter.innerHTML= count;
    console.log(count);    
});
   
 btn2.addEventListener('click', function(e){
    count--;
    counter.innerHTML= count;
    console.log(count)    
});

btn3.addEventListener('click', function(e){
        count=0;
        counter.innerHTML= count;
        console.log(count)    
    });



























