import React,{useEffect,useContext} from 'react';
import './App.css';
import {Outlet, createBrowserRouter } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import CreatePage from './pages/Create';
import ViwePost from './pages/ViewPost';

import { AuthContext,FirebaseContext } from './store/Context';
import Post from './store/PostContext';


import Home from './pages/Home';




function App() {
const {setUser} = useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)

useEffect(()=>{
 
 firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
 })
},[])
  return (
    <>
    <Post>
    <Outlet/>
    </Post>
   
     

  </>
  );
}


export const  appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signup',
        element : <Signup/>
      },
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/create',
        element: <CreatePage/>
      },
      {
        path: '/view',
        element: <ViwePost/>
      }
    ]
    
  },
  
])

// export default App;

