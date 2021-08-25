import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ValidatorScreens from './ValidatorScreens';

const CategoryScreen = () => {

    const {category} = useParams();
    const capitalizeCategory = `${category[0].toUpperCase() + category.substring(1)} products`;
   
    const {loading, data, error} = useFetch(`https://fakestoreapi.com/products/category/${category}`);

    return (
        <div className='mt-5'>
            <ValidatorScreens 
                loading={loading} 
                data={data} 
                error={error} 
                allCards={false}  
                title={`${category === 'electronics' ? 'Jewelery' : 'Electronics'}`}
                desc={`${category === 'electronics' ? 'jewelery' : 'electronic'}`}
                link={`${category === 'electronics' ? 'jewelery' : 'electronics'}`}
                normalScreen={true}
                screenTitle={capitalizeCategory}
            />
        </div>
    ) 
}

export default CategoryScreen;
