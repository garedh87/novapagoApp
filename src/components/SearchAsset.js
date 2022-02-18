import React, { useState } from 'react'
import { getDefault } from '../helpers/getDefault';

export const SearchAsset = ({setAssets}) => {

    const [inputValue, setInputValue] = useState([]);

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);    
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue == "") {
            
            return false;
          }
        else if(inputValue.trim().length>0 ){
            setAssets ( ast => [ inputValue]);
            setInputValue('');
        }
        

    }
    
    return (
        <form 
            className='form-group'
            onSubmit={ handleSubmit }>
            <input className='form-control'
                type="text"
                value={ inputValue }
                onChange={ handleInputChange}
                placeholder='Search...' />


        </form>  
        
        )
}
