// 1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის კვადრატს.

console.log("task 1");

function square(x) {
  const square = x * x;
  return square;
}

console.log(square(3));
console.log(square(4));
console.log(square(5));

// 2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას.

console.log("task 2");

function discount(price, rate) {
  const discount = price - (price / 100) * rate;
  return discount;
}

console.log(discount(1000, 10));
console.log(discount(2000, 10));
console.log(discount(3000, 10));

// 3. Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.Math.floor() - ამრგვალებს რიცხვს ნაკლებობით, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

console.log("task 3");

function randomNumber() {
  return Math.round(Math.random() * 100);
}

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს ამ სტრინგის სიგრძეს (თუ რამდენი სიმბოლოსგან შედგება)

console.log("task 4");

function getStringLength(str) {
  return str.length;
}

console.log(getStringLength("Hello world"));

// 5*. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი app.js სადაც გვაქვს ვალუტების მასივი (currencies). გადააკოპირეთ ეს მასივი თქვენთან და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის rate მნიშვნელობაც არის უმცირესი

console.log("task 5");

const currencies = [
  {
    code: "AMD",
    quantity: 1000,
    rateFormated: "6.6742",
    diffFormated: "0.0202",
    rate: 6.6742,
    name: "სომხური დრამი",
    diff: 0.0202,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "EUR",
    quantity: 1,
    rateFormated: "2.8673",
    diffFormated: "0.0131",
    rate: 2.8673,
    name: "ევრო",
    diff: -0.0131,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "GBP",
    quantity: 1,
    rateFormated: "3.3111",
    diffFormated: "0.0046",
    rate: 3.3111,
    name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
    diff: -0.0046,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "TRY",
    quantity: 1,
    rateFormated: "0.0957",
    diffFormated: "0.0003",
    rate: 0.0957,
    name: "თურქული ლირა",
    diff: 0.0003,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },

  {
    code: "USD",
    quantity: 1,
    rateFormated: "2.5771",
    diffFormated: "0.0078",
    rate: 2.5771,
    name: "აშშ დოლარი",
    diff: 0.0078,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
];

currencies.forEach((object) => {
  console.log(object.rate);
});
