import React from 'react';

const Description = () => {
    return (
        <div className='description'>
            <div className='question1 answer'>
                <h2>1. How Reset works?</h2>
                <h3>Answer:</h3>
            </div>
            <div className='question2 answer'>
                <h2>2. props vs state?</h2>
                <h3>Answer:</h3>
                <p>Props:</p>
                <ul>
                    <li>Props are read only</li>
                    <li>Props can not be modified</li>
                </ul>
                <p>State</p>
                <ul>
                    <li>State changes can be asynchronous</li>
                    <li>State can be modified using this.setState</li>
                </ul>
            </div>
            <div className='question3 answer'>
                <h2>3. How useStae works?</h2>
                <h3>Answer:</h3>
            </div>
        </div>
        );
    };
    
    export default Description;