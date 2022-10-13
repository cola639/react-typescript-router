import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: FC<IAboutPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('The number is ' + number);
        } else {
            setMessage('No number was provided');
        }
    }, []);

    return (
        <div>
            <p>This is the about page.</p>
            <p>{message}</p>
        </div>
    );
};

export default AboutPage;
