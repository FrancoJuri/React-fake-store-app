import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ValidatorScreens from './ValidatorScreens';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content' 
import { context } from '../createContext';
import { types } from '../types/types';

const MySwal = withReactContent(Swal);

const ProductScreen = ({history}) => {

    const {isLoggedIn} = useContext(context);

    const {id} = useParams();
    const {data, error, loading} = useFetch(`https://fakestoreapi.com/products/${id}`);

    const {state, dispatch} = useContext(context);
    const [add, setAdd] = useState(false);

    const handleReturn = () => {
        if(history.length <= 2) {
            if(data.category === 'jewelery'){
                history.push('/category/jewelery');
            } else if(data.category === 'electronics'){
                history.push('/category/electronics');
            } else {
                history.push('/');
            }
        } else{
            history.goBack();
        }
    }

    const handleAdd = () => {

        if(!isLoggedIn){
            Swal.fire({
                title: 'Error',
                icon:'error',
                text: 'You must be logged to add a product to cart',
                footer: '<a href="/#/auth/login" class="btn btn-primary rounded">Sign in</a>'
            })
            return;
        }

        dispatch({
            type: types.add,
            payload: {
                id,
                image: data.image,
                title: data.title,
                price: data.price,
                category: data.category,
                quantity: 1,
            }
        })

        MySwal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Excellent!',
            text: 'Product added successfully!',
            showConfirmButton: false,
            footer: '<a href="/#/cart" class="btn btn-primary">Go to cart</a>'
        })
    }

    const findArrEl = state.find(el => el.id === id);
    
    useEffect(() => {
        if(findArrEl !== undefined){
            setAdd(true);
        } else{
            setAdd(false);
        }
    }, [findArrEl])
    
    return ( 
        <div className='mt-5'>
            <ValidatorScreens 
                data={data}
                loading={loading}
                error={error}
                normalScreen={false}
                handleReturn={handleReturn}
                handleAdd={handleAdd}
                add={add}
            />
        </div>
    )
}

export default ProductScreen;
