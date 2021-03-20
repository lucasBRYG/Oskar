
import Calendar from "./components/calendar/Calendar";
import Weather from "./components/weather/Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "calendar-container">
        {/* <Calendar/> */}
        <Weather/>
      </div>
    </div>
  );
}

export default App;
