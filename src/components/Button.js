import React from 'react';

const Button = ({icon, tooltip, onClick}) => {
    return (
        <div>
            <button 
                className="btn my-2 mx-2" 
                data-bs-toggle="tooltip" 
                title={tooltip} 
                onClick={onClick} 
                style={{backgroundColor:`#00b386`}}
            >
                <img src={icon} alt="" className="icon-size" style={{width:'20px', height:'20px', objectFit:'cover'}}/>  
            </button>
        </div>
    );
}

export default Button;
