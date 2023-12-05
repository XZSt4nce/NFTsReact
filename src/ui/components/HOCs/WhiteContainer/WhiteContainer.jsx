import React from 'react';

export const WhiteContainer = ({children, style, className='mw-100'}) => {
    return (
        <div className={`d-flex flex-column bg-white flex-grow-1 rounded p-3 ${className}`} style={style}>
            {children}
        </div>
    );
};