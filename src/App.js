import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* BrowserRouter is a component that wraps arround the entire application and provides the routing 
infrastructure for the application.

Routes is a component that contains list of Route.


Route is a component that specifies a particular route in the application.
It has two important props path and element*/