import React from 'react';
import useFetch from '../hooks/useFetch';
import ValidatorScreens from './ValidatorScreens';

const HomeScreen = () => { 
    
    const {data, loading, error} = useFetch('https://fakestoreapi.com/products?limit=4');
    
    return (
         <div className='mt-5'>
            <ValidatorScreens 
                data={data} 
                loading={loading} 
                error={error} 
                screenTitle='Featured products' 
                allCards={true} 
                normalScreen={true}
            />
        </div>  
    )
}

export default HomeScreen;
