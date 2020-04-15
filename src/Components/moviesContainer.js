import React,{useState,useEffect} from 'react';
import Movie from './movie';
import InfiniteScroll from "react-infinite-scroll-component";



const MoviesContainer = () =>{
    const [movies,setMovies] = useState([])
    let [page,setPage] = useState(1)

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
      
    async function fetchMoreMovies(){
          let pageNumber = page+1
          setPage(pageNumber)
          const response = await fetch(url);
          const json = await response.json();
          setMovies([...movies,...json.results])
          console.log("current page",page)

      }

    useEffect(() => {
      async function fetchMovies() {;
        const response = await fetch(url);
        const json = await response.json();
        setMovies(json.results);
      }
      fetchMovies();
    },[]);


    return (
      <div>
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={movies.length}
          next={fetchMoreMovies}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
            <div className="movies_container">
              {!movies ? (
                <div>Loading...</div>
              ) : (
                movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    poster_image={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                  ></Movie>
                ))
              )}
            </div>
        </InfiniteScroll>
      </div>
    );
}

export default MoviesContainer;