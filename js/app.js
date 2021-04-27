'use strict';
let user = prompt('Hello, Could you please enter your name')
alert(user + ', Welcome to my website')
//console.log(user);

let user1 = prompt('Do you think i like games?');
switch (user1.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('Correct answer');
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('You are wrong');
         break;
          
}
let user2 = prompt('Do you think i like swimming?');
switch (user2.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('yes , you do');
         alert('Correct answer');
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('You are wrong');
         break;
          
}
let user3 = prompt('Do you think i like reading?');
switch (user3.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('Correct answer');
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('Wrong answer');
         break;
          
}
let user4 = prompt('Do you think i like drawing?');
switch (user4.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('Wrong answer');
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('Correct answer');
         break;
          
}
let user5 = prompt('Do you think i like watching tv?');
switch (user5.toLowerCase()) {
    case 'yes':
    case 'y':
         //console.log('yes , you do');
         alert('You are right');
         document.write(user + ' , hope you like my website')
         break;
        
    case 'no':
    case 'n':
        //console.log('no , you do not');
         alert('You are wrong');
         document.write(user + ' , hope you like my website')
         break;
          
}


