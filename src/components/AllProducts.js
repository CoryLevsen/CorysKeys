import React from 'react'

export default function AllProductsPanel({title}) {
  return (
    <>
      <div className="panel-container">
        <h2>{title || "Display Panel"}</h2>
        <div className='product-panel'>

        </div>
      </div>
    </>
  )
}