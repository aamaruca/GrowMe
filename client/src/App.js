import './App.css';
import { Route } from 'react-router';
import Home from "./Components/Home/Home"
import PlantList from "./Components/PlantList/PlantList"
import PlantDetails from './Components/PlantDetails/PlantDetails';



function App() {
  return (
    <div className="App">
      
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/plants">
        <PlantList/>
      </Route>
      <Route exact path="/plant/:id">
        <PlantDetails/>
      </Route>
    </div>
  );
}

export default App;