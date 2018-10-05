import React, { Component } from 'react';



const Input = (state, func) => {
        return (
            <div className="input">
                <input className="input__monsterInput" placeholder="What's Spookin You?" value={state} onChange={func}/>
                
            </div>
            
        )
}
export default Input;