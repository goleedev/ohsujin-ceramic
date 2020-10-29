import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className="loading-container container flex-lg-column">
            <Spinner animation="border" variant="dark" className="loading"/>
            <h3>Loading</h3>
        </div>
    )
}

export default Loading;
