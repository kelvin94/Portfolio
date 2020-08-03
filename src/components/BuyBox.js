import React from "react"
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
const BuyBox = (props) => {
    return ( 
        <div>
            <Form>                
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>select a product</Form.Label>
                    <Form.Control as="select" onChange={(e) => {props.setSelectedProduct( e.target.value )}}>

                    {props.offers.map(product => (
                        <option key={product.seckillSwagId} value={product.seckillSwagId}>{product.title}</option>
                    ))}
                    </Form.Control>
                </Form.Group>
                <button onClick={event => props.handleBuy(event)}>Buy</button>

            </Form>
        </div>
     );
}
 
export default BuyBox;