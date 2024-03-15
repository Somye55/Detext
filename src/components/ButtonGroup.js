import React from 'react';
import { buttonData } from '../utils/ButtonData';
import { ButtonFunctions } from '../utils/ButtonFunctions';
import Button from './Button';

const ButtonGroup = ({ textData, triggerTextUpdate, triggerFilteredData }) => {
    const buttonFunctions = ButtonFunctions({ textData, triggerTextUpdate, triggerFilteredData });
    const buttonFunctionsArray = Object.values(buttonFunctions);
    return (
        <div className="d-flex justify-content-center gap-1 pl-4">
            {buttonData.map((button, index) => (
                <Button 
                    key={index} 
                    icon={button.icon} 
                    tooltip={button.tooltip} 
                    onClick={buttonFunctionsArray[index]} // Assign the corresponding function
                />
            ))}
        </div>
    );
}

export default ButtonGroup;
