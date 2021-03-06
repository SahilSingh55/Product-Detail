import React from 'react';

import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src="https://clipground.com/images/white-amazon-logo-png-1.png" alt="Amazon Logo" />
            </nav>
        </header>
    );
}

export default Topbar;