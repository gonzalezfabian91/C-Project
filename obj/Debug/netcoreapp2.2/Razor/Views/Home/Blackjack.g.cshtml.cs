#pragma checksum "C:\Users\Fabian\Desktop\Casino\Views\Home\Blackjack.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "52bc4f5c4d80cf6c03fed23b05b835c99dda30f7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Blackjack), @"mvc.1.0.view", @"/Views/Home/Blackjack.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Blackjack.cshtml", typeof(AspNetCore.Views_Home_Blackjack))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Fabian\Desktop\Casino\Views\_ViewImports.cshtml"
using Casino;

#line default
#line hidden
#line 2 "C:\Users\Fabian\Desktop\Casino\Views\_ViewImports.cshtml"
using Casino.Models;

#line default
#line hidden
#line 3 "C:\Users\Fabian\Desktop\Casino\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"52bc4f5c4d80cf6c03fed23b05b835c99dda30f7", @"/Views/Home/Blackjack.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e774cbbaa6a2008077596e426dd893a724de106d", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Blackjack : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 35, true);
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            EndContext();
            BeginContext(35, 204, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "52bc4f5c4d80cf6c03fed23b05b835c99dda30f73436", async() => {
                BeginContext(41, 191, true);
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Blackjack</title>\r\n    <link rel=\"stylesheet\" href=\"css/blackstyle.css\">\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(239, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(241, 4968, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "52bc4f5c4d80cf6c03fed23b05b835c99dda30f74826", async() => {
                BeginContext(247, 3908, true);
                WriteLiteral(@"
    <script>
        $(document).ready(function(){
            let suits = [""Spades"", ""Hearts"", ""Diamonds"", ""Clubs""];
            let stringval = [""Ace"", ""2"", ""3"", ""4"", ""5"", ""6"", ""7"", ""8"", ""9"", ""10"", ""Jack"", ""C"", ""Queen"", ""King""]
            
            var deck;
            var dealerblackjack;
            var playerblackjack;

            //this will create the deck of card from the var above
            function Deck(){
                deck = [];
                let frontspade = ""&#127137;""
                let frontheart = ""&#127153;""
                let frontdiamond = ""&#127137;""
                let frontclub = ""&#127137;""
                let Val = 1;

                    for(var x = 0; x < stringval.length; x++)
                    {
                        var card = {Stringval:stringval[x],Suit:suits[0], Value:Val, Back:""&#127136;"", Front:frontspade};
                        deck.push(card);
                        frontspade = ""&#1271""+(37+Val)+"";"";
                        Va");
                WriteLiteral(@"l++;
                    }
                    deck.splice(11,1)
                    Val = 1;
                    for(var x = 0; x < stringval.length; x++)
                    {
                        var card = {StringVal:stringval[x],Suit:suits[1], Value:Val, Back: ""&#127136;"", Front:frontheart};
                        deck.push(card);
                        frontheart = ""&#1271""+(53+Val)+"";""; 
                        Val++;
                    }
                    deck.splice(24,1)
                    Val = 1;
                    for(var x = 0; x < stringval.length; x++)
                    {
                        var card = {StringVal:stringval[x],Suit:suits[2], Value:Val, Back: ""&#127136;"", Front:frontdiamond};
                        deck.push(card);
                        frontdiamond = ""&#1271""+(69+Val)+"";""; 
                        Val++;
                    }
                    deck.splice(37,1)
                    Val = 1;
                    for(var x = 0; x < stringv");
                WriteLiteral(@"al.length; x++)
                    {
                        var card = {StringVal:stringval[x],Suit:suits[3], Value:Val, Back: ""&#127136;"", Front:frontclub};
                        deck.push(card);
                        frontclub = ""&#1271""+(85+Val)+"";""; 
                        Val++;
                    }
                    deck.splice(50,1)
                Shuffle();
            }

            function clearhands()
            {
                dealerblackjack = [];
                playerblackjack = [];
            }

            function Deal()
            {
                return deck.pop();
            }
            //this will shuffle the deck of cards
            function Shuffle()
            {
                for(var i = 0; i < 1000; i++)
                {
                    var location1 = Math.floor((Math.random() * deck.length));
                    var location2 = Math.floor((Math.random() * deck.length));
                    var temp = deck[location1];

    ");
                WriteLiteral(@"                deck[location1] = deck[location2]
                    deck[location2] = temp;
                }
            }

            function DealBlackJack()
            {
                Deck();
                clearhands();
                
                for(var i = 1; i < 3; i++){
                    let temp1 = Deal()
                    let temp2 = Deal()
                    $(""#playercard"" + i + """").html('<h1>'+ temp1.Front +'</h1>');
                    $(""#dealercard""+ i + """").html('<h1>'+temp2.Back+'</h1>');
                    dealerblackjack += temp2;
                    playerblackjack += temp1;
                }
            }

            $('#Deal').on('click',()=>{
                Deal();
            });
        });
    </script>
    <h1 class=""text-center"">Welcome to Blackjack ");
                EndContext();
                BeginContext(4156, 38, false);
#line 110 "C:\Users\Fabian\Desktop\Casino\Views\Home\Blackjack.cshtml"
                                            Write(Context.Session.GetString("FirstName"));

#line default
#line hidden
                EndContext();
                BeginContext(4194, 1008, true);
                WriteLiteral(@"</h1>
    <div class=""blackjackcontainer"">
        <div class=""body text-center"">
            <div class=""DealerHand"" id=""Dealer"">
                <h3 class=""dealertext"">Dealers Hand</h3>
                <div class=""col-1 Cards"" id=""dealercard1""></div>
                <div class=""col-1 Cards"" id=""dealercard2""></div>
                <div class=""col-2""></div>
            </div>
            <div class=""PlayerHand"" id=""Player"">
                <h3 class=""playertext"">Players Hand</h3>
                <div class=""col-1 Cards"" id=""playercard1""></div>
                <div class=""col-1 Cards"" id=""playercard2""></div>
                <div class=""col-2""></div>
            </div>
        </div>
        <div class=""buttons text-center"">
            <a href="""" class=""btn btn-secondary ml-5 mr-5"" id=""Stay"">Stay</a>
            <a href="""" class=""btn btn-secondary ml-2 mr-5"" id=""Deal"">Deal</a>
            <a href="""" class=""btn btn-secondary mr-5"" id=""Hit"">Hit</a>
        </div>
    </div>
");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(5209, 10, true);
            WriteLiteral("\r\n</html> ");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591