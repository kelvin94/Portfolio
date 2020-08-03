import React from "react"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import  { useState, useEffect } from 'react';
import FrontEndMessageBox from './FrontEndMessageBox'
import BackEndMessageBox from './BackEndMessageBox'
const ResponseBox = (props) => {
    
    return ( 
        <div>
                <h5>Response msg from front end and back end</h5>
                <p>Note-1: You can't repeatedly buy same product with same phone number, the request will not hit the db, caching service will catch you repeatedly buy and return response asap.</p>
                <p>Note-2: If purchase is successful, lefthand side product list's stock count will be updated.</p>
                {
                    props.frontEndMessage? (
                        <FrontEndMessageBox message={props.frontEndMessage} setFrontEndMessage={props.setFrontEndMessage}/>
                    ) : ('')
                }
                {
                    props.backEndMessage? (
                        <BackEndMessageBox message={props.backEndMessage} setBackEndMessage={props.setBackEndMessage}/>
                    ) : ('')
                }

                
        </div>
     );
}

export default ResponseBox