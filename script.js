
// you have array of objects where each object have year, sort it to descending
let yearsOfBd = [
    {
      name: "Tom",
      age: 1981,
    },
    {
      name: "Jeremy",
      age: 1990,
    },
  
    {
      name: "Kate",
      age: 2001,
    },
    {
      name: "Ann",
      age: 1999,
    },
  ];
  
  let newYearsOfBd = yearsOfBd.sort((a, b) => a.age - b.age);
  console.log(newYearsOfBd);
  
  
  
  // // you have users array and display it in html with innerHTML
  let users = ['Tom', 'Ann', 'Jeremy', 'Kate'];
  let usersList = document.querySelector('ul')
  
  users.forEach(el => {
      let usersItem = document.createElement('li');
      usersItem.innerHTML = `${el}`
      usersList.append(usersItem);
     
  })
  
  
  
  
  // you have a laptops array and find the most expensive one and console it
  let notebooks = [
    { brand: "asus", price: 998 },
    { brand: "macBook", price: 2700 },
    { brand: "lenovo", price: 2500 },
    { brand: "hp", price: 1600 },
  ];
  
  let newPrice = notebooks.sort((a, b) => b.price - a.price).slice(0, 1);
  console.log(newPrice);
  
  
  let newPrice2 = notebooks.reduce((acc, curr) => {
    if (acc.price > curr.price) {
      return acc;
    } else return curr;
  });
  
  console.log(newPrice2);
  
  
  let a = notebooks[0];
  let newPrice3 = notebooks.filter((el) => {
    if (a.price > el.price) {
      return a;
    }
  });
  
  console.log(a);
  
  