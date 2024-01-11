import React from 'react';

const MarginWrapper = ({ children, style, className }: {
    children: React.ReactNode,
    style?: React.CSSProperties,
    className?: string
}) => {

    return (
        <div style={style} className={className + ' flex flex-col justify-center items-center py-28'}>
            {children}
        </div>
    );
};

export default MarginWrapper;
