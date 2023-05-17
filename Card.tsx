import React from "react";
import '../Scss/style.scss'

function Card({product}) {
  // console.log(product)
  return (
      <div className="card">
        <div className="card-header">
          <img src={product.images[0]} width="50px" height="100px" />
          <p>
            <h6>
              <strong>{product.title}</strong>{' '}
            </h6>
          </p>
          <button style={{ color: 'red', cursor: 'pointer', marginLeft: 2, margin: '10px 20px' }}>
            Delete
          </button>
        </div>
        <div className="card-info">
          <p>
            Brand: <strong>{product?.brand}</strong>
          </p>
          <p>
            Category: <strong> {product?.category} </strong>
          </p>
          <p>
          Price: <strong> {Number(product.price).toFixed(2)} $ </strong>
          </p>
        </div>
        <button >Edit Product</button>
        <button style={{ marginTop: '10px', margin: '15px 20px' }} >
          Add To Cart
        </button>
      </div>
  ) }
  export default Card;