var movies = [];

function fourth(arr){
    var movieName;
    var movieDirector;
    var movieDate;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes('addMovie')) {
            movieName = arr[i].replace('addMovie', '').trim();
            AddMovie(movieName);
            continue;
        }
        if(arr[i].includes('directedBy')) {
            movieName = arr[i].slice(0, arr[i].indexOf('directedBy')).trim();
            movieDirector = arr[i].replace(movieName, '').replace('directedBy', '').trim();
            AddDirector(movieName, movieDirector);
            continue;
        }
        if(arr[i].includes('onDate')) {
            movieName = arr[i].slice(0, arr[i].indexOf('onDate')).trim();
            movieDate = arr[i].replace(movieName, '').replace('onDate', '').trim();
            AddDate(movieName, movieDate);
            continue;
        }
    }

    movies.forEach(element => {
        console.log(element);
    });
}

function AddMovie(name) {
    var flag = true;
    movies.forEach(element => {
        if(element.name == name) flag = false;
    });
    if(flag) movies.push({name: name, director: null, date: null});
}

function AddDirector(name, director) {
    movies.forEach(element => {
        if(element.name == name) element.director = director;
    });
}

function AddDate(name, date) {
    movies.forEach(element => {
        if(element.name == name) element.date = date;
    });
}

fourth(['addMovie Fast and Furious', 
        'addMovie Fast and Furious', 
        'addMovie Godfather', 
        'Inception directedBy Christopher Nolan', 
        'Godfather directedBy Francis Ford Coppola', 
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018', 
        'Batman onDate 01.08.2018', 
        'Fast and Furious directedBy Rob Cohen']);