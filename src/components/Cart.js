import React, { useState } from "react";

const Cart = ({ product, handleCart, handleRemove }) => {
   
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{product.productName}</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div
                className={
                  product.productRating < 1 ? "bi-star" : "bi-star-fill"
                }
              ></div>
              <div
                className={
                  product.productRating < 2 ? "bi-star" : "bi-star-fill"
                }
              ></div>
              <div
                className={
                  product.productRating < 3 ? "bi-star" : "bi-star-fill"
                }
              ></div>
              <div
                className={
                  product.productRating < 4 ? "bi-star" : "bi-star-fill"
                }
              ></div>
              <div
                className={
                  product.productRating < 5 ? "bi-star" : "bi-star-fill"
                }
              ></div>
            </div>
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through mx-2">
              ₹{product.initialPrice}
            </span>
            ₹{product.offerPrice}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="d-flex justify-content-around card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={() => handleCart(product)}
              disabled={!product.inStock}
              className="btn btn-sm btn-outline-dark mt-auto"
            >
              Add to cart
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleRemove(product)}
              disabled={!product.inStock}
              className="btn btn-sm  btn-outline-dark mt-auto"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
