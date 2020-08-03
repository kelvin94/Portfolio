import React, { useState, useEffect } from 'react';
import { Col, Row, Form,Container } from "react-bootstrap";


import ResponseBox from "./ResponseBox"
import Header from "./Header"
import ListContainer from "./ListContainer"
import BuyBox from "./BuyBox"
import axios from "axios";

const WindowContainer = (props) => {
    const [offers, setOffers] = useState([]);
    const [frontEndCheckMessage, setFrontEndCheckMessage] = useState('');
    const [backEndMessage, setBackEndMessage] = useState({
        state: null, // 0 - error, 1-success
        message: ''
    });
    const [selectedProduct, setSelectedProduct] = useState('')
    const [md5HashedUrl, setMd5HashedUrl] = useState('')
    const [dealPrice, setDealPrice] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const getProducts = () => {
        axios.get("https://disseckill.jyl69.xyz:8663/swag")
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
        console.log('selectedProduct '+selectedProduct)
        if(!phoneNumber) {
            setFrontEndCheckMessage('PhoneNumber cannot be empty')
            return
        } 
        if(!selectedProduct) {
            setFrontEndCheckMessage('Selected product cannot be empty')
            return
        } 
        if(!dealPrice || !md5HashedUrl) {
            setFrontEndCheckMessage('Order API not generating MD5 hashed URL.')
            return
        }

        const headers = {
            'Content-Type': 'application/json'
          }
        
        let swag = {
            seckillSwagId: selectedProduct,
            dealPrice: dealPrice,
            userPhone: parseInt(phoneNumber),
            md5Url: md5HashedUrl
        };
    
        axios.post(`https://disseckill.jyl69.xyz:8663/swag`,  swag , {
            headers: headers
        })
        .then((response) => {
            console.log(response.data);
            if(response.data.state == 1) {
                setBackEndMessage({
                    state: 1,
                    message: "Purchase success"
                });
            }
            getProducts()
          }, (error) => {
            console.log("in error");
            console.log(error.response.data);
            
            console.log(error.response.data.message);
            setBackEndMessage({
                state: 0,
                message: error.response.data.message
            });
            getProducts()
          }
        );
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
                        <ResponseBox frontEndMessage={frontEndCheckMessage} setFrontEndMessage={setFrontEndCheckMessage} backEndMessage={backEndMessage} setBackEndMessage={setBackEndMessage}/> 
                         
                    </Col>
                    <Col xs={4} md={4}>
                        <BuyBox 
                            offers={offers}
                            handleBuy={handleBuy} 
                            setSelectedProduct={setSelectedProduct}
                            setMd5HashedUrl={setMd5HashedUrl}
                            setDealPrice={setDealPrice}
                            setPhoneNumber={setPhoneNumber}                        />
                    </Col>
                </Row>
            
            
            
            
            {/* <Container id={2}/> */}
        </Container>
    );
}
 
export default WindowContainer;