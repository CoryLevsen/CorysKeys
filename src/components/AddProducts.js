import React from 'react'

export default function AddProductsPanel({title}) {
  return (
    <>
      <div className="panel-container">
        <h2>{title || "Display Panel"}</h2>
        <div className='product-panel'>
          <aside>
            <div className='data-entry'>
              <div className="product-image">
                <label>Product Image</label>
                <div className='product-dropbox'></div>
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
            <div className='product-preview'>
              <h3>Product Preview Component</h3>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
