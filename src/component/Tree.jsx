import React from 'react';
import Logo from './images/Logo.svg';
import './Tree.css';
import Circle from './Circle.jsx'
const TreeRender = () => {
return (
    <div className="tree-container">
            <div className="tree-image">
                <Circle/>
                <img src={Logo} alt="Logo" className="logo-image"  onContextMenu={(e) => e.preventDefault()} draggable="false" />
            </div>
    </div>
);
};

export default TreeRender;
