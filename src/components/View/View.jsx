import React,{useState,useContext,useEffect} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
const View = ()=> {

  const [userDetails, setUserDetails] = useState()
  const {firebase}= useContext(FirebaseContext)
  const {postDetails} = useContext(PostContext)


  useEffect(()=>{

    firebase.firestore().collection('users').where('id', '==', postDetails.userId).get()
    .then((response) => {
      try {
        if (response.empty) {
          console.log('No user found with the provided ID');
          return;
        }
        response.forEach((doc) => {
          
          // console.log('userdetails from firebase', doc.data());
          const user = doc.data()
          setUserDetails(user);
        });
      } catch (error) {
        console.error(error);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  
    
  },[])



  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
        src={postDetails?.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.productPrice} </p>
          <span>{postDetails.productName}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>Name: {userDetails?.username}</p>
          <p>Mobile: {userDetails?.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;