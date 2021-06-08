import './App.css';
import { Route } from 'react-router';
import Home from "./Components/Home/Home"
import PlantList from "./Components/PlantList/PlantList"



function App() {
  return (
    <div className="App">
      
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/plants">
        <PlantList/>
      </Route>
    </div>
  );
}

export default App;
