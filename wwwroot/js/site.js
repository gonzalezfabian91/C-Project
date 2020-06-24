// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    let stringval= ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    let suits = ["Heart","Diamond","Spade","Club"];

    // var deck;
    // var hand;

    function reset(deck){
        console.log("In 'RESET' function");
        deck=[];
        console.log(deck)
        for(var i = 0; i < suits.length; i++)
        {
            for(var x = 0; x < stringval.length; x++)
            {
            var card = stringval[x]+suits[i];
            deck.push(card);
            }
        }

        return deck;

    }
    
    function getDeck (){
        let deck= [];
        for(var i = 0; i < suits.length; i++)
        {
            for(var x = 0; x < stringval.length; x++)
            {
                var card = stringval[x]+suits[i];
                deck.push(card);
            }
        }

        return deck;

    }
    function deal(deck){
        console.log("In 'DEAL' function");
        let yourcard=deck[0];
        deck.splice(0,1);
        return yourcard;

    }


    function shuffle(deck)
{
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
    }
    return deck
}
            

    let newdeck = shuffle(getDeck());
    console.log("NewDeck", newdeck);



    function DealAllCards(deck){
        console.log("In 'DealAllCards' function");
        let thisdeck=shuffle(reset(deck));
        
        $("#playerseven1").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#dealerseven1").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#playerseven2").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#dealerseven2").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#playerseven3").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#dealerseven3").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#playerseven4").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#dealerseven4").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#playerseven5").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#dealerseven5").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#playerseven6").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#dealerseven6").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#playerseven7").html("<h5>"+deal(thisdeck)+"</h5>");
        $("#dealerseven7").html("<h5>"+deal(thisdeck)+"</h5>");
    }

    $('#deal').on('click',()=>{
        console.log("clicked DEAL button");
        DealAllCards();
    });
    
});