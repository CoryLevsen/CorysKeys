import React, {useState} from 'react'

import ProductImageDropBox from './ProductImageDropbox'
import ProductPreview from './../../assets/images/8k2.jpg'
import { useNumberFormat } from '../../hooks/useNumberFormat'

export default function AddProductsPanel({title}) {

  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('199.99')
  const [productImage, setProductImage] = useState(ProductPreview)

  const formatter = useNumberFormat()

  function handleProductName (name) {
    setProductName(name)
  }

  function handleProductPrice (price) {
    setProductPrice(formatter(price))
  }

  return (
    <>
      <div className="panel-container">
        <h2>{title || "Display Panel"}</h2>
        <div className='product-panel'>
          <aside>
            <div className='data-entry' 
              handleProductName={handleProductName}
              handleProductPrice={handleProductPrice}
              setProductImage={setProductImage}
            >
              <div className="product-image">
                <label>Product Image</label>
                <div className='product-dropbox'><ProductImageDropBox className='product-dropbox' setProductImage={setProductImage}/></div>
              </div>
              <div className="product-name">
                <label>Product Name</label>
                <input type="text" name="name" id="name" onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
              </div>
              <div className="product-price">
                <label>Product Price</label>
                <input type="text" name="price" id="price" onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
              </div>
              <div className="product-description">
                <label>Product Description</label>
                <textarea rows={6}></textarea>
              </div>
            </div>
            <div className='product-preview' 
              productName={productName}
              productPrice={productPrice}
              productImage={productImage}
              handleProductName={handleProductName}
              handleProductPrice={handleProductPrice}
              setProductImage={setProductImage}
            >
              <h2>{productName}</h2>
              <div className='product-image'>
                <img src={productImage} alt='berserk keycaps'></img>
              </div>
              <p className='product-price'>$ {productPrice}</p>
              <p className='product-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat. Sodales ut eu sem integer vitae justo eget.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
