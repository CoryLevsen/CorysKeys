import React, {useState} from 'react'

import {AiOutlineCloudUpload, AiOutlineCheckCircle} from "react-icons/ai"

import ProductImageDropBox from './ProductImageDropbox'
import ProductPreview from './../../assets/images/8k2.jpg'

import { useNumberFormat } from '../../hooks/useNumberFormat'
import { useAddNewProduct } from '../../hooks/useAddNewProduct'

export default function AddProductsPanel({title}) {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('199.99')
  const [productDescription, setProductDescription] = useState('description')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct()

  const formatter = useNumberFormat()

  function handleSubmit (e) {
    e.preventDefault()
    
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
  }

  function handleProductName (name) {
    setProductName(name)
  }

  function handleProductDescription (description) {
    setProductDescription(description)
  }

  function handleProductPrice (price) {
    setProductPrice(formatter(price))
  }

  if (isWriting) {
    return (
      <>
      <div status={loading}>
        {
          !status
          ?
          <div className='product-panel'>
            <aside className='editor-feedback'>
              <figure>
                <AiOutlineCheckCircle color='d9f99d' size="12rem"/>
                <figcaption>
                  Product Uploaded Succesfully
                </figcaption>
              </figure>
              <footer>
                <button>Add Another Product</button>
                <button>View All Products</button>
              </footer>
            </aside>
          </div>
          :
          <div className='product-panel'>
            <aside className='editor-feedback'>
              <figure>
                <AiOutlineCloudUpload color='d9f99d' size="12rem"/>
                <figcaption>
                  Uploading New Product
                </figcaption>
              </figure>
              <footer>
                <button>Add Another Product</button>
                <button>View All Products</button>
              </footer>
            </aside>
          </div>
        }
      </div>
        
      </>
    )
  } else {
    return (
      
        <div className="panel-container">
          <h2>{title || "Display Panel"}</h2>
          <div className='product-panel'>
            <aside>
              <form className='data-entry' onSubmit={handleSubmit}
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                handleProductDescription={handleProductDescription}
                handleSubmit={handleSubmit}
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
                  <textarea rows={6} onChange={(e)=>handleProductDescription(e.target.value.trim())}></textarea>
                </div>
                <div>
                  <button className='button-login-style' type='submit'>Add New Product</button>
                </div>
              </form>
              <div className='product-preview' 
                productName={productName}
                productPrice={productPrice}
                productImage={productImage}
                productDescription={productDescription}
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                handleProductDescription={handleProductDescription}
                handleSubmit={handleSubmit}
                setProductImage={setProductImage}
              >
                <h2>{productName}</h2>
                <div className='product-image'>
                  <img src={productImage.previewImage} alt='berserk keycaps'></img>
                </div>
                <p className='product-price'>$ {productPrice}</p>
                <p className='product-description'>{productDescription}</p>
              </div>
            </aside>
          </div>
        </div>
      
    )
  }
}
