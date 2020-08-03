import React from "react"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import  { useState, useEffect } from 'react';

const BackEndMessageBox = (props) => {
  const [show, setShow] = useState(true);

    if(props.message) {
        if(props.message.state == 0) {
            return ( 
                <div>
                    
                    
                        
                            <Alert variant="danger" onClose={() => props.setBackEndMessage({state: null, message: ''})} dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                                {props.message.message}
                            </p>
                        </Alert>
                        
                    
                    {/* <Button onClick={() => setShow(true)}>Show Alert</Button> */}
                </div>
             );
        } else if(props.message.state == 1) {
            return ( 
                <div>
                    
                    
                        
                            <Alert variant="success" onClose={() => props.setBackEndMessage({state: null, message: ''})} dismissible>
                            <Alert.Heading>Oh snap! You got an success msg!</Alert.Heading>
                            <p>
                                {props.message.message}
                            </p>
                        </Alert>
                        
                    
                    {/* <Button onClick={() => setShow(true)}>Show Alert</Button> */}
                </div>
             );
        }
    } else {
        return (
            <div></div>
        )
    }
    return null;
    
}
 
export default BackEndMessageBox;