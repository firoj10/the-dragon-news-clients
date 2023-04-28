import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condiction</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit excepturi voluptas
                 dolor odit consequuntur dignissimos hic! Esse suscipit quos labore magni 
                pariatur doloremque commodi libero! Repudiandae magnam minus velit. Temporibus.</p>
                <p>Go Back To <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;