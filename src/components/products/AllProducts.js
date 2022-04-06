import React, {useState, useEffect} from 'react'
import {ref, get} from 'firebase/database'
import {db} from '../../libs/firebase'

export default function AllProductsPanel({title}) {
  const [prodctData, setProductData] = useState(null)

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
          {prodctData? <p>render the product items</p> : <p>spinner react spinners</p>}
        </div>
      </div>
    </>
  )
}
