import React from "react"
import ResponseBox from "./ResponseBox"
import ExportURLBox from "./ExportURLBox"
import axios from "axios";
import Card from 'react-bootstrap/Card'
const ProductInfoBox = (props) => {
    return ( 
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Product: {props.product.title}</Card.Title>
                    <Card.Text>
                        <p>MSRP: {props.product.price}</p>
                        <p>Discounted price: {props.product.seckill_price}</p>
                        <p>Current stock count: {props.product.stockCount}</p>
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            
                    
        </div>
    );
}
 
export default ProductInfoBox;
// class InputBox extends React.Component {
//     // state = {        
//     //     phoneNumber: 0,
//     //     seckillSwagId: 0,
//     //     md5Url: "",
//     //     dealPrice: 0,
//     //     responseMessage: ""
//     // };
    
//     // onChange = e => {
//     //     this.setState({
//     //         [e.target.name]: e.target.value
//     //     });
//     // };

//     // handleSubmit = e => {
//     //     e.preventDefault();
//     //     const headers = {
//     //         'Content-Type': 'application/json'
//     //       }
//     //     //   {"timestamp":"2020-07-26T17:23:30.412+0000","status":400,"error":"Bad Request","errors":[{"codes":["NotNull.seckillParameter.userPhone","NotNull.userPhone","NotNull.java.lang.Long","NotNull"],"arguments":[{"codes":["seckillParameter.userPhone","userPhone"],"arguments":null,"defaultMessage":"userPhone","code":"userPhone"}],"defaultMessage":"phone num cannot be null","objectName":"seckillParameter","field":"userPhone","rejectedValue":null,"bindingFailure":false,"code":"NotNull"},{"codes":["NotNull.seckillParameter.md5Url","NotNull.md5Url","NotNull.java.lang.String","NotNull"],"arguments":[{"codes":["seckillParameter.md5Url","md5Url"],"arguments":null,"defaultMessage":"md5Url","code":"md5Url"}],"defaultMessage":"url cannot be null","objectName":"seckillParameter","field":"md5Url","rejectedValue":null,"bindingFailure":false,"code":"NotNull"}],"message":"Validation failed for object='seckillParameter'. Error count: 2","path":"/swag"}
//     //     let swag = {
//     //         seckillSwagId: this.state.seckillSwagId,
//     //         dealPrice: this.state.dealPrice,
//     //         userPhone: parseInt(this.state.phoneNumber),
//     //         md5Url: this.state.md5Url
//     //     };
    
//     //     axios.post(`http://disseckill.jyl69.xyz:8663/swag`,  swag , {
//     //         headers: headers
//     //     })
//     //     .then((response) => {
//     //         console.log(response.data);
//     //         if(response.data.state == 1) {
//     //             this.setState({
//     //                 responseMessage: "Purchase success"
//     //             });
//     //         }
            
//     //       }, (error) => {
//     //         console.log("in error");
//     //         console.log(error.response.data);
            
//     //         console.log(error.response.data.message);
//     //         this.setState({
//     //             responseMessage: error.response.data.message
//     //         });
//     //       });
//     // };

//     // exportURL = e => {
//     //     e.preventDefault();
//     //     const url = `http://disseckill.jyl69.xyz:8663/export/url/${this.props.offer.seckillSwagId}`
//     //     axios.get(url)
//     //       .then(response => {
//     //           console.log(response.data);
//     //         // this.props.handleChangeProps(response.data.seckillSwagId, response.data.stockCount);
//     //         this.props.updateMd5URLMapProps(response.data.seckillSwagId, response.data.md5Url, response.data.stockCount);
//     //         this.setState({
//     //                 seckillSwagId: response.data.seckillSwagId,
//     //                 md5Url: response.data.md5Url,
//     //                 dealPrice: response.data.seckill_price
//     //         });

//     //       });
//     // }
    
//     render() {
//         return (
            

//         )
//     }
// }

// export default InputBox