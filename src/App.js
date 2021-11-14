import './App.scss';
import Navbar from './components/modules/navbar/Navbar';
import Home from './components/modules/home/Home';
import Eventsdashboard from './components/modules/events-dashboard/Eventsdashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Eventsdashboard/>
    </div>
  );
}

export default App;
