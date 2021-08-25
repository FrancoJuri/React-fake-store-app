import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import CategoryCards from './CategoryCards'
import ProductCard from './ProductCard'
import Spinner from './Spinner'
import Footer from './ui/Footer'

const ValidatorScreens = ({data, loading, error, screenTitle, normalScreen, allCards, title, link, desc, handleReturn, handleAdd, add}) => (
        <>
            {
                (loading)
                &&
                <Spinner />
            }

            {
                (error !== null)
                &&
                window.location.reload()
            }

            {
                (data !== null && !normalScreen)
                &&
                <div className='row mt-5 product-screen-container'>
                    <div className='col-sm-12 col-md-4'>
                        <img src={data.image} alt={data.title} className='img-fluid img-thumbnail' />
                    </div>

                    <div className='col-sm-12 col-md-8 mb-5'>
                        <h3 className='mt-4'>{data.title}</h3>
                        <ul className='list-group mb-4 mt-4'>
                            <li className='list-group-item'><strong>Description: </strong>{data.description}</li>
                            <li className='list-group-item'><strong>Price: </strong>{data.price}</li>
                            <li className='list-group-item'><strong>Category: </strong>{data.category}</li>
                        </ul>
                        <button className='btn btn-outline-info' onClick={handleReturn}>Return</button>
                        {
                            (!add)
                            ? <button className='btn btn-primary ms-3' onClick={handleAdd}>Add cart</button>
                            : <Link className='btn btn-primary ms-3' to='/cart'>Go to cart</Link>
                        }
                    </div>
                </div>
            }
            
            {
                (data !== null && normalScreen)
                &&
                <div>
                    <h1 className='mb-4 text-center'>{screenTitle}</h1>
                        <div className='cards-container'>
                            {
                                data.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            }
                        </div>
                </div>
            } 

            {
                (!loading && allCards && normalScreen)
                &&
                <CategoryCards />
            }

            {
                (!loading && !allCards && normalScreen)
                &&
                <div className='mt-5'>
                    <h2 className='text-center mt-3'>Another Category</h2>
                    <CategoryCard 
                        title={title}
                        desc={desc}
                        link={link}
                    />
                </div>
            }

            {
                (!loading)
                &&
                <div>
                    {
                        (normalScreen)
                        &&
                        <hr />
                    }
                    <Footer />
                </div> 
            }
        </>
    )

export default ValidatorScreens;
