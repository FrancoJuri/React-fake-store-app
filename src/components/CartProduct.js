import React from 'react';
import { Link } from 'react-router-dom';

const CartProduct = ({product, handleDelete, handleIncrementQuantity, handleDecrementQuantity}) => {
    return (
        <div className="card mb-3 mt-3 product-cart-card p-2">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mb-4">{product.title}</h5>
                        <p className='card-text'>Quantity: <strong>{product.quantity}</strong></p>
                        <p className="card-text">Category: <strong>{product.category}</strong></p>
                        <p className="card-text">Price: <strong>{product.price}</strong></p>
                        <div className='d-flex gap-3 mx-auto justify-content-center actions-product-div'>
                            <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
                                Delete
                            </button>
                            <button className='btn btn-primary' onClick={() => handleIncrementQuantity(product.id) }>
                                Increment quantity
                            </button>
                            {
                                (product.quantity > 1)
                                &&
                                <button className='btn btn-primary' onClick={() => handleDecrementQuantity(product.id)}>
                                    Decrement quantity
                                </button>
                            }
                            <Link className='btn btn-primary' to={`/product/${product.id}`}>
                                See product
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
