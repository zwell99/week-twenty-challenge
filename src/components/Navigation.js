import React, { useState } from 'react';

function Navigation({ page, setPage }) {
    const pageOptions = ['About me', 'Portfolio', 'Contact', 'Resume'];
    
    return (
        <div>
            <p onClick={() => setPage(pageOptions[0])}>About me</p>
            <p onClick={() => setPage(pageOptions[1])}>Portfolio</p>
            <p onClick={() => setPage(pageOptions[2])}>Contact</p>
            <p onClick={() => setPage(pageOptions[3])}>Resume</p>
        </div>
    )
}

export default Navigation;