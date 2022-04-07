import React, {useState, useEffect} from 'react'
import {ref, get} from 'firebase/database'
import {db} from '../../libs/firebase'



export default function AllProductsPanel({title, productName, productImage, productPrice, productDescription, product, ...props}) {
  const [productData, setProductData] = useState(null)

  useEffect(()=>{ 
    async function getProductData() {
      const productRef = ref(db, 'products')
      const productSnapShot = await get(productRef)
      setProductData(Object.values(productSnapShot.val()))
    }
    getProductData()
  },[])

  return (
    <>
      <div className="panel-container">
        <h2>{title || "Display Panel"}</h2>
        <div className='product-panel'>
          {
            productData?
            productData.map(product => 
              <div className='product-preview' key={product.uid} product={product}>
                <h2>{productName}</h2>
                <div className='product-image'>
                  <img src={productImage} alt='berserk keycaps'></img>
                </div>
                <p className='product-price'>$ {productPrice}</p>
                <p className='product-description'>{productDescription}</p>
              </div>
            )
            :
            <p>spinner react spinners</p>
          }
        </div>
      </div>
    </>
  )
}
