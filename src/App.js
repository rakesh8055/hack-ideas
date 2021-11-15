import './App.scss';
import Navbar from './components/modules/navbar/Navbar';
import Home from './components/modules/home/Home';
import Eventsdashboard from './components/modules/events-dashboard/Eventsdashboard';
import Login from './components/modules/login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Eventsdashboard/>
      <Login/>
    </div>
  );
}

export default App;
