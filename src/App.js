import { Route,Routes,Navigate } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/room/:id' element={<Room></Room>}></Route>

      </Routes>
    </div>
  );
}

export default App;
