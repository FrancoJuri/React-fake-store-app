import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => (
        <div className="card h-100" style={{
            width: '18rem',
        }}>
            <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
            <hr />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.substring(0, 100) + '...'}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">More info</Link>
            </div>
            <div className="card-footer">
                <small>Price: <span>{product.price}</span></small>
            </div>
        </div>
)

export default ProductCard; 