import React, {useState} from 'react'
import ProductImageDropBox from './ProductImageDropbox'

import PlaceHolderImage from './../../images/warning.jpg'

export default function EditProductsPanel({title}) {

  const [productName, setProductName] = useState('Product Name')
  return (
    <>
      <div className="panel-container">
        <h2>{title || "Display Panel"}</h2>
        <div className='product-panel'>
          <aside>
            <div className='data-entry'>
              <div className="product-image">
                <label>Product Image</label>
                <div className='product-dropbox'><ProductImageDropBox /></div>
              </div>
              <div className="product-name">
                <label>Product Name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="product-price">
                <label>Product Price</label>
                <input type="text" name="price" id="price"/>
              </div>
              <div className="product-description">
                <label>Product Description</label>
                <textarea rows={6}></textarea>
              </div>
            </div>
            <div className='product-preview' productName={productName}>
              <h2>{productName}</h2>
              <div className='product-image'>
                <img src={PlaceHolderImage} alt='berserk keycaps'></img>
              </div>
              <p className='product-price'>Price</p>
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
