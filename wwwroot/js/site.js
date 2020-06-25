// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    let stringval= ["Ace","2","3","4","5","6","7","8","9","10","Jack","c","Queen","King"];
    let suits = ["Spade","Heart","Diamond","Club"];

    var deck;
    var dealerSevenHand=[];
    var playerSevenHand=[];
    
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
    function isRoyalFulsh(){
        for (var i =0;i<8;i++){
        if (playerSevenHand[i].Suit){

        }
    }
}

    
    function highCard(){

    }
    function eval(){

    }
            
    



    function DealSevenstudCards(){
        // console.log("In 'DealAllCards' function");
        getDeck();
        clearsevenHands();
        // console.log(deck);
        let temp1 =deal();
        let temp2 =deal();
        let temp3 =deal();
        let temp4 =deal();
        let temp5 =deal();
        let temp6 =deal();
        

            $("#playerseven1").html('<h1>'+temp1.Front+'</h1>');
            $("#dealerseven1").html('<h1>'+temp2.Back+'</h1>');
            $("#playerseven2").html('<h1>'+temp3.Front+'</h1>');
            $("#dealerseven2").html('<h1>'+temp4.Back+'</h1>');
            $("#playerseven3").html('<h1>'+temp5.Front+'</h1>');
            $("#dealerseven3").html('<h1>'+temp6.Front+'</h1>');
            dealerSevenHand.push(temp2);
            dealerSevenHand.push(temp4);
            dealerSevenHand.push(temp6);
            playerSevenHand.push(temp1);
            playerSevenHand.push(temp3);
            playerSevenHand.push(temp5);
            
        
        
        
    }

    $("#bet").on("click",function(){
        $(".button").html("<button id='dealseven'>Deal</button>");
        $(".bet").html("");


    
            $('#dealseven').on('click',function(){
                DealSevenstudCards();
                $(".button").html("");
                $(".bet").html("<button id='bet' >Bet</button>");
                
                
                $("#bet").on("click",function(){
                    let temp7 =deal();
                    let temp8 =deal();
                    $(".bet").html("");
                    $(".button").html("<button id='deal'>Deal</button>");

                    
                    $('#deal').on('click',function(){
                        $(".button").html("");
                        $(".bet").html("<button id='bet' >Bet</button>");

                        $("#playerseven4").html('<h1>'+temp7.Front+'</h1>');
                        $("#dealerseven4").html('<h1>'+temp8.Front+'</h1>');
                        
                        playerSevenHand.push(temp7);
                        dealerSevenHand.push(temp8);


                        $("#bet").on("click",function(){
                            let temp9 =deal();
                            let temp10 =deal();
                            $(".bet").html("");
                            $(".button").html("<button id='deal'>Deal</button>");

                            $('#deal').on('click',function(){
                                $(".button").html("");
                                $(".bet").html("<button id='bet' >Bet</button>");
                                
                                $("#playerseven5").html('<h1>'+temp9.Front+'</h1>');
                                $("#dealerseven5").html('<h1>'+temp10.Front+'</h1>');
                                
                                playerSevenHand.push(temp9);
                                dealerSevenHand.push(temp10);
        
                                $("#bet").on("click",function(){
                                    let temp11 =deal();
                                    let temp12 =deal();
                                    $(".bet").html("");
                                    $(".button").html("<button id='deal'>Deal</button>");

                                    $('#deal').on('click',function(){
                                        $(".button").html("");
                                        $(".bet").html("<button id='bet' >Bet</button>");
                                        
                                        $("#playerseven6").html('<h1>'+temp11.Front+'</h1>');
                                        $("#dealerseven6").html('<h1>'+temp12.Front+'</h1>');
                                        
                                        playerSevenHand.push(temp11);
                                        dealerSevenHand.push(temp12);

                                        $("#bet").on("click",function(){
                                            let temp13 =deal();
                                            let temp14 =deal();
                                            $(".bet").html("");
                                            $(".button").html("<button id='deal'>Deal</button>");
                                        
                                            $('#deal').on('click',function(){
                                            $(".button").html("");
                                            $(".bet").html("<button id='bet' >Bet</button>");
                                            
                                            $("#playerseven7").html('<h1>'+temp13.Front+'</h1>');
                                            $("#dealerseven7").html('<h1>'+temp14.Back+'</h1>');
                                            
                                            playerSevenHand.push(temp13);
                                            dealerSevenHand.push(temp14);
                                            $("#bet").on("click",function(){
                                                for (var i=0;i<=7;i++){
                                                    $("#dealerseven"+(i+1)+"").html('<h1>'+dealerSevenHand[i].Front+'</h1>');

                                                }
                                                });
                                            });
                                    });
                                    });
                                });
                            });
                        });
                    });



                    
                });


                
            });
});

    
    
    
});