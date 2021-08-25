import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { context } from '../createContext';
import { types } from '../types/types';
import CartProduct from './CartProduct';
import NoProducts from './NoProducts';
import Footer from './ui/Footer';

const Cart = () => {

    const {dispatch, state} = useContext(context);

    const handleDeleteAll = () => {
        Swal.fire({
            icon: 'question',
            title: 'Are you sure to remove all products?',
            showCancelButton: true,
            confirmButtonText: `Yes, delete`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Deleted!', '', 'success');
              dispatch({
                  type: types.deleteAll,
              })
            }
          })
    }


    const handleDelete = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'Are you sure to remove this product?',
            showCancelButton: true,
            confirmButtonText: `Yes, delete`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Deleted!', '', 'success');
              dispatch({
                  type: types.delete,
                  payload: id,
              })
            }
          })
    }
    
    const handleIncrementQuantity = (id) => {
        dispatch({
            type: types.incrementQuantity,
            payload: id,
        })
    }

    const handleDecrementQuantity = (id) => {
        dispatch({
            type: types.decrementQuantity,
            payload: id,
        })
    }
    
    return (
        <div className='mt-5'> 
            <div className='cart-screen-container'>

            

            <h1 className='text-center'>Your cart</h1>
            
            <div className='mt-5 cart-products-container mb-5'>

                {
                    (!state.length)
                    &&
                    <div>
                        <NoProducts />
                        <Link to='/' className='btn btn-primary rounded mt-4'>Search products</Link>
                    </div>
                }

                {
                    (state.length >= 1)
                    &&
                    state.map(product => (
                        <CartProduct key={product.id} product={product} handleDelete={handleDelete} handleIncrementQuantity={handleIncrementQuantity} handleDecrementQuantity={handleDecrementQuantity} />
                    ))
                }

                {
                    (state.length >= 2)
                    &&
                    <button className='btn btn-danger' onClick={handleDeleteAll}>
                        Delete All
                    </button>
                }

            </div>

            </div>
            
            <Footer />
        </div>


    )
}
 
export default Cart;
