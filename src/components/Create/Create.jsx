import React, {useContext, useState} from "react";
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";

const Create = ()=>{
 const {firebase} = useContext(FirebaseContext)
 const {user} = useContext(AuthContext)
 const [productName, setProductName] = useState('')
 const [category, setCategory] = useState('')
 const [productPrice, setProductPrice] = useState('')
 const [productImage, setProductImage] = useState(null)
 const navigate = useNavigate()
 const productSubmitHandler = ()=>{


  firebase.storage().ref(`/image/${productImage.name}`).put(productImage).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      console.log(url)
      firebase.firestore().collection('products').add({
        productName,
        category,
        productPrice,
        url,
        userId: user.uid,
        createdAt : new Date().toDateString()
      })
      navigate('/')
      

    })
  })
 }
    return (
        <>
        <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input form-control form-control-md"
              onChange={(e)=> setProductName(e.target.value)}
              type="text"
              id="fname"
              name="Name"
              value={productName}
              defaultValue=""
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input form-control form-control-md"
              onChange={(e)=> setCategory(e.target.value)}
              type="text"
              id="fname"
              name="category"
              value={category}
              defaultValue=""
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} className="input form-control form-control-md" type="number" id="fname" name="Price" />
            <br />
        
          <br />
          <img alt="Posts" width="200px" height="200px" src={productImage ? URL.createObjectURL(productImage) : ''}></img>
       
            <br />
            <input onChange={(e)=> setProductImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={productSubmitHandler} className="uploadBtn  btn">upload and Submit</button>
          
        </div>
      </card>
        </>
    )
}

export default Create