// let myname = "diwesh";

// console.log(myname)

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6

// let table= 2;

// for(i=0;i<=10;i++){
//     console.log(`${table} * ${i} = ${table*i}`)
// }

// const months =['jan', 'feb', 'march','may']

// months.reduce('jan', 'Jan')
// console.log(months)


// let arr = [2,3,4,6,8]


// let niw= arr.map((cur , index, arrr ) =>{
// mult = cur*2;
// if(mult>=10){
//     return `${mult}`

// }
  
// else{
//     return false
// }

// })

// console.log(mult)


// let arr = [2,4,5,7,8]

// let arr1 = arr.map((ele)  => {
//     return ele*2;


// }).filter((ele)  => {
//     return ele>10;

// })


// console.log(arr1)


// let a1= '/'
// let a= 2;
// let b =3;


// switch(a1){
//     case '+':
//         console.log(a+b);
//         break;
    
//     case '-':
//         console.log(a-b);
//         break;

//     case '*':
//             console.log(a*b);
//             break;
            
//     case '/':
//         console.log(a/b);
//         break;    
//     default:
//         console.log("enter a default value");
//         break;        
    
// }

// let p2={
//     name:'hello',
//     age: 42

// }

// // Dot notation 
// p2.name = 'diwesh';

// // brafcket notaion
// p2['name'] ='rai'

//console.log(p2)

//array

// let arr = [1,2,4,5];

// console.log(arr.length)




// Function

// function hello(){
// console.log("hello world")

// }

// hello()

// function hello(name) {

// console.log("hello "+ name)

// }
// hello('Diwesh')


// Turnarry operator 

// let p = 101;
// let t = p>100 ? 'yes': 'no';

// console.log(t)


// let a = 'red';
// let b  = 'blue';

// c = b;
// b=a;
// a=c;

// console.log(a,b)


// let arr = [1,2,4,8]

// for(let key1 in arr)
// console.log(key1) 



// for(let key2 of arr)
// console.log(key2)


// const movie ={
//     title : 'a',
// year: 2018,
// rating: 4.5,
// direct: 'b'
// };

// Show1(movie);
// function Show1(obj){
//     //console.log(obj)
//     for (let i in obj)
//     if (typeof obj[i]==='string')
//     console.log(i, obj[i]);

// }

// console.log(sum(10));

// function sum(limit){
//     let sum1 =0;
//     for(i =0; i<=limit;i++)
//         if(i%3 ===0 || i %5===0)
//         sum1 += i;
//         return sum1; 
    
// }


// showstars(5);

// function showstars(rows){
// for( let row =1; row<=rows ; row++){
// let pattern = '';
// for (i =0; i<=row;i++)
// pattern+= '*'

// console.log(pattern);

// }
    


// }


// object oriented programing


// const circle ={
// radius:1,
// location:{
//     x:1,
//     y:1
// },
// isVisible: true,

// draw: function(){
//     console.log('draw');
// }

// };
// circle.draw();


// function circle1(radius){
//     return{
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
    
// }
// const c= circle1(1); 
// console.log(c)



// constructor Fumction

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle1 = new Circle(2);
// console.log(circle1)



// dynamic objects

// const circle= {
//     radius:1
// };

// circle.x= 'yellow';
// circle.y = 'hello';

// delete circle.x;

// console.log(circle)


// Values vs refernce type 

// primitive are copied by their value.
 // objects are copied by their reference.

//  let x = 10;
//  let y = x;

//  x=20;

// let x = {value:10};
// let y = x;

// x.value = 20;

// console.log(x,y)

// copying an object

// const circle = {
//     raidus: 1,
//     draw (){
//         console.log('draw');
//     }
// };


// const another = {};

// for(let key in circle)
// another[key] = circle[key]


// // new method 
// const another = Object.assign({}, circle);

// console.log(another);

// spread operator 

// const another = { ...circle};

// console.log(another);

// template literals
// const name = 'Diwesh Rai';

// const email = 
// `hello sir/mam,

// My name is ${name} i am from panipat

// Thank u`

// console.log(email);

// // arrays
// const arr= [3,4];

// // last 
// arr.push(5,6);
// // first
// arr.unshift(1,2);
// // middle
// arr.splice(2,0 , 'a','b');
// console.log(arr);

// FINDING ELEMNETS IN OBJECTS
// const obj1 = [
//     {id: 1 , name: 'a'},
//     {id: 2 , name: 'b'}
// ]; 

// const obj2 = obj1.find(function(obj2){
//     return obj2.name === 'a';
// });

// console.log(obj2);

// combine 2 arrays

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const combine = arr1.concat(arr2);

// const sli = combine.slice(2);

// console.log(sli);

// combine using spread operator
// const combine = [...arr1, ...arr2];

// console.log(combine);

// sorting an aray

// const arr =[1,4,2];

// arr.sort();

// arr.reverse();
// console.log(arr);



// const arr = [
//     {id: 1, name: 'Node'},
//     {id: 2, name: 'javasccript'},
// ];

// arr.sort(function(a,b){

// const nameA= a.name.toUpperCase();
// const nameB = b.name.toUpperCase();

// if (nameA< nameB) return -1;
// if (nameA>nameB) return 1;
// return 0;

// });

// console.log(arr);

// Filtering an array


// const num = [1,2,7,5,-4,8,3];

// const filtered = num.filter(n => n>=0);
// console.log(filtered);


// exercise v no 60


// let add = {
//     street: 'Ganesh',
//     city: 'panipat',
//     zipcode:132103,

// };

// function showadd(add1){
//     for (let key in add1)
    
//     console.log(key, add1[key]);
// }

// showadd(add);


// exercise v61

// let adress = new Address('a','b','c');

// console.log(adress);

// // factory function

// function createAddress(street, city, zipcode){
//     return{
//         street,
//         city,
//         zipcode
//     };
// }

// // constructor function
// function Address(street,city,zipcode){
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }




// exercise v 62

//check they are same or not

// let add1 = new add('a','b','c');
// let add2 = new add('a','b','c');

// console.log(equal(add1,add2));
// console.log(same(add1,add2));


// // constructor function 

// function add(street, city, zipcode){
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }


// function equal(add1, add2){
//     return add1.street === add2.street &&
//     add1.city === add2.city &&
//     add1.zipcode === add2.zipcode;
// }


// function same(add1, add2){
//     add1 === add2;
// }

// v65 


// let price= [
//     {label:'$', tip: 'low', min:0, max:10 },
//     {label:'$$', tip: 'mid', min:11, max:20 },
//     {label:'$$$', tip: 'high', min:21, max:50 },
    
// ]


// let resto = [
//     {}
// ]

// exercise v82

// const numbers = arrayFromRange(-10,4);

// console.log(numbers);

// function arrayFromRange(min,max) {
//    let final =[];
//    for(let i = min; i<=max; i++)
//    final.push(i);
//    return final;

// }


// v83 exercise


// const numbers = [1,2,3,4];

// console.log(includes(numbers,2))

// function includes(arr,element){
//     for(let key of arr)
//         if (key === element)
//             return true;


//     return false;



// }



//exercise v100


// console.log(sum([1,2,3,4]));

// function sum(...items){
//     console.log(items);
//     return items.reduce((a,b)=> a+b);
// }



// exercise v101

// const circle ={
//     radius: 1,
//     get area(){
//         return Math.PI* this.radius *this.radius;
//     }
// };

// console.log(circle.area);



// exercise array previous

// const numbers = [1,2,3,4];

// const count = occur(numbers, 1);
// console.log(count);

// function occur(arr, element){
//     return arr.reduce((accumulator, current)=>{
//         const occurence = (current === element)? 1 :0;
//         return accumulator + occurence;
//     })
// }

// exercise 102

try{

    const numbers = [1,2,3,4];

    const count = occur(numbers, 1);
    console.log(count);
    
}

catch (e){
    console.log(e.message);
}

function occur(arr, element){
 if (!Array.isArray(arr))
 throw new Error('invalid array');



    return arr.reduce((accumulator, current)=>{
        const occurence = (current === element)? 1 :0;
        return accumulator + occurence;
    })
}



