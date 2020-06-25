// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
  let stringval = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  let suitnames = ["Heart", "Diamond", "Spade", "Club"];

  var deck;
  var dealerFiveHand;
  var playerFiveHand;

  function getDeck() {
    deck = [];
    let frontSpade = "&#127137;";
    let frontHeart = "&#127153;";
    let frontDiamond = "&#127169;";
    let frontClub = "&#127185;";
    let Val = 1;

    for (var x = 0; x < stringval.length; x++) {
      var card = {
        StringVal: stringval[x],
        Suit: suitnames[0],
        Value: Val,
        Back: "&#127136",
        Front: frontSpade,
      };
      deck.push(card);
      front = "&#1271" + (37 + Val) + ";";
      Val++;
    }
    for (var x = 0; x < stringval.length; x++) {
      var card = {
        StringVal: stringval[x],
        Suit: suits[1],
        Value: Val,
        Back: "&#127136",
        Front: frontHeart,
      };
      deck.push(card);
      front = "&#1271" + (53 + Val) + ";";
      Val++;
    }
    for (var x = 0; x < stringval.length; x++) {
      var card = {
        StringVal: stringval[x],
        Suit: suits[2],
        Value: Val,
        Back: "&#127136",
        Front: frontDiamond,
      };
      deck.push(card);
      front = "&#1271" + (69 + Val) + ";";
      Val++;
    }
    for (var x = 0; x < stringval.length; x++) {
      var card = {
        StringVal: stringval[x],
        Suit: suits[3],
        Value: Val,
        Back: "&#127136",
        Front: frontClub,
      };
      deck.push(card);
      front = "&#1271" + (85 + Val) + ";";
      Val++;
    }
    shuffle();
  }
  function clearFiveHands() {
    dealerFiveHand = [];
    playerFiveHand = [];
  }

  function deal() {
    return deck.pop();
  }

  function shuffle() {
    for (var i = 0; i < 1000; i++) {
      var location1 = Math.floor(Math.random() * deck.length);
      var location2 = Math.floor(Math.random() * deck.length);
      var tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }

  function DealFiveCards() {
    console.log("In 'DealAllCards' function");
    getDeck();
    clearFiveHands();

    for (var i = 1; i < 8; i++) {
      let temp1 = deal();
      let temp2 = deal();
      $("#playerFive" + i + "").html("<h1>" + temp1.Front + "</h1>");
      $("#dealerFive" + i + "").html("<h1>" + temp1.Back + "</h1>");
      dealerFiveHand += temp2;
      playerFiveHand += temp1;
    }
  }

  var typeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //We establish the names of the different suits.

  //Now we can generate individual cards by picking two random numbers, one for the suit and the other for the value.

  function getCard() {
    var suit = suitNames[Math.floor(Math.random() * 4)];
    var valueLocation = Math.floor(Math.random() * 13);
    var value = cardTypes[valueLocation];
    return value + suit;
  }

  //We can then generate a hand by generating five cards and grouping them in an array...

  function getHand() {
    var hand = [];
    for (var card = 1; card <= 5; card++) {
      var nextCard = getCard();
      //...but since a hand should never have two of the exact same card, if we generate something that's already in our hand we backpedal and generate a new card.
      if (hand.indexOf(nextCard) > 0) {
        card--;
        let decrementValue = cardTypes.indexOf(
          nextCard.slice(0, nextCard.lastIndexOf(" ") + 1)
        );
        continue;
      }
      hand.push(nextCard);
    }
    return hand;
  }

  //Since cards are just a descriptive string and don't actually know what suit and value they are, this function will let us scan the string and return what suit the card is.

  function findSuit(card) {
    var suitLocation = card.lastIndexOf(" ") + 1;
    return card.slice(suitLocation, card.length);
  }

  //Now we can start evaluating for patterns in the hand to figure out what our result is.  First we check for a straight.

  function straightCheck() {
    //We start by finding the lowest value that appears once in the hand.
    let start = typeCount.indexOf(1);
    //If there are no values that appear exactly once, we don't have a straight.
    if (start === -1) {
      return false;
    }
    //If the lowest represented value is better than a 10, we don't have a straight.
    if (typeCount.length - 5 < start) {
      return false;
    }
    //And if the next four higher values aren't represented exactly once, we don't have a straight.
    for (let i = start + 1; i < start + 5; i++) {
      if (typeCount[i] !== 1) {
        return false;
      }
    }
    //If we haven't hit a false result, then we have a straight.
    return true;
  }

  //Then we check for a flush.

  function flushCheck(hand) {
    //We do this by looking at each card in the hand except the first.  If its suit is different from the card before it, we don't have a flush.
    for (var card = 1; card < hand.length; card++) {
      if (findSuit(hand[card]) !== findSuit(hand[card - 1])) {
        return false;
      }
    }
    //But if each card passes the test, we have a flush.
    return true;
  }

  //Now that we can check for both a straight and a flush, it's pretty simple to check for a straight flush.

  function straightFlushCheck(hand) {
    //console.log(straightCheck());
    //console.log(flushCheck(hand));
    return straightCheck() === true && flushCheck(hand) === true;
  }

  //We can also check for a royal flush by running our flush check alongside a custom straight check that only evaluates number of occurences of the five highest values.

  function royalFlushCheck(hand) {
    for (let i = 8; i < typeCount.length; i++) {
      if (typeCount[i] !== 1) {
        return false;
      }
    }
    return flushCheck(hand);
  }

  //We can check for a full house by seeing if a value is represented twice and another is represented three times.

  function fullHouseCheck() {
    if (typeCount.indexOf(2) > -1 && typeCount.indexOf(3) > -1) {
      return true;
    }
    return false;
  }

  //We can also find a two-pair by seeing whether two different values are represented twice.

  function twoPairCheck() {
    if (
      typeCount.indexOf(2) > -1 &&
      typeCount.indexOf(2) !== typeCount.lastIndexOf(2)
    ) {
      return true;
    }
    return false;
  }

  //Four of a kind and three of a kind are even easier to check...

  function fourOfAKindCheck() {
    return typeCount.indexOf(4) !== -1;
  }

  function threeOfAKindCheck() {
    return typeCount.indexOf(3) !== -1;
  }

  //...but for a single pair, we need to evaluate the value of the duplicate by finding its index in the typeCount and pulling its name as a string from the names in cardTypes.

  function pairCheck() {
    if (typeCount.indexOf(2) === -1) {
      return false;
    }
    let pairValue = cardTypes[typeCount.indexOf(2)].slice(
      0,
      cardTypes[typeCount.indexOf(2)].indexOf(" ")
    );
    //if(pairValue.length>2){
    pairValue += "s";
    //}
    return "Pair of " + pairValue;
  }

  //We also get the name if our hand is a measly high card.

  function highCard() {
    for (let i = typeCount.length; i > 0; i--) {
      if (typeCount[i] === 1) {
        return cardTypes[i].slice(0, cardTypes[i].indexOf(" ")) + " high";
      }
    }
  }

  //Now that we can check for all of the hands, we put them all together in a function that accepts a five-card hand, then runs each check in descending order from best hand to worst hand.  Once a hand is found, the function breaks and does not check for the lesser hands.

  function handCheck(hand) {
    console.log(hand);
    var cardValue = "";
    for (let card = 0; card < hand.length; card++) {
      cardValue = hand[card].slice(0, hand[card].lastIndexOf(" ") + 1);
      typeCount[cardTypes.indexOf(cardValue)]++;
    }
    //console.log(typeCount);
    if (royalFlushCheck(hand) === true) {
      return "Royal flush!";
    }
    if (straightFlushCheck(hand) === true) {
      return "Straight flush";
    }
    if (fourOfAKindCheck() === true) {
      return "Four of a kind";
    }
    if (fullHouseCheck() === true) {
      return "Full house";
    }
    if (flushCheck(hand) === true) {
      return "Flush";
    }
    if (straightCheck() === true) {
      return "Straight";
    }
    if (threeOfAKindCheck() === true) {
      return "Three of a kind";
    }
    if (twoPairCheck() === true) {
      return "Two pair";
    }
    if (pairCheck() !== false) {
      return pairCheck();
    }
    return highCard();
  }

  //Our final function just generates a random hand and runs it through the checker.

  function pokerHand() {
    return handCheck(getHand());
  }

  pokerHand();

  pokerHand().on("click", () => {
    DealFiveCards();
  });
});
