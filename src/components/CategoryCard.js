import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({title, link, desc}) => {
    return (

        <div className="mx-auto mt-4 card text-white bg-dark mb-3" style={{
            maxWidth: '19rem'
        }}>
            <div className="card-header"><h5 className='card-title'>{title}</h5></div>
            <div className="card-body">
                <p className="card-text">If you are looking for {desc} products this is your place</p>
                <Link to={`/category/${link}`} className='btn btn-primary'>Go There</Link>
            </div>
        </div>
         
    )
}

export default CategoryCard;
