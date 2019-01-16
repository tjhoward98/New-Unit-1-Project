// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Variables

//I variable for counter

var i = 0 ;

// this html variable will hold all the string for the printQuote function
var html ;

/*
interValid uniquely identifies the interval
*/
var intervalID;

//Array which holds the objects about the quotes

var quotes = [

  {
    //Quote: which contains a string: the text of the quote that will be displayed on the page.
    quote: "What didn't kill me, it didn't make me stronger at all.",
    //Source: which contains a string: identifying the creator of the quote.
    source: "Ed Sheeran",
    //Citation: which contains a string: the text of the quote that will be displayed on the page.
    citation: "From the song called 'Drunk'",
    //Year: which contains a number identifying the year of the quote.
    year: 2012,
    tags: "Humor"
  },
  {
    quote: "I don’t count my sit-ups. When I feel pain, that’s when I start counting, because that’s when it really counts.",
    source: "Mohammed Ali",
    citation: "From a sport interview",
    year: 1970,
    tags: "Motivation"
  },
  {
    quote: "Learning never exhausts the mind.",
    source: "Leonardo Da Vinci",
    year:1498,
    tags: "Study"
  },
  {
    quote: "Life without love is like a tree without blossom or fruit",
    source: "Khalil Gibran",
    year: 1922,
    tags: "Love and Life"
  },
  {
    quote: "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
    source: "Satchel Paige",
    tags: "Life"
  },
  {
    quote: "Everything will be okay in the end. If it's not okay, then it's not the end.",
    source: "Ed Sheeran",
    tags: "Love and music"
  },

];

// Functions

/*
Tasks to do(checklist):

I. Selects a random quote OBJECT from the quotes array.
II. Returns the randomly selected quote object.

*/
//This function will help to change the quotes after 15 seconds

function delayedPrint () {

  var intervalID = window.setInterval(printQuote, 15000);

}

//Call the delayedPrint function to change the qutes after 15 seconds

delayedPrint();

// This function calls the GetRandomNumber function to get a random object from array 'quotes'

function getRandomQuote () {

  return quotes[getRandomNumber()];

}
//Generates a random number between 0 and 255 and create the RGB html string:

function getRandomRGBcolors() {

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var RGBcolor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.background = RGBcolor;
// I've changed the "Show another quote" button to transparent because when the background color has changed it remain green
// and looked terrible.Now it changes with the background.
}

// Generates a random number between 1 and the length of 'qoutes array'
function getRandomNumber () {

// this function is perfect, because it will less than 1 relative to the quotes.length (thanks to the Math.random which never gonna be 1)
var RandomNumber = Math.floor(Math.random()* quotes.length);
  return RandomNumber ;
}

//This function will print the random quote to the screen

function printQuote () {

// call the getRandomRGBcolors function to change the background color at the beginning

getRandomRGBcolors ();

// call the getRandomQuote function and put it in the myRandomquote variable

  var myRandomquote = getRandomQuote();


// concatinate the proper propeties :) to the html variable which we generated in the function's scope

      html = '<p class="quote"> '+ myRandomquote.quote + '</p>';

      html += '<p class="source"> ' + myRandomquote.source;



  // add flow to the program with if stastements

  // if the random object has a citation or year property or both

  if (myRandomquote.citation !== undefined || myRandomquote.year !== undefined){

  // if the random object has a citation and year property

      if (myRandomquote.citation !== undefined && myRandomquote.year !== undefined ){

  // add the value of the property and the template as a string to the variable html

        html += '<span class="citation">' + myRandomquote.citation + '</span>';
        html += '<span class="year">' + myRandomquote.year + '</span>';

  // if the random object has a citation property

      } else if (myRandomquote.citation !== undefined ){

        html += '<span class="citation">' + myRandomquote.citation + '</span>';

  // if the random object has a year property

      } else if ((myRandomquote.year !== undefined )){

        html += '<span class="year">' + myRandomquote.year + '</span>';

      }

  }

  // add the ending paragraph html tag at the end of the html variable even there was no citation or year property in the random Array

      html += '</p>'

      html += '<p class="tags">' + myRandomquote.tags + '<p>';


  // returns and displays the final HTML string to the page ( use this JS snippet to accomplish that )

document.getElementById('quote-box').innerHTML = html ;

}
