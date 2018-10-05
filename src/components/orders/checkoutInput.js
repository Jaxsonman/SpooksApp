import React from 'react';

const CheckoutInput = ({title, state, name}, onChange, index) => {
    return (
        <div key={index} className="input">
            <input placeholder={title} name={name} value={state} onChange={onChange}/>
        </div>
    )
}
export default CheckoutInput;