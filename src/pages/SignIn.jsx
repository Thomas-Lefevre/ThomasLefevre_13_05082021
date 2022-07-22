import Header from "../components/Header";
import InputFormSignIn from "../components/InputFormSignIn";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchUserToken, fetchUserData, setRemember } from "../redux/actions";
import { useDispatch } from "react-redux";

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalid, setInvalid] = useState(false)

  async function login(e) {
    e.preventDefault()

    const remember = document.getElementById('remember-me').checked
    const userLogin = { email, password }
    const token = await dispatch(fetchUserToken(userLogin))

    if (!token) {
      setInvalid(true)
      return;
    }

    setInvalid(false)
    dispatch(fetchUserData(token))

    remember ? setRemember(token, remember) : sessionStorage.setItem('token', token)

    navigate('/profile')
  }

  return (
    <div className="pageContainer">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={login}>
            <InputFormSignIn setEmailValue={(e) => setEmail(e.target.value)} setPasswordValue={(e) => setPassword(e.target.value)} />
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
          {invalid ? <div className='messageConnexionError'>invalid credentials</div> : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
