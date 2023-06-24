// Task -1


// function active(username) {
//     console.log(username + " is active now");
//   }
  
  
//   active("John");
//   active("Emma");
//   active("Alex");
  

//   Task-2

// function findMaxNumber(num1, num2, num3) {
//     var netice = Math.max(num1, num2, num3);
//     console.log("En boyuk eded: " + netice);
//   }
  
  
//   findMaxNumber(10, 5, 8);
//   findMaxNumber(15, 20, 12);
//   findMaxNumber(3, 7, 9);


// let number="110"
// ikilikden10a()
// function ikilikden10a(num) {
//   let toplam=0
//   let quvvet=0
//   for(let i=number.length-1 ; i>=0; i--) {
//    toplam= toplam + Number(number.charAt(i))*Math.pow(2,quvvet )
   
    
//   }
//   console.log("sonuc : " + toplam);

// }


// Task -3

// function valyuta(sum){
//   let rubl=Number(prompt("rubl daxil edin"))
//   let dollar=Number(prompt("dollar daxil edin"))
//   dollar=dollar*75
//   let toplam = rubl+dollar
//   console.log("Bütün depozitlər üzrə məbləğ: " + toplam);
// }

// valyuta();

// Task -4

// function numberToText() {
//     var reqem = parseInt(prompt("1 ilə 99 arasında bir rəqəm daxil edin:"));
  
    
//     var birler = ["", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"];
  
    
//     var onlar = ["", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"];
  
//     var metin;
  
//     if (reqem >= 1 && reqem <= 99) {
//       if (reqem < 10) {
        
//         metin = birler[reqem];
//       } else {
        
//         var birinciBasamak = reqem % 10;
//         var ikinciBasamak = Math.floor(reqem / 10);
//         metin = onlar[ikinciBasamak] + " " + birler[birinciBasamak];
//       } 
  
//       console.log(metin);
//     } else {
//       console.log("Yanlış giriş! 1 ilə 99 arasında bir rəqəm daxil edin.");
//     }
//   }
  
  
//   numberToText();
  


// Task -5


// let num1=Number(prompt("num 1 eded daxil et"))
// let num2=Number(prompt(" num 2 eded daxil et"))
// function min() {
//       if(num1>num2)

//       {
//         console.log(num2);
//       }

//       if (num2>num1)
//       {
//         console.log(num1);
//       }


// }
// min();


// Task 6

// function calc(a, b, operator) {
//   switch (operator) {
//     case '+':
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     case '/':
//       return a / b;
//     default:
//       return "Sehf melumat";
//   }
// }


// console.log(calc(4, 6, '+'));  
// console.log(calc(4, 6, '-'));  
// console.log(calc(4, 6, '*')); 
// console.log(calc(4, 6, '/'));  
// console.log(calc(4, 6, '%'));  


// Task 9

// function isEven(number) {
//     if (number % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
  
//   console.log(isEven(4)); 
//   console.log(isEven(7)); 
//   console.log(isEven(0)); 
  


















