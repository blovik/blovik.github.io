var movies = [];

movies.push(
	'The Princess Bride', 
	'Ground Hog Day', 
	'Second Hand Lions', 
	'My Fair Lady', 
	'Sleeping Beauty'
);

makeMovieList(movies);

function makeMovieList(movies) {
	var newMovie = '';
	for (var i in movies) {
		var addMovie = "<li>" + movies[i] + "</li>";
		newMovie = newMovie + addMovie;
	}
	document.getElementById('movieList').innerHTML = newMovie;
}

// Hunter's solution:===============================
// for (var x in movies) {
//     var listItem = document.createElement('li');
//     listItem.textContent = movies[x];
//     var movieList = document.querySelector('#movieList');
//     movieList.appendChild(listItem);
// }