$(document).ready(function(event) {

  $("#goButton").click(function(event) {
    event.preventDefault();
    var suits = ["Spades", "Hearts", "Diamonds", "Clubs"]
    var deck = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]

    var newDeck = [];

      suits = suits.forEach(function(suit)
      {
         deck.map(function(card) {
           newDeck.push((card + " of " + suit));
         })
       })
      console.log(newDeck);
      $("#output").append(newDeck.toString(" "));
    });
  });
