// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    let stringval= ["Ace","2","3","4","5","6","7","8","9","10","Jack","c","Queen","King"];
    let suits = ["Spade","Heart","Diamond","Club"];

    var deck;
    var dealerSevenHand;
    var playerSevenHand;
    
    function getDeck(){
        deck = [];
        let frontspade ="&#127137;"
        let frontheart ="&#127153;"
        let frontdiamond ="&#127169;"
        let frontclub ="&#127185;"
        let Val=1;
        
            for(var x = 0; x < stringval.length; x++)
            {
                
                var card = {StringVal:stringval[x],Suit:suits[0], Value:Val, Back: "&#127136;", Front: frontspade};
                deck.push(card);
                frontspade = "&#1271"+(37+Val)+";"; 
                Val++;
            }
            deck.splice(11,1)
            Val = 1;
            for(var x = 0; x < stringval.length; x++)
            {
                var card = {StringVal:stringval[x],Suit:suits[1], Value:Val, Back: "&#127136;", Front: frontheart};
                deck.push(card);
                frontheart = "&#1271"+(53+Val)+";"; 
                Val++;
            }
            deck.splice(24,1)
            Val = 1;
            for(var x = 0; x < stringval.length; x++)
            {
                var card = {StringVal:stringval[x],Suit:suits[2], Value:Val, Back: "&#127136;", Front: frontdiamond};
                deck.push(card);
                frontdiamond = "&#1271"+(69+Val)+";"; 
                Val++;
            }
            deck.splice(37,1)
            Val = 1;
            for(var x = 0; x < stringval.length; x++)
            {
                var card = {StringVal:stringval[x],Suit:suits[3], Value:Val, Back: "&#127136;", Front: frontclub};
                deck.push(card);
                frontclub = "&#1271"+(85+Val)+";"; 
                Val++;
            }
            deck.splice(50,1)
        
        shuffle();
    }
    function clearsevenHands(){
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
        clearsevenHands();
        console.log(deck);


        for(var i=1;i<8;i++){
            let temp1=deal()
            let temp2=deal()
            $("#playerseven"+i+"").html('<h1>'+temp1.Front+'</h1>');
            $("#dealerseven"+i+"").html('<h1>'+temp2.Back+'</h1>');
            dealerSevenHand+=temp2;
            playerSevenHand+=temp1;
            
        }
        console.log("player cards");
        for (let i = 0; i<playerSevenHand.length; i++){
            console.log(`player card ${i+1}`, playerSevenHand);
        }
        console.log("Dealer cards");
        for (let i = 0; i<playerSevenHand.length; i++){
            console.log(`dealer card ${i+1}`, dealerSevenHand);
        }
        
        
    }

    $('#dealseven').on('click',()=>{
        DealSevenstudCards();
    });

    
    
    
});