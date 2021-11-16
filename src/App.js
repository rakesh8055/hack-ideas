import './App.scss';
import Navbar from './components/modules/navbar/Navbar';
import Home from './components/modules/home/Home';
import Eventsdashboard from './components/modules/events-dashboard/Eventsdashboard';
import Login from './components/modules/login/Login';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/firebase.utils';

function App() {
  const user = useSelector(state => state.user);
  const [isLoggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if( user?.displayName) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn}/>
      <Home/>
      <Eventsdashboard isLoggedIn={isLoggedIn}/>
      <Login/>
    </div>
  );
}

export default App;
