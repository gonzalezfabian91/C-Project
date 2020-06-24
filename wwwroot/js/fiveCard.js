// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    let stringval= ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    let suits = ["Heart","Diamond","Spade","Club"];

    var deck;
    var dealerFiveHand;
    var playerFiveHand;
    
    function getDeck(){
        deck = [];
        for(var i = 0; i < suits.length; i++)
        {
            let Val=1;
            for(var x = 0; x < stringval.length; x++)
            {
                var card = {StringVal:stringval[x],Suit:suits[i], Value:Val};
                deck.push(card);
                Val++
            }
        }
        shuffle();
    }
    function clearFiveHands(){
        dealerFiveHand=[];
        playerFiveHand=[];
    }


    
    function deal(){
        return deck.pop();
    }


    function shuffle()
{
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
    }
    
}
            




    function DealFiveCards(){
        console.log("In 'DealAllCards' function");
        getDeck();
        clearFiveHands();


        for(var i=1;i<8;i++){
            let temp1=deal()
            let temp2=deal()
            $("#playerFive"+i+"").html("<h5>"+temp1+"</h5>");
            $("#dealerFive"+i+"").html('<img src="https://i.pinimg.com/originals/11/45/96/11459640e599fd105943f5a379d25248.jpg" alt="">');
            dealerFiveHand+=temp2;
            playerFiveHand+=temp1;

        }
        
        
    }

    $('#dealFive').on('click',()=>{
        DealFiveCards();
    });

    
    
    
});