// FSJS - Random Quote Generator

// This creates the array of quote objects
let quotes = [
  {
      quote : 'Entitlement and lack of patience are the frameworks as to why people aren\'t successful.',
      source : 'Gary vaynerchuk',
      citation : 'Instagram',
      year : 2018
  },

  {
    quote : 'It doesn\'t matter what they think.',
    source : 'Gary vaynerchuk',
    citation : 'Instagram',
    year : 2018
  },

  {
    quote : 'The purpose of training is to tighten up the slack, toughen the body, and polish the spirit.',
    source : 'Morihei Ueshiba',
    citation : 'brainyquotes',
    year : 2018
  },

  {
    quote : 'Take care of your body. It\'s the only place you have to live.',
    source : 'Jim Rohn',
    citation : 'brainyquotes',
    year : 2018
  },

  {
    quote : 'First solve the problem, Then write code',
    source : 'John Johnson',
    citation : 'Google',
    year: ''
  },

  {
    quote : 'The strength of JavaScript is that you can do anything. The weakness is that you will.',
    source : 'Reg Braithwaite',
    citation : 'twiitter',
    year: ''
  },

  {
    quote : 'Strive not to be a success, but rather to be of value.',
    source : 'Albert Einstein',
    citation : 'Forbes',
    year: ''
  },

  {
    quote : 'The mind is everything. What you think you become.',
    source : 'Buddha',
    citation : 'Forbes',
    year: ''
  }
];


// This generators a random quote

function getRandomQuote(array) {
  let getNumber =  Math.floor(Math.random()* quotes.length);

// This stops a quote from being printed twice
  let dblstop = quotes.splice(getNumber, 1)[0];
  let seen = [];
  seen.push(dblstop);
  if (quotes.length === 0) {
      quotes = dblstop;
      seen = [];
  }
  return dblstop;
}

//This changes the background color
function chback (){
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  let chback = document.body.style.backgroundColor = "#"+randomColor;
}

// This prints the quote and it's object values
function printQuote() {
  let randomquote = getRandomQuote(quotes);
  let htmlstr = "";
    htmlstr +='<p class="quote">' + randomquote.quote + "</p>";
    htmlstr += '<p class="source">' + randomquote.source;
  // prints citation if it's in the object selected
  if (randomquote.citation) {
    htmlstr += '<span class="citation">' + randomquote.citation + '</span>';
  }
  // prints year if it's in the object selected
  if (randomquote.year) {
    htmlstr += '<span class="year">' + randomquote.year + '</span>';
  }
    htmlstr += '</p>'
 chback();
};

// This changes the quote after 5 seconds
 let x = 0;
 let autoRefresh = window.setInterval(function(){
   printQuote();
   if (++x === 8) {
      window.clearInterval(autoRefresh);
      document.getElementById('loadQuote').disabled = true;
   }
 }, 5000);




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is calleddocument.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
