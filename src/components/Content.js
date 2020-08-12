import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from '@material-ui/core';
import './Content.css';

function Content() {
    return (
        <div className="content">
            <div className="buttonGroup">
                <Link to="/fire">
                    <Button className="btn" variant="contained" color="primary" size="large">
                        Fire
                    </Button>
                </Link>
                <Link to="/medical">
                    <Button className="btn" variant="contained" color="primary" size="large">
                        Medical
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Content
