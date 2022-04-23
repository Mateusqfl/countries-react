
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import CountriesDetails from './pages/CountriesDetails';
import ErroPage from './pages/ErroPage';
 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/country/:countryId'element={<CountriesDetails/>}/>
          <Route path='*'element={<ErroPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
