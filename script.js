/*google.load('search', '1');

    function OnLoad() {
      // Create a search control
      var searchControl = new google.search.SearchControl();

      // Add in a full set of searchers
      var localSearch = new google.search.LocalSearch();
      searchControl.addSearcher(localSearch);
      searchControl.addSearcher(new google.search.WebSearch());
      searchControl.addSearcher(new google.search.VideoSearch());
      searchControl.addSearcher(new google.search.BlogSearch());
      searchControl.addSearcher(new google.search.NewsSearch());
      searchControl.addSearcher(new google.search.ImageSearch());
      searchControl.addSearcher(new google.search.BookSearch());
      searchControl.addSearcher(new google.search.PatentSearch());

      // Set the Local Search center point
      localSearch.setCenterPoint("Denver, CO");

      // tell the searcher to draw itself and tell it where to attach
      searchControl.draw(document.getElementById("img"));

      // execute an inital search
      searchControl.execute("VW GTI");
    }
    google.setOnLoadCallback(OnLoad);
*/
function red(){//random color changer for the title of the extention
	return Math.floor(Math.random() * 255 + 1);
	setTimeout(red, 1000);
}
function green(){
	return Math.floor(Math.random() * 255 + 1);
	setTimeout(green, 100);
}
function blue(){
	return Math.floor(Math.random() * 255 + 1);
	setTimeout(blue, 10);
}
function random_title(){
	//console.log(red());
	$('body').css("color", "rgb("+red()+", "+green()+", "+blue()+")");
	setTimeout(random_title, 550);
}
$(document).ready(//main function to to be called
	function load() {
		var x = Math.floor((Math.random() *10 ) + 1 );
		var img = new Image();
		img.src = 'cat'+x+'.jpg';
		var div = document.getElementById('img');
  	div.appendChild(img);
		$('button').click(function(){location.reload();});
		random_title();
	}
);
