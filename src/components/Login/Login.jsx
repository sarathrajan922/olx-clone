import React, { useState , useContext } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Logo from '../../olx-logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'
import { FirebaseContext } from "../../store/Context";

const Login= ()=>{

  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
const navigate = useNavigate()

  const {firebase} = useContext(FirebaseContext)
  const loginHandler = (e)=>{
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }
    return (
        <>
      <div>
      <div className="loginParentDiv ">
        <img className="logo-img" src={Logo} alt="not found"></img>
        <form onSubmit={loginHandler}>
          <label  htmlFor="fname">Email</label>
          <br />
          <input
            className="input form-control form-control-lg"
            onChange={(e)=> setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input form-control form-control-lg"
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button className="btn btn-success">Login</button>
        </form>
        <div className="mt-3 mb-3">

        <Link to= '/signup'>Signup</Link>
        </div>
      </div>
    </div>
        </>
    )
}


export default Login