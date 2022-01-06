'use strict';

//card options
const cardArray = [
  {
    name: 'xv',
    img: 'foto-2.jpg',
  },
  {
    name: 'xv',
    img: 'foto-2.jpg',
  },
  {
    name: 'legacy',
    img: 'foto-3.jpg',
  },
  {
    name: 'legacy',
    img: 'foto-3.jpg',
  },
  {
    name: 'ferrari',
    img: 'foto-4.jpg',
  },
  {
    name: 'ferrari',
    img: 'foto-4.jpg',
  },
  {
    name: 'lambo',
    img: 'foto-5.jpg',
  },
  {
    name: 'lambo',
    img: 'foto-5.jpg',
  },
  {
    name: 'forester',
    img: 'foto-6.jpg',
  },
  {
    name: 'forester',
    img: 'foto-6.jpg',
  },
  {
    name: 'impreza',
    img: 'foto-7.jpg',
  },
  {
    name: 'impreza',
    img: 'foto-7.jpg',
  },
  {
    name: 'jeep',
    img: 'foto-8.jpg',
  },
  {
    name: 'jeep',
    img: 'foto-8.jpg',
  },
  {
    name: 'formula',
    img: 'foto-9.jpg',
  },
  {
    name: 'formula',
    img: 'foto-9.jpg',
  },
  {
    name: 'mariana',
    img: 'foto-18.jpg',
  },
  {
    name: 'mariana',
    img: 'foto-18.jpg',
  },
  {
    name: 'subaru',
    img: 'foto-20.jpg',
  },
  {
    name: 'subaru',
    img: 'foto-20.jpg',
  },
  {
    name: 'megocha',
    img: 'foto-21.jpg',
  },
  {
    name: 'megocha',
    img: 'foto-21.jpg',
  },
  {
    name: 'tako',
    img: 'foto-22.jpg',
  },
  {
    name: 'tako',
    img: 'foto-22.jpg',
  },
];
////play sound
function play(className) {
  let audio = document.querySelector(className);
  audio.play();
}

const an = document.querySelector('.anara');
const cal = document.querySelector('.calipso');
const anPause = document.querySelector('.anaraPause');
const calPause = document.querySelector('.calipsoPause');
const end = document.querySelector('.endlessly');
const endPause = document.querySelector('.endlesslyPause');
an.addEventListener('click', () => {
  play('.anaramusic');
});
anPause.addEventListener('click', () => {
  document.querySelector('.anaramusic').pause();
});
cal.addEventListener('click', () => {
  play('.calipsomusic');
});
calPause.addEventListener('click', () => {
  document.querySelector('.calipsomusic').pause();
});
end.addEventListener('click', () => {
  play('.endlesslymusic');
});
endPause.addEventListener('click', () => {
  document.querySelector('.endlesslymusic').pause();
});

////
//randomly mixing cardArray
cardArray.sort(() => 0.5 - Math.random());
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
const grid = document.querySelector('.grid');
// const resultDisplay = document.querySelector('#result');
//create board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'foto-1.jpg');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

//check for matches
function checkForMatch() {
  let cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    play('.openSound');
    alert('you found a match');
    cards[optionOneId].setAttribute('src', 'foto-0.jpg');
    cards[optionTwoId].setAttribute('src', 'foto-0.jpg');
    console.log(cardsChosenId[0].src, cardsChosenId[1].src);
  } else {
    play('.missSound');
    alert('nope, try again');

    cards[optionOneId].setAttribute('src', 'foto-1.jpg');
    cards[optionTwoId].setAttribute('src', 'foto-1.jpg');
    console.log(optionOneId, optionTwoId);
  }
  cardsChosen = [];
  cardsChosenId = [];
}

//flip your card
function flipCard() {
  play('.clickSound');
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}

createBoard();
