import React from "react"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import  { useState, useEffect } from 'react';

const FrontEndMessageBox = (props) => {
  const [show, setShow] = useState(true);


    return ( 
        <div>
            
            {
                ( props.message) ? (
                    <Alert variant="danger" onClose={() => props.setFrontEndMessage('')} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                    {props.message}
                    </p>
                </Alert>
                ) : ('')
            }
            {/* <Button onClick={() => setShow(true)}>Show Alert</Button> */}
        </div>
     );
}
 
export default FrontEndMessageBox;