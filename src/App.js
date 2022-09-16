import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import Products from './routes/Products';
import Client from './routes/Client/Client';
import Dashboard from './routes/Dashboard';
import { Routes,Route,Outlet} from 'react-router-dom';

 



function App() {
  return (
    <div className="App">

        <Routes>
          <Route  index element={<Login/>}/>
         
          <Route path='/' element={<Nav/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='dash' element={<Dashboard/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='client' element={<Client/>}/>
          </Route>

          




        </Routes>
    </div>
  );
}

export default App;
