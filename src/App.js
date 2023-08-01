import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=45faacc6';

const movie1 = {
  "Title": "John Wick: Chapter 4",
  "Year": "2023",
  "imdbID": "tt10366206",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data.Search);
  }
  useEffect(() => {
    searchMovies('John Wick');
  }, []);



  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          value="John Wick"
          placeholder="Search for Movies"
          onChange={() => {}}
          />
          <img
            src={SearchIcon}
            alt='search'
            onClick={() => {}}
          />         
      </div>
      <div className="container">
        <MovieCard />    
      </div>
    </div>
  );
}

export default App;
