let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов Вы уже смотрели?", "");
        if (numberOfFilms == 0 || numberOfFilms.isNaN || numberOfFilms == null) {
            alert("Вы ничего не ввели, повторите ввод");
        }
        
    } while (numberOfFilms == 0 || numberOfFilms.isNaN || numberOfFilms == null);
    personalMovieDB.count = numberOfFilms;
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// showMyDB();

function rememberMyFilms() {
    let movieName, movieRating;
    do {
        movieName = prompt("Один из последних просмотренных фильмов?", "");
        if (movieName.length == 0 || movieName == null || movieName == '') {
            alert("Вы ничего не ввели, повторите ввод");
        } else if (movieName.length > 50 ) {
            alert("Вы ввели слишком длинную строку, повторите ввод");
        } else {
            movieRating = +prompt("На сколько оцените его?", "");
            if (movieRating.isNan || movieRating == 0 || movieRating == '') {
                alert("Вы ничего не ввели, повторите ввод");
            }
        }
    } while (movieName.length == 0 || movieName.length > 50 || movieRating == 0 || movieRating.isNaN);
    personalMovieDB.movies[movieName] = movieRating;
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Киноман");
    } else {
        alert("Ошибка");
    }
}


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres()  {
    for (let i = 1; i <= 3; i++) {
        let userGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (userGenre.length != 0 && userGenre != '' && userGenre != null) {
            personalMovieDB.genres[i-1] = userGenre;
        } else {
            i--;
            alert("Вы ввели что-то не то, повторите ввод");
        }
    }
}

// function first(callback) {
    // do something

//     setTimeout(function() {
//         console.log(1);
//     }, 500);
//     callback();
// }

// function second() {
//     console.log(2);
// }

// first(second);
//second();