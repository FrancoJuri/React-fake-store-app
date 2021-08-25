import React from 'react';
import useFetch from '../hooks/useFetch';
import ValidatorScreens from './ValidatorScreens';

const AllProducts = () => {

    const {data, loading, error} = useFetch('https://fakestoreapi.com/products');

    return (
        <div className='mt-5'>
            <ValidatorScreens 
                data={data} 
                loading={loading} 
                error={error} 
                screenTitle='All products' 
                allCards={true}
                normalScreen={true}
            />
        </div>
    )
}

export default AllProducts;