import { React, useState } from 'react';
import Spinner from './Spinner';
import DoneCircle from './DoneCircle';

const Card = ({ status, stepNumber, stepName }) => {
    // status can be "loading" or "done"

    const cardClasses = `bg-white rounded-lg p-4 border border-gray-950 ${
        status === 'done' ? 'bg-green-100 text-opacity-25 ' : 'shadow-2xl shadow-blue-500 '
    }`;

    return (
        <div className={cardClasses + "card w-56 h-72 my-10 text-center"}>
            <div className="card-body">
                <h2 className="pt-4 text-3xl text-gray-700">{stepName}</h2>
                <div role="status">
                <div className='mt-10'>
                    {status === 'done' ? <DoneCircle /> : <Spinner />}
                </div>
                { status !== 'done' && (
                    <div className="mt-7">
                    
                    <span className="pt-20 text-gray-800 animate-pulse">Loading...</span>
                </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Card;
