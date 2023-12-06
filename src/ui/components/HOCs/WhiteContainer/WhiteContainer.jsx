import React from 'react';

export const WhiteContainer = ({children, style, className='mw-100'}) => {
    return (
        <div className={`d-flex flex-column bg-white rounded p-3 ${className}`} style={style}>
            {children}
        </div>
    );
};