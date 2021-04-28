'use strict';
let user = prompt('Hello, Could you please enter your name');
function user8(){
    alert(user + ', Welcome to my website');
}
user8();
//console.log(user);
let score = 0;
function user9(){
let user1 = prompt('Do you think i like games?');
switch (user1.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('Correct answer');
         score++;
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('You are wrong');
         break;
          
}
}
user9();

//console.log(score);
function user10(){
let user2 = prompt('Do you think i like swimming?');
switch (user2.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('yes , you do');
         alert('Correct answer');
         score++;
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('You are wrong');
         break;
          
}
}
user10();
//console.log(score);
function user11(){
let user3 = prompt('Do you think i like reading?');
switch (user3.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('Correct answer');
         score++;
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('Wrong answer');
         break;
          
}
}
user11();
//console.log(score);
function user12(){
let user4 = prompt('Do you think i like drawing?');
switch (user4.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('Correct answer');
         score++;
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('Wrong answer');
         break;
          
}
}
user12();
//console.log(score);
function user13(){
let user5 = prompt('Do you think i like watching tv?');
switch (user5.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('You are right');
         document.write(user + ' , hope you like my website')
         score++;
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('You are wrong');
         document.write(user + ' , hope you like my website')
         break;
          
}
}
user13();
//console.log(score);
function user14(){
alert('And now lets start with a guessing game');

let user6 = parseInt(prompt('How many years my career experinece are?'));
let count = 0;

for (let i = 0; i < 4; i++) {
    if (user6 > 6) {
        alert('You are wrong, it is less than ' + user6 );
        user6 = prompt('You have another chance');
        count++;
}   else if (user6 < 6 ) {
        alert('You are wrong, it is higher than' + user6 );
        user6 = prompt('You have another chance');
        count++;

}else{
    alert('You got it');
    score++;
    break;
}
}

//console.log(score);
if (count == 4) {
    alert('You lost your chance and its 6 years')
}
}
user14();
function user15(){
    let myCar = ['toyota' , 'honda' , 'jeeb' , 'pickup' , 'bmw' , 'hyoundai' , 'mercedes'];
let user7 = prompt('What is my favorite car model?');
user7 = user7.toUpperCase();
let count1 = 0;
for (let i = 0; i < 7; i++){
    if (user7 === myCar[0] || user7 === myCar[1] || user7 === myCar[2] || user7 === myCar[3] || user7 === myCar[4] || user7 === myCar[5] || user7 === myCar[6]){
        alert('You are right,' + user7 + ' is one of it');
        score++;
        break;
    }else{
        alert('You are wrong');
        user7 = prompt('You have another chance to guess it');
        count1++;
    }
}
if (count1 == 7) {
    alert('You have missed all chances, and it is Toyota , Honda , Jeeb , Pickup , BMW , Hyoundai and Mercedes');
}
}
user15();
//console.log(score);
alert(user + ', your score is ' + score);
