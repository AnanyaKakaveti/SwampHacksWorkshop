import pfp from './Assets/Annie_LinkedIn.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* create a left and right element to create a more interesting page */}
        <div className="left">
          <img src={pfp} className="pfp-img"/>
        </div>

        <div className="right">
          <h1>Annie Kakaveti</h1>
          <div className = "tagline">A senior CS student at UF, looking for a full-time role</div>
        </div>
      </header>
    </div>
  );
}

export default App;
