import React from 'react';
import '../styles.css';

{/* This is the HeaderContainer in Client/containers/HeaderContainer.jsx */ }

const HeaderContainer = () => {
    // insert any logic for the HeaderContainer here
    return (
        <div id="navBar">
            <div id="flex-item"></div>
            <div id="flex-item">
                <p>Stretch.io</p>
            </div>
            <div id="flex-item">
                <p>signup / login</p>
            </div>
        </div>
    )
}

export default HeaderContainer;