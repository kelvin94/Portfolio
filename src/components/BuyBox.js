import React from "react"
import Form from 'react-bootstrap/Form'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import { useRef, useState } from 'react'
import axios from "axios";

const BuyBox = (props) => {
    const [dummyPhoneNumber, setDummyPhoneNumber] = useState('')
    const [copySuccess, setCopySuccess] = useState(null)
    const textAreaRef = useRef(null);

    const updateSelectedProductUrlHash = (swagId) => {
        const url = `https://disseckill.jyl69.xyz:8663/export/url/${swagId}`
        axios.get(url)
          .then(response => {
            console.log(response.data);
            props.setMd5HashedUrl(response.data.md5Url)
            props.setDealPrice(response.data.seckill_price)

          });
    }

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };

    const generateDummyNum = (event) => {
        event.preventDefault();
        let length = 9;
        setDummyPhoneNumber(`${Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1))}`)
    }

    return ( 
        <div>
            
            <Row>
                <Col className="mb-12">
                    
                    <InputGroup className="mb-12">
                        <FormControl
                            placeholder="Generate phone number"
                            aria-label="Generate phone number"
                            aria-describedby="basic-addon2"
                            value={dummyPhoneNumber}
                            ref={textAreaRef}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={(event) => generateDummyNum(event)}>Generate</Button>
                            
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-12">
                        {
                            /* Logical shortcut for only displaying the 
                                button if the copy command exists */
                                document.queryCommandSupported('copy') &&
                                    <div>
                                    <Button variant="outline-secondary" onClick={copyToClipboard}>Copy Generated PhoneNumber</Button> 
                                    {copySuccess}
                                    </div>
                            }
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col className="mb-12">
                    <Form>                
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>select a product</Form.Label>
                            <Form.Control as="select" 
                            
                                onChange={(e) => {
                                    props.setSelectedProduct( e.target.value )
                                    updateSelectedProductUrlHash(e.target.value)
                            }}> 
                                <option value=''></option>
                                {props.offers.map(product => (
                                    <option key={product.seckillSwagId} value={product.seckillSwagId}>Product ID: {product.seckillSwagId}, {product.title}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>phone number</Form.Label>
                            <Form.Control type="number" placeholder="Enter phone number" onChange={(e) => {
                                props.setPhoneNumber( e.target.value )
                                }}/> 
                            
                            <Form.Text className="text-muted">
                            Pls use the randomly generated number above for testing.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" onClick={event => props.handleBuy(event)}>Buy</Button>

                    </Form>

                </Col>
            </Row>
        </div>
     );
}
 
export default BuyBox;