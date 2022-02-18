import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { searchCryptocurrencies } from '../helpers/getCryptocurrencies';

export const AddCryptocurrency = ( { setDisplayedCryptocurrencies }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);    
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // if ( inputValue.trim().length > 0 ){ // check this later

        //       const currency = searchCryptocurrencies(inputValue);
        //       setDisplayedCryptocurrencies( currency => [...currency, inputValue] );
        //     setInputValue(currency);
        //     console.log(currency);
        //  }
        // else {
            setDisplayedCryptocurrencies( currencies => [...currencies, inputValue] );
             setInputValue('');
           
        // }
    }

    return (
        <form 
            className='form-group'
            onSubmit={ handleSubmit }>
            <input className='form-control'
                type="text"
                value={ inputValue }
                onChange={ handleInputChange}
            />


        </form>
    )
}

AddCryptocurrency.propTtypes = {
    setDisplayedCryptocurrencies: PropTypes.func.isRequired
}
