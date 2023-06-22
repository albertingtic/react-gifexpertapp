import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategorias = ({setCategorias}) => {
  
    const [inputValue, setinputValue] = useState('');

    const handleImputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
        setCategorias(cast => [inputValue,...cast]);
        setinputValue('');
    }
    }
  
    return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            value={inputValue}
            onChange={handleImputChange}
            />
        </form>
    </>
  )
}

AddCategorias.prototype = {
    setCategorias: PropTypes.func.isRequired
}