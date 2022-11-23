function modifyMoviesInfo(input) {
    
    class Movie {
        constructor(name, director, date) {
            this.name = name;
        }
    }

    function addMovie(name, movies) {
        let movie = new Movie(name);
        movies.push(movie);
    }

    function directedBy(movie, director, movies) {
        for (let currentMovie of movies) {
            if (currentMovie.name == movie) {
                currentMovie.director = director;
            }
        }
    }

    function onDate(movie, date, movies) {
        for (let currentMovie of movies) {
            if (currentMovie.name == movie) {
                currentMovie.date = date;
            }
        }
    }

    function printMoviesInfoInJSON(movies) {
        for (const movie of movies) {
            if (movie.director != undefined && movie.date != undefined) {
            console.log(`${JSON.stringify(movie)}`);
            }
        }
    }

    let movies = [];

    for (let command of input) {
        command = command.split(' ');

        if (command.includes('addMovie')) {
            command.shift();
            addMovie(command.join(' '), movies);
        }

        if (command.includes('directedBy')) {
            let movieName = [];
            let movieDirector = [];
            let endedName = false;

            for (let i = 0; i < command.length; i++) {
                if (command[i] == 'directedBy') {
                    endedName = true;
                }
                if (!endedName) {
                    movieName.push(command[i]); 
                } else if (command[i] != 'directedBy') {
                    movieDirector.push(command[i]);
                }
            }

            directedBy(movieName.join(' '), movieDirector.join(' '), movies);
        }

        if (command.includes('onDate')) {
            let movieName = [];
            let movieDate = '';
            let endedName = false;

            for (let i = 0; i < command.length; i++) {
                if (command[i] == 'onDate') {
                    endedName = true;
                }
                if (!endedName) {
                    movieName.push(command[i]); 
                } else if (command[i] != 'onDate') {
                    movieDate = command[i];
                }
            }

            onDate(movieName.join(' '), movieDate, movies);
        }
    }

    printMoviesInfoInJSON(movies);
}