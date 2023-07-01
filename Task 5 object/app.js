// Task 1

// var user = {
//     name: "Anar",
//     gender: "Male",
//     birthday: "01/07/1990"
//   };


//   console.log(user.birthday);

//   Task 2

// var user = {
//     name: "Anar",
//     gender: "Male",
//     birthday: "01/07/1990"
//   };


//   user.age = 23


//   delete user.birthday;

//   console.log(user);

// Task 3

// let user = {
//     name: "Anar",
//     gender: "Male",
//     birthday: "01/07/1990",
//     age: null,
//     setAge: function (newAge) {
//       this.age = newAge;
//     },
//     netice: function () {
//       const pensiyaYas = 65; 
//       if (this.age !== null) {
//         const years = pensiyaYas- this.age;
//         return years > 0 ? years : 0;
//       } else {
//         return "Yaş girilmedi";
//       }
//     }
//   };
  
  
//   user.setAge(33);
  
  
//   console.log(user.netice());
  

// Task 4

// var client = {
//     Name: "Anar Memmedov",
//     creditLimit: 5000,
//     balans: 3000,
//     odenis: 10,
  
//     getBalance: function() {
//       if (this.balans >= 0) {
//         return "Balansınız " + this.balans;
//       } else {
//         return "Borcunuz " + Math.abs(this.balans);
//       }
//     },
  
//     getMinPaymant: function() {
//       if (this.balans > 0) {
//         var minodenis = (this.balans * this.odenis) / 100;
//         return "Minimum ödənişiniz " + minodenis;
//       } else {
//         return "Sizin borcunuz yoxdur";
//       }
//     },

// }
// console.log(client.getBalance());

// console.log(client. getMinPaymant());

