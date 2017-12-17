import React from 'react';
const Header = (props) => (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );

// Default props
Header.defaultProps = {
    title: 'Random Decision'
}
export default Header;