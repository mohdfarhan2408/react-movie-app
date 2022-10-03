import React, {useState,useEffect} from 'react';
import SearchBox from './Components/SearchBox';
import ModalBooking from "./Components/ModalBooking";
import MovieList from './Components/MovieList';



//api
const API_URL = "http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&sort_by=release_date.desc";
const API_SEARCH = "//api.themoviedb.org/3/search/movie?api_key=328c283cd27bd1877d9080ccb1604c91&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [modalOpenBooking, setModalOpenBooking] = useState(false);


  //calling the setMovies, fetching API_URL.
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results); //movies = data
    })
  }, []); 
  

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
      fetch(API_SEARCH + searchMovie)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results); 
      });
  }


  const onSearchChange = (event) => {
    setSearchMovie(event.target.value);
  }

  
  return (
    <div className='App'>
      <nav>
          <form onSubmit={handleOnSubmit}>
            <SearchBox searchChange={onSearchChange}/>
          </form>
          {modalOpenBooking && 
            <ModalBooking setOpenModalBooking={setModalOpenBooking}/>
          }
          <div className='booking-movie'>
            <button onClick={() => {setModalOpenBooking(true);}}>Booking</button>
          </div>  
      </nav>  
      {(movies.length > 0) ? ( 
          <div className="movie-container" >
            {movies.map((movie)=>
            <MovieList  key={movie.id} {...movie}/>)
            }
          </div>
        ) : (
          <div className='no-movie'>
           <h2>No movies found</h2>
          </div>
        )}
    </div>
    );
}

export default App;

