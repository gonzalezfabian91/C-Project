// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    let stringval= ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    let suits = ["Heart","Diamond","Spade","Club"];

    var deck;
    var dealerSevenHand;
    var playerSevenHand;
    
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
    function clearHands(){
        dealerSevenHand=[];
        playerSevenHand=[];
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
            




    function DealSevenstudCards(){
        console.log("In 'DealAllCards' function");
        getDeck();
        clearHands();


        for(var i=1;i<8;i++){
            let temp1=deal()
            let temp2=deal()
            $("#playerseven"+i+"").html("<h5>"+temp1+"</h5>");
            $("#dealerseven"+i+"").html("<h5>"+temp2+"</h5>");
            dealerSevenHand+=temp2;
            playerSevenHand+=temp1;

        }
        
        
    }

    $('#dealseven').on('click',()=>{
        DealSevenstudCards();
    });

    
    
    
});