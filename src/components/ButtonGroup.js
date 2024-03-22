import React from 'react';
import { buttonData } from '../utils/ButtonData';
import { ButtonFunctions } from '../utils/ButtonFunctions';
import Button from './Button';

const ButtonGroup = ({ textData, triggerTextUpdate, triggerFilteredData }) => {
    const buttonFunctions = ButtonFunctions({ textData, triggerTextUpdate, triggerFilteredData });
    const buttonFunctionsArray = Object.values(buttonFunctions);
    return (
        <div className="d-flex flex-wrap justify-content-center gap-2">
            {buttonData.map((button, index) => (
                <div className="row-sm-12  mb-2" key={index}>
                    <Button 
                        icon={button.icon} 
                        tooltip={button.tooltip} 
                        onClick={buttonFunctionsArray[index]}
                    />
                </div>
            ))}
        </div>
    );
}

export default ButtonGroup;
