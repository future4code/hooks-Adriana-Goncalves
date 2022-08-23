enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type dados = {
  movieName: string;
  releaseYear: number;
  movieGenre: GENERO;
  pontuacao?: number;
//   Para deixar um atributo opcional usamos o ? Ex. nota? : number
  
};

const rotateMovies = ( movieName: string, releaseYear: number, movieGenre: GENERO, pontuacao?: number
): dados => {
  if (pontuacao) {
    const movies: dados = {
      movieName: movieName,
      releaseYear:  releaseYear,
      movieGenre: movieGenre,
      pontuacao: pontuacao,
    };
    return movies
  } else {
    const  movies: dados = {
        movieName: movieName,
        releaseYear:  releaseYear,
        movieGenre: movieGenre,
      };
      return movies
  }
};
// console.log(rotateMovies("Duna", 2021, GENERO.ACAO))
console.log(rotateMovies("Duna", 2021, GENERO.ACAO, 74))