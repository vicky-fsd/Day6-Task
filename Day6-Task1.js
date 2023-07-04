class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

   getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}
var movie = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(movie.title);
