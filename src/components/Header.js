import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Smart Emergency System</h1>
        </header>
    )
}

const headerStyle = {
    background: '#000',
    color: '#EEE5E9',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
