var movies = [];

movies.push('The Princess Bride');
movies.push('Ground Hog Day');
movies.push('Second Hand Lions');
movies.push('My Fair Lady');
movies.push('Sleeping Beauty');

makeMovieList(movies);

function makeMovieList(movies) {
	for (i = 0; i < 5; i++) {
		var addMovie = "<li>" + movies[i] + "</li>";
		alert(addMovie);// Just to see what's happening - looks right
		var newMovie = newMovie + addMovie;
	};
	document.getElementById('movieList').innerHTML = newMovie;
};



// for (var x in movies) {
//     var listItem = document.createElement('li');
//     listItem.textContent = movies[x];
//     var movieList = document.querySelector('#movieList');
//     movieList.appendChild(listItem);
// }