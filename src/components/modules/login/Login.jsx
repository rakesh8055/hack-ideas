import { FcGoogle } from "react-icons/fc"
import { signInWithGoogle } from '../../../firebase/firebase.utils';
import './Login.styles.scss';

const Login = () => {
    const handleclick = () => {
        signInWithGoogle().then((result) => {
            console.log(result);
        });
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 data-testid='modal-title' className="modal-title" id="staticBackdropLabel">Sign in using Google</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='login d-flex justify-content-center align-items-center'>
                            <button onClick={handleclick} className='google-login-btn border-0' data-bs-dismiss="modal" data-testid='google-login-btn'><FcGoogle/></button>
                        </div>  
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Login;