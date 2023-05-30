


/* Adults Version  */
const blueDeck = ["Is a compound word", "Has two vowels next to each other",
  "Is not a plural word", "Is three or four letters long", "Has exactly four syllables", "Does not have more than three different consonants", "Has a double consonant", "Has an even number of letters", "Has an odd number of letters", "Has an equal number of vowels and consonants", "Is exactly eight letters long", "Has exactly one syllable", "Has at least two different vowels", "Has a double vowel", "Has a double letter", "Is exactly nine letters long"];

const yellowDeck = ["The title of TV show", "Associated with music", "Associated with money", "Associated with school", "Associated with sports", "Associated with parties", "Associated with the beach", "Associated with vacations", "Associated with literature", "An item found in a kitchen", "A type of animal", "Associated with space", "Associated with countries", "An item found at the office", "A type of food"];

const redDeck = ["Begins with the letter A", "Begins with the letter P", "Begins with the letter T", "Begins with the letter S", "Cannot contain the letter L", "Ends with the letter E", "Ends with the letter R", "Contains the letter C", "Contains the letter H", "Contains the letter J", "Contains the letters PL", "Contains the letter V"];



/* Kindies Version  */
const blueDeckKindies = ["Uses the vowel a", "Uses the vowel e", "Uses the vowel i", "Uses the vowel o", "Uses the vowel u", "Has three or more letters", "Has an even amount of letters", "Has an odd number of letters", "Has exactly one syllable", "Has at least two different vowels", "Uses the letter b", "Uses the letter c", "Uses the letter d", "Uses the letter f", "Uses the letter g", "Uses the letter h", "Uses the letter j", "Uses the letter k", "Uses the letter l", "Uses the letter m", "Uses the letter n", "Uses the letter p", "Uses the letter r", "Uses the letter s", "Uses the letter t", "Uses the letter v", "Uses the letter w", "Uses the letter y"];

const yellowDeckKindies = ["Related to weather", "Is a vegetable", "Is a fruit", "Related to numbers", "Related to music", "Is a color", "Related to school", "Related to sports", "Related to parties", "Related to the beach", "Related to holidays", "Related to books", "An item found in a kitchen", "A type of animal", "Related to space", "Related to shapes", "A type of food", "Related to feelings", "Related to insects and bugs", "Related to body parts", "Related to countries",];


const redDeckKindies = ["Begins with the letter A", "Begins with the letter P", "Begins with the letter T", "Begins with the letter S", "Cannot contain the letter L", "Ends with the letter E", "Ends with the letter R", "Contains the letter C", "Contains the letter H", "Contains the letter J", "Contains the letters PL", "Contains the letter V"];




/*
writeItem('yellow-deck', 'yellow-card', yellowDeck, yellowDeckKindies);
writeItem('blue-deck', 'blue-card', blueDeck, blueDeckKindies);
writeItem('red-deck-kindies', 'red-card', redDeck, redDeckKindies);

*/




/* Function: Write Item for Kindies */
const animalCard = 'A type of animal';
var yellowCardID = document.getElementById('yellow-card');


/* Function: Write Item */
function writeItem(_deckID, _cardID, array) {

  const zLetters = ["Contains the letter z", "Begins with the letter z"];
  const joinedArray = blueDeckKindies.concat(zLetters);

  document.getElementById(_deckID).addEventListener('click', () => {

    // Deck Call not from Kindies Yellow Deck
    if (_deckID === 'blue-deck-kindies') {

      array = blueDeckKindies;
      document.getElementById(_cardID).innerHTML = shuffleAndPop(array);
      console.log('Using Basic Blue Kindies array');

      if (yellowCardID.innerHTML == animalCard && _cardID == 'blue-card-kindies') {
        document.getElementById(_cardID).innerHTML = shuffleAndPop(joinedArray);

        console.log('Using Joined Array');
      }
    }

    else if (_deckID === 'yellow-deck-kindies') {
      array = yellowDeckKindies;

      document.getElementById(_cardID).innerHTML = shuffleAndPop(array);
      console.log('Using Basic Yellow Kindies array');

      if (yellowCardID.innerHTML == animalCard && _cardID == 'blue-card-kindies') {
        document.getElementById(_cardID).innerHTML = shuffleAndPop(joinedArray);

        console.log('Using Joined Array');
      }
    }
    else if(_deckID === 'red-deck-kindies') {
      array = redDeckKindies;
      document.getElementById(_cardID).innerHTML = shuffleAndPop(array);
      console.log('Using Basic Red Kindies array');
    }
  
    else if(_deckID === 'red-deck') {

    array = redDeck;
      document.getElementById(_cardID).innerHTML = shuffleAndPop(array);
      console.log('Using Red array');
    }
    else if(_deckID === 'yellow-deck') {  

      array = yellowDeck;
        document.getElementById(_cardID).innerHTML = shuffleAndPop(array);
        console.log('Using Yellow array');
      }
      else if(_deckID === 'blue-deck') {

        array = blueDeck;
          document.getElementById(_cardID).innerHTML = shuffleAndPop(array);
          console.log('Using Blue array');
        }

  })
}




/* Function: Shuffle Cards on click */
function shuffleAndPop(array) {
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Loop through the shuffled array until an unused value is found
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (!shuffleAndPop.usedValues.includes(value)) {
      shuffleAndPop.usedValues.push(value);
      return value;
    }
  }

  // If all values have been used, reset the usedValues array and try again
  shuffleAndPop.usedValues = [];
  return shuffleAndPop(array);
}

// Keep track of used values in a separate array
shuffleAndPop.usedValues = [];









// JavaScript code to flip cards on click
function flipCards(deckColor, card) {

  const deck = document.querySelector(deckColor);
  const cards = document.querySelectorAll(card);

  let flipped = false;
  let activeCard = 0;

  deck.addEventListener('click', () => {
    if (flipped) {
      cards[activeCard].classList.remove('front');
      activeCard++;
      if (activeCard >= cards.length) {
        activeCard = 0;
      }
      cards[activeCard].classList.add('front');
    } else {
      cards[activeCard].classList.add('front');
    }
    flipped = !flipped;
  });
}
