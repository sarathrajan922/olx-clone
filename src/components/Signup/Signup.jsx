import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../store/Context';

const Signup = ()=>{
  const navigate = useNavigate()
 const [username,setUsername] = useState('')
 const [email, setEmail] = useState('')
 const [phone, setPhone] = useState('')
 const [password, setPassword] = useState('')
 

 const {firebase} = useContext(FirebaseContext)
 const handleSubmit = (e)=>{
  e.preventDefault()
//   console.log(username)
//  console.log(email)
//  console.log(phone)
//  console.log(password)
 console.log(firebase)
 firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
  result.user.updateProfile({displayName : username}).then(()=>{
  firebase.firestore().collection('users').add({
    id: result.user.uid,
    username: username,
    phone: phone
  }).then(()=>{
    navigate('/login')
  })
  })
 })
 }

    return (
        <>
      <div>
      <div className="signupParentDiv">
        <img className='logo-img' src={Logo} alt='not found'></img>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <br />
          <input
            className="input form-control form-control-md"
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          
            name="name"
            defaultValue=""
          />
          <br />
          <label >Email</label>
          <br />
          <input
            className="input form-control form-control-md"
            type="email"
          
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
            defaultValue=""
          />
          <br />
          <label >Phone</label>
          <br />
          <input
            className="input form-control form-control-md"
            type="number"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          
            name="phone"
            defaultValue=""
          />
          <br />
          <label >Password</label>
          <br />
          <input
            className="input form-control form-control-md"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button className='btn btn-success'>Signup</button>
        </form>
        <div className='mt-3'>
        <Link to= '/login'>Login</Link>
        </div>
      </div>
    </div>
        </>
    )
}

export default Signup;