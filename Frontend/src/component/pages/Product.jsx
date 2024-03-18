import React, { useState } from 'react'
import {storage} from './firebase'
function Product() {
  const[imageUpload, setImageUpload]=useState(null);
  const uploadCoupons = ()=>{
    if(imageUpload==null) return ;

  }
  return (
    <div>
      <input type="file" 
      onChange={(event)=>{
        setImageUpload(event.target.files[0])
      }}
      />
      <button onClick={uploadCoupons}>Upload Coupons</button>
    </div>
  )
}

export default Product
