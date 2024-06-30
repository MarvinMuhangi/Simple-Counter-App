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



























