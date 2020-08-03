import React, { useState, useEffect } from 'react';
import { Col, Row, Form,Container } from "react-bootstrap";


import ResponseBox from "./ResponseBox"
import Header from "./Header"
import ListContainer from "./ListContainer"
import BuyBox from "./BuyBox"
import axios from "axios";

const WindowContainer = (props) => {
    const [offers, setOffers] = useState([]);
    const [message, setMessage] = useState('default msg');
    const [selectedProduct, setSelectedProduct] = useState('')

    const getProducts = () => {
        axios.get("http://disseckill.jyl69.xyz:8080/swag")
          .then(response => {
              console.log(response.data)
            setOffers(
               response.data
            )
          });
    }
    const handleBuy = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }
    useEffect(() => {
        getProducts()
      }, [])
    return ( 
        <Container className="App">
            <Row>
                <Col>
                <Header/>
                </Col>
            </Row>
            
                <Row>
                    <Col xs={4} md={3}>
                        <ListContainer offers={offers}/>
                    </Col>
                    <Col xs={4} md={5}>
                        <ResponseBox message={message}/> 
                    </Col>
                    <Col xs={4} md={4}>
                        <BuyBox 
                            offers={offers}
                            handleBuy={handleBuy} 
                            setSelectedProduct={setSelectedProduct}
                        />
                    </Col>
                </Row>
            
            
            
            
            {/* <Container id={2}/> */}
        </Container>
    );
}
 
export default WindowContainer;