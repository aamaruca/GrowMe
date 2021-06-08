import './App.css';
import { Route } from 'react-router';
import Home from './Components/Home/Home'
import PlantList from './Components/PlantList/PlantList'
import PlantDetails from './Components/PlantDetails/PlantDetails';
import AddPlant from './Components/AddPlant/AddPlant'


function App() {
  return (
    <div className="App">
      
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/plants">
        <PlantList/>
      </Route>
      <Route exact path="/details/:id">
        <PlantDetails/>
      </Route>
      <Route exact path="/new">
        <AddPlant/>
      </Route>
    </div>
  );
}

export default App;
