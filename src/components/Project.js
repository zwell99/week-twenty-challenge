import React, { useState } from 'react';

function Project({ img, title, deployedLink, githubLink }) {
    return (
        <div>
            <img src={img} />
            <h3>{title}</h3>
            <a src={deployedLink}>Deployed Project</a>
            <a src={githubLink}>GitHub</a>
        </div>
    )
}

export default Project;