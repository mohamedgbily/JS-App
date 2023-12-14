


function getRandomParagraph (){
  var randomIndex = Math.floor( Math.random() * 4 ) + 1 ;
  switch (randomIndex){
    case 1 :
      document.getElementById( "quote-output" ).innerHTML = " “If you tell the truth, you don't have to remember anything.” ";
      document.getElementById( "quote-auther" ).innerHTML = " --Mark Twain";
     document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/2.jpg" alt="" id="quote-img">' ;
      break;
      case 2 : 
      document.getElementById( "quote-output" ).innerHTML = " “Be yourself; everyone else is already taken.” ";
      document.getElementById( "quote-auther" ).innerHTML = " --Marilyn Monroe";
     document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/1.jpg" alt="" id="quote-img">';
      break;
      case 3 :
        document.getElementById( "quote-output" ).innerHTML = " “So many books, so little time.” ";
       document.getElementById( "quote-auther" ).innerHTML = " -- Frank Zappa ";
        document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/3.jpg" alt="" id="quote-img">';
        break;
      case 4 :
         document.getElementById( "quote-output" ).innerHTML = " “Be the change that you wish to see in the world.”  ";
          document.getElementById( "quote-auther" ).innerHTML = " --Mahatma Gandhi";
         document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/4.jpg" alt="" id="quote-img">';    
          break;
  }
}


// //********i try but not work with me code in the under page*****************************/


// function getRandomParagraph (min , max){
//   var x=  Math.floor( Math.random() * ( max - min  ) + 1 ) + min ;  
//   return x;
// }
//  var rNumber = getRandomParagraph(0 , 4);

//   function createArrayOfNumbers(start , end){
//     var myArray = [];
//     for( i = start ; i<= end ; i++ ){
//       myArray.push(i);
    
//     }
//     return myArray;
//   }
//   var numbersOfArray = createArrayOfNumbers(1,5);
//   var randomIndex = getRandomParagraph(0 , numbersOfArray.length);
//   console.log( randomIndex );
//   var randomIndex = numbersOfArray.splice(randomIndex , 1)
//   function generateNum(){
      
//     if(randomIndex==1){
//       document.getElementById( "quote-output" ).innerHTML = " “If you tell the truth, you don't have to remember anything.”   ";
//         document.getElementById( "quote-auther" ).innerHTML = " -- Mark Twain";
//         document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/2.jpg" alt="" id="quote-img">' ;
//     }
//     else if(randomIndex==2){
//       document.getElementById( "quote-output" ).innerHTML = " “Be yourself; everyone else is already taken.” ";
//       document.getElementById( "quote-auther" ).innerHTML = " --Oscar Wilde";
//       document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/1.jpg" alt="" id="quote-img">';
//     }
//     else if(randomIndex==3){
//       document.getElementById( "quote-output" ).innerHTML = " “So many books, so little time.” ";
//       document.getElementById( "quote-auther" ).innerHTML = " -- Frank Zappa ";
//       document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/3.jpg" alt="" id="quote-img">';
//     }
//     else if(randomIndex==4){
//       document.getElementById( "quote-output" ).innerHTML = " “Be the change that you wish to see in the world.”  ";
//       document.getElementById( "quote-auther" ).innerHTML = " --Mahatma Gandhi";
//       document.getElementById( "img-div" ).innerHTML = '<img src="./imgs/4.jpg" alt="" id="quote-img">';
//     }
   

//   }
 
// var y = generateNum();
// console.log( y );


