// create movie list from javascript============
var movies = [];

movies.push(
	'The Princess Bride', 
	'Ground Hog Day', 
	'Second Hand Lions', 
	'Bourne Identity', 
	'Sleeping Beauty'
);

makeMovieList(movies);

function makeMovieList(movies) {
	var newMovie = '';
	for (i in movies) {
		var addMovie = "<li>" + movies[i] + "</li>";
		newMovie = newMovie + addMovie;
	}
	document.getElementById('movieList').innerHTML = newMovie;
}

// add new movies from button=====================
document.getElementById("moreMovies").addEventListener("click", addMovie);

function addMovie() {
    var listItem = document.createElement('li');
    var newMovie = prompt('Add a movie:');
    	listItem.textContent = newMovie;
    var movieList = document.querySelector('#moreMovies');
    
    addMovies.appendChild(listItem);
}

// Hunter's solution:===============================
// for (x in movies) {
//     var listItem = document.createElement('li');
//     listItem.textContent = movies[x];
//     var movieList = document.querySelector('#movieList');
//     movieList.appendChild(listItem);
// }