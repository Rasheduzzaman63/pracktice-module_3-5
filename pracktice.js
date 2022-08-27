// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
// let number = 6;
// number =7;
// const age =56;

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

// const multiline = `I am Rasheduzzaman
// I am fine

// `
// const a =5;
// console.log( ${age + a})

// একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

// const fiveIt = number => number / 5 ;
// const result = fiveIt(25)
// console.log(result)


// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

// const addMultiplication = (number1, number2) => {
//     return multiply = (number1 + 2) * (number2 + 2) 
// }

// const result = addMultiplication(5, 8)
// console.log(result)



// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

// const addMultiplication = (number1, number2, number3) => number1 * number2 * number3

// const result = addMultiplication(5, 8, 2)
// console.log(result)



// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// const addMultiplication = (number1, number2) => {
//     return multiply = (number1 + 2) * (number2 + 2) 
// }

// const result = addMultiplication(5, 8)
// console.log(result)


// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

// const numbers = [2, 4, 3, 5, 19, 43 , 48, 54]

// const output = numbers.map (num => num * 5)
// console.log(output)



// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 


// const numbers = [2, 4, 3, 5, 19, 43 , 48, 54]
// const OddNumber = numbers.filter(number => number % 2 !== 0)

// console.log(OddNumber)


// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

// const products = [
//     {id:1, name: 'laptop', price: 36000},
//     {id:1, name: 'Mobile', price: 15000},
//     {id:1, name: 'Camera', price: 55000}
// ]

// const findPrice = products[2].price
// console.log(findPrice)


// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

// const numbers = [2, 4, 3, 5, 19, 43 , 48, 54]
//   or 
// const [a, b, c, d, ...remaining ] = [2, 4, 3, 5, 19, 43 , 48, 54]
// console.log(a, b, c, d, ...remaining)



// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

// const numbers = [2, 4, 3, 5, 19, 43 , 48, 54]
// const [one, two, three, ...remaining]= numbers;
// const third = three;
// console.log(third)



// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

// function addThreeNumber(first, second, third = 7){
//     return first + second + third;
// }

// const result = addThreeNumber(8, 5)
// console.log(result)



// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

// const user ={
//     id:5,
//     name:'Rashed',
//     address: {
//         Village: 'south Ketokibari',
//         Postoffice: 'Chilahati',
//         PS: 'Domar',
//         District:'Nilphamari'
//     },
//     Laptop: [
//         {Brand: 'Samsung', price: 50000},
//         {Brand: 'Dell', price: 34000}
//     ]
// }

// const findSamsungLaptopPrice = user.Laptop[0].price
// console.log(findSamsungLaptopPrice)