import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <Weather defaultCity="san diego" />
      <footer>
        This project was created by <a href='https://github.com/theartistboe?tab=repositories'>Isaboe Hollis</a> and  {" "}
        <a href='https://github.com/theartistboe/weather-search-app-react' target='_blank' rel="noreferrer"> 
        is open-sourced on GitHub.</a>
        </footer>
        </div>
      </div>
  );
}

