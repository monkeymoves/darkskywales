var quotes = [
    "We scientists are clever — too clever — are you not satisfied? Is four square miles in one bomb not enough? Men are still thinking. Just tell us how big you want it!",
    "All mass is interaction", "You can't say A is made of B or vice versa.", "I had too much stuff. My machines came from too far away.", "The theoretical broadening which comes from having many humanities subjects on the campus is offset by the general dopiness of the people who study these things.", "In this age of specialization men who thoroughly know one field are often incompetent to discuss another. The great problems of the relations between one and another aspect of human activity have for this reason been discussed less and less in public.", "It doesn't seem to me that this fantastically marvelous universe, this tremendous range of time and space and different kinds of animals, and all the different planets, and all these atoms with all their motions, and so on, all this complicated thing can merely be a stage so that God can watch human beings struggle for good and evil — which is the view that religion has. The stage is too big for the drama." , "Hell, if I could explain it to the average person, it wouldn't have been worth the Nobel prize."]



function newQuote() {
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = '"'+ quotes[randomNumber] +'"';
    
};


$(document).ready(function() {
    
    
  $('#btn-2').on("click", function() {
    Quote = encodeURIComponent(document.getElementById('quoteDisplay').textContent); 

    var myUrl = 'https://twitter.com/intent/tweet?text=' + Quote ;
    window.open(myUrl, 'twitter');
    return false;
  });

 
});


