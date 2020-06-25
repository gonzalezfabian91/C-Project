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
  let suits = ["Heart", "Diamond", "Spade", "Club"];

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
        Suit: suits[0],
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

  for (i = 0; i < 53; i++) {}

  function _calculate(cards: Card[]): PokerHandResult {
    // determine value of hand

    let ranked: Card[][] = _ranked(cards);
    let isFlush = _isFlush(cards);
    let isStraight = _isStraight(ranked);

    if (isStraight && isFlush && ranked[0][0].rank == "ace")
      return _result(cards, "royal flush", _value(ranked, 9));
    else if (isStraight && isFlush)
      return _result(cards, "straight flush", _value(ranked, 8));
    else if (ranked[0].length == 4)
      return _result(cards, "four of a kind", _value(ranked, 7));
    else if (ranked[0].length == 3 && ranked[1].length == 2)
      return _result(cards, "full house", _value(ranked, 6));
    else if (isFlush) return _result(cards, "flush", _value(ranked, 5));
    else if (isStraight) return _result(cards, "straight", _value(ranked, 4));
    else if (ranked[0].length == 3)
      return _result(cards, "three of a kind", _value(ranked, 3));
    else if (ranked[0].length == 2 && ranked[1].length == 2)
      return _result(cards, "two pair", _value(ranked, 2));
    else if (ranked[0].length == 2)
      return _result(cards, "one pair", _value(ranked, 1));
    else return _result(cards, "high card", _value(ranked, 0));
  }

  $("#dealFive").on("click", () => {
    DealFiveCards();
  });
});
