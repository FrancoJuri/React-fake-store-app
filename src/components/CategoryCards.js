import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCards = () => {
    return (
        <div className='mt-5'>
            
            <h2 className='text-center'>Categories</h2>

            <div className='category-cards mt-4 justify-content-center d-flex gap-4'>

                <div className="card text-white bg-dark mb-3" style={{
                    maxWidth: '19rem'
                }}>
                    <div className="card-header"><h5 className='card-title'>Electronics</h5></div>
                    <div className="card-body">
                        <p className="card-text">If you are looking for electronic products this is your place</p>
                        <Link to='/category/electronics' className='btn btn-primary'>Go There</Link>
                    </div>
                </div>

                <div className="card text-white bg-dark mb-3" style={{
                    maxWidth: '19rem'
                }}>
                    <div className="card-header"><h5 className='card-title'>Jewelery</h5></div>
                    <div className="card-body">
                        <p className="card-text">If you are looking for jewelery products this is your place</p>
                        <Link to='/category/jewelery' className='btn btn-primary'>Go There</Link>
                    </div>
                </div>

            </div>
            

        </div>
    )
}

export default CategoryCards;
