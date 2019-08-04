const dinnerEntrees = {
    Steak : 29,
    Burger : 13.50,
    Salmon : 30,
    Crab : 36,
    Wings : 16
};

const lunchEntrees = {
  Steak : 25.99,
  Burger : 11,
  Salmon : 28,
  Crab : 33,
  Wings : 15
};

const breakfastEntrees = {
  SteaknEggs : 27.00,
  BreakfastSupreme : 24.99,
  BaconnEggs : 17.99,
  SausageNEggs : 18.99
}

const breakfastSides = {
  toast : 3,
  Pancakes : 5,
  Bacon : 6,
  Sausage : 7.50
};


const dinnerSides = {
    Fries : 5,
    Salad : 3,
    MashedPotato : 6,
    MacNCheese : 3.50,
    BakedPotato : 7,
    Veggies : 6
};



console.log("Welcome to King's Diner. Please take a moment to look over our menu. ");



function displayMenu(entreeMenu, sideMenu) {
    console.log("Entrees:");
    for (var item in entreeMenu) {
      console.log(`
      ${item} - $${entreeMenu[item]} `);
    };
    console.log('Sides:')
    for (var item in sideMenu) {
      console.log(`
      ${item} - $${sideMenu[item]} `);
    };
};



function selection(clearScreen) {
  const entree = window.prompt('Do you know which entree you would like tonight?');
  var total = dinnerEntrees[entree];
  if (dinnerEntrees[entree] > 25) {
    console.log('Excelent choice that is one of our best dishes.');
  } else if (dinnerEntrees[entree] < 25) {
        document.write('Great choice.');
  };
  setTimeout(function(){
      const sideOne = window.prompt('What is the first side you would like?');
      const sideTwo = window.prompt(`The ${sideOne} are my favorite. What would you like as a second side?`);
      total += dinnerSides[sideOne] + dinnerSides[sideTwo];
      console.log(`Great I will get that started your total will come to $${total}`);
  }, 4000);
};


displayMenu(dinnerEntrees, dinnerSides);
setTimeout(selection, 5000);

