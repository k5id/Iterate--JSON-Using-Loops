// Let Us Create a JSON FILE 

var IMDB = [{
    "Director":"Quentin Tarantino",
    "Film" : "Kill Bill",
    "Year":"2002",
    "Quote":"You And I Have Unfinished Business!"

},
{
    "Director":"Matrin Scorcese",
    "Film" : "Taxi Driver",
    "Year":"1975",
    "Quote":"You Talking to me?"

}];

// FOR LOOP

for(var i=0;i<IMDB.length;i++){
    var obj = IMDB[i];  

console.log(obj.Director)
console.log(obj.Film)
console.log(obj.Quote)
}

// FOR EACH

IMDB.forEach(function(obj) { 
    
    console.log(obj.Film);

});

// FOR IN

for (var key in IMDB) {
    if (IMDB.hasOwnProperty(key)) {
        console.log(IMDB[key].Film + " " + IMDB[key].Year);
         }

    // FOR OF
    var dialogue = "";
    for (var x of IMDB[key].Quote) {
     dialogue += x; 
    }
     console.log(dialogue);

}