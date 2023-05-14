import React, {useEffect, useContext ,useState} from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';

const Posts = ()=>{

const {firebase} = useContext(FirebaseContext)
const [products, setProducts] = useState([])
const {setPostDetails} = useContext(PostContext)
const navigate = useNavigate()

useEffect(()=>{
  firebase.firestore().collection('products').get().then((snapshot)=>{
     const allpost = snapshot.docs.map((doc)=>{
      return {
        ...doc.data(),
        id: doc.id
        
      }
     })
   
    setProducts(allpost)
  })
}, [])
    return (
        <>
         <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
     
     { products.map(doc=>{
  
    
    return  <div
        onClick={()=>{
        
          setPostDetails(doc)
          navigate('/view')
        }}
        className="card"
      >
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image">
          <img src={doc.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {doc.productPrice}</p>
          <span className="kilometer">{doc.category}</span>
          <p className="name">{doc.productName}</p>
        </div>
        <div className="date">
          <span>{doc.createdAt}</span>
        </div>
      </div>
     })
     }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">


        { products.map(doc =>{

    
return  <div
    className="card"
  >
    <div className="favorite">
      <Heart></Heart>
    </div>
    <div className="image">
      <img src={doc.url} alt="" />
    </div>
    <div className="content">
      <p className="rate">&#x20B9; {doc.productPrice}</p>
      <span className="kilometer">{doc.category}</span>
      <p className="name">{doc.productName}</p>
    </div>
    <div className="date">
      <span>{doc.createdAt}</span>
    </div>
  </div>
 })
 }



        </div>
      </div>
    </div>
        </>
    )
}

export default Posts;