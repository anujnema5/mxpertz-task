import React from 'react';
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import Description from '../ui/Description';
import Button from '../ui/Button';

const MarginWrapper = ({ children, style, className, tagText, sectionDescription, sectionHeading, width, buttonText }: {
    children?: React.ReactNode,
    sectionHeading: string,
    tagText: string,
    style?: React.CSSProperties,
    className?: string,
    width?: string,
    sectionDescription?: string,
    buttonText?: string

}) => {

    return (
        <div style={style} className={className + ' flex flex-col justify-center items-center py-28'}>
            <Tag text={tagText} width='50px' />
            <div className='text-center  flex flex-col items-center justify-center w-10/12 gap-5'>
                <Heading className='mt-8' heading={sectionHeading}/>

                {sectionDescription && <Description desc={sectionDescription}/>}
                {children}
                {buttonText && <Button text={buttonText}/>}
            </div>
        </div>
    );
};

export default MarginWrapper;
