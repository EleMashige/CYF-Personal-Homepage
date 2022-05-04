var fruits;


fruits = ['Rock climbing', 'Surfing', 'Going for drives', 'Visit the townshps',];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!fruits.length) {
    let new_li = document.createElement('li');
    new_li.innerText = fruits.shift();

    element_list.appendChild(new_li);
  }
  });

var expenses, earnings, total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function addTotal() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  total.push(getNumberOrString(document.getElementById('text').value));
  let element_sum = document.getElementById('sum');
  element_sum.innerText = total.reduce((a,b) => a+b, 0);
}


expenses = [];
earnings = [];
total = [];


document.getElementById('add').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) >= '0') {
    earnings.push(getNumberOrString(document.getElementById('text').value));
    addTotal();
    let element_earnings_list = document.getElementById('earnings-list');
    let new_li = document.createElement('li');
    new_li.innerText = earnings.slice(-1)[0];

    element_earnings_list.appendChild(new_li);
  } else {
    expenses.push(getNumberOrString(document.getElementById('text').value));
    addTotal();
    let element_expenses_list = document.getElementById('expenses-list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = expenses.slice(-1)[0];

    element_expenses_list.appendChild(new_li2);
  }

});

document.getElementById('total').addEventListener('click', (event) => {
  let element_sum2 = document.getElementById('sum');
  element_sum2.innerText = total.reduce((a,b) => a+b, 0);

});


var pics, animal_name;


pics = ['https://media.istockphoto.com/photos/little-cute-maltipoo-puppy-picture-id1324226429?b=1&k=20&m=1324226429&s=170667a&w=0&h=jVdl7WMUEQLcpy3A32cLkp8QozaXUmrU3oBFhzNroCQ= ', 'https://media.istockphoto.com/photos/young-black-and-white-cow-heifer-in-a-meadow-looking-in-the-camera-picture-id1319467946?b=1&k=20&m=1319467946&s=170667a&w=0&h=2FuUJG87cC5d2-WXSCVnUStaVcrq3kg2_SP_6xJeerw=', 'https://media.istockphoto.com/photos/baby-sheep-close-up-picture-id1164046558?b=1&k=20&m=1164046558&s=170667a&w=0&h=TVfdRQPzOGNaqOym09WCw-GCYE5NmCdnHqk5t1QRThw='];
animal_name = ['Dog', 'Cow', 'Sheep'];
let element_animal_name = document.getElementById('animal-name');
element_animal_name.setAttribute("src", pics[0]);
element_animal_name.innerText = animal_name[0];


document.getElementById('next').addEventListener('click', (event) => {
  animal_name.push(animal_name.shift());
  pics.push(pics.shift());
  let element_pics = document.getElementById('pics');
  element_pics.setAttribute("src", pics[0]);
  let element_animal_name2 = document.getElementById('animal-name');
  element_animal_name2.innerText = animal_name[0];

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  animal_name.unshift(animal_name.pop());
  pics.unshift(pics.pop());
  let element_pics3 = document.getElementById('pics');
  element_pics3.setAttribute("src", pics[0]);
  let element_animal_name3 = document.getElementById('animal-name');
  element_animal_name3.innerText = animal_name[0];

});