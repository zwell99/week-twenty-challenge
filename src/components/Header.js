import React, { useState } from 'react';
import Navigation from './Navigation.js';

function Header({ page, setPage }) {
    return (
        <div>
            <h1>Zach Wellens</h1>
            <Navigation page={page} setPage={setPage} />
        </div>
    );
}

export default Header;