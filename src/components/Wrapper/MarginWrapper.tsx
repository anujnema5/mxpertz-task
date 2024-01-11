import React from 'react';
import Tag from '../ui/Tag';

const MarginWrapper = ({ children, style, className, tagText, sectionDescription, sectionHeading, width }: {
    children: React.ReactNode,
    sectionHeading: string,
    tagText: string,
    style?: React.CSSProperties,
    className?: string,
    width?: string,
    sectionDescription?: string

}) => {

    return (
        <div style={style} className={className + ' flex flex-col justify-center items-center py-28'}>
            <Tag text={tagText} width='50px' />
            <div className='text-center  flex flex-col items-center justify-center w-10/12'>
            <h3 className='text-5xl font-semibold text-gray-700 my-3'>{sectionHeading}</h3>

                {sectionDescription && <p className='w-8/12 text-gray-600 font-semibold'>{sectionDescription}</p>}
            {children}
            </div>
        </div>
    );
};

export default MarginWrapper;
