alert('hey');

var movies = [];

movies.push('The Princess Bride');
movies.push('Ground Hog Day');
movies.push('Second Hand Lions');
movies.push('My Fair Lady');
movies.push('Sleeping Beauty');

makeMovieList(movies);

function makeMovieList(movies) {
	while (i = 0, i<4 , i++) {
		var newMove = "<li>" + movies[i+1] + "<li>";
		document.getElementById('makeMovieList').innerHTML = newMove;
	};
};