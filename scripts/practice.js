let student = {
    name: "Daniel",
    age: 99,
    isActive: true,
    sayHi:function(){
        return "hello";
    },
        hobbies:[ "football"],
        address:{
            street:"Palomar",
            zip: "22145",
            city: "San Diego",
            country: "USA"
         }
    
}
console.log(student.address.city, student.address.country);

let products = [];

function Product(n,d,p){
    this.name=n;
    this.description=d;
    this.price=p;
}
// let product2={
//     name:"Lifesystem BP cuff",
//     description: "arm cuff BP monitoring kit",
//     price: "39.95",
   }
// let product3={
//     name:"Barber in a Box",
//     description: "cut your own hair and save money",
//     price: "25.00"
// }

let product1 = new Product("Speaker","Sony", 20.50);
let product2 = new Product("Laptop", "HP", 100.00);
let product3 = new Product("scanner","Dell", 79.97);
let product4 = new Product("monitor", "Lenovo", 225.00);

console.log(product1,product2,product3,product4);