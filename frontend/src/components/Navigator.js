import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = ({ location }) => {
    return (
        location === '/songs' || (
            <nav className="flex justify-start pl4">
                <Link className="link pointer dim" to="/songs">
                    Home
                </Link>
            </nav>
        )
    );
};

export default Navigator;
