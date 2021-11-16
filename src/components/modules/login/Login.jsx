import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/user/user.actions";
import Modal from "../../common/modal/Modal";
import "./Login.styles.scss";

const Login = () => {
  const dispatch = useDispatch();

  const handleclick = () => {
    signInWithGoogle().then((result) => {
      dispatch(setUser(result.user));
    });
  };

  return (
    <div>
      <Modal
        modalId={"login-modal"}
        title={"Sign in using Google"}
        isFooter={false}
      >
        <div className="login d-flex justify-content-center align-items-center">
          <button
            onClick={handleclick}
            className="google-login-btn border-0"
            data-bs-dismiss="modal"
            data-testid="google-login-btn"
          >
            <FcGoogle />
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Login;
