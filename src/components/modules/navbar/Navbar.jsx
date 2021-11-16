import "./Navbar.styles.scss";
import { ReactComponent as Logo} from '../../../svg/logo-white.svg';
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../../firebase/firebase.utils';
import { setUser } from "../../../redux/user/user.actions";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth);
    dispatch(setUser({}));
  }

  onAuthStateChanged(auth, (user) => {
    if( user?.displayName) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a data-testid='logo' className="navbar-brand" href="/">
            <Logo height='40px' width='50px'/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a data-testid='home' className="nav-link" aria-current="page" href="#home-section">
                Home
              </a>
              <a data-testid='ideas' className="nav-link" href="#events-dashboard">
                Ideas/Challenges
              </a>
              <div className="login-btn d-flex justify-content-end align-items-center ps-4">
                {isLoggedIn ? <button className="border-0 rounded text-white" onClick={handleSignout}>Sign Out</button> :
                  <button type="button"
                  className="border-0 rounded text-white"
                  data-bs-toggle="modal" data-bs-target="#login-modal"
                >Login</button>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
