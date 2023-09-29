import { useEffect, useState } from "react";
import Card from "../components/Card";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjQxNzdjMDk2OTRiM2Q2NzQ4OGM2ZGVkMzBiMWY2NSIsInN1YiI6IjY1MTVhMzg0YzUwYWQyMDBjOTE5YmVkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mUeg2sqgwt60LGApAI6nga_RQy3LIkB9GyTdQKrQdxA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=2b4177c09694b3d67488c6ded30b1f65&language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}></Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
