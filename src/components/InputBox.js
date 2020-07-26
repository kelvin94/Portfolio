import React from "react"
import ResponseBox from "./ResponseBox"
import ExportURLBox from "./ExportURLBox"
import axios from "axios";

class InputBox extends React.Component {
    state = {        
        phoneNumber: 0,
        seckillSwagId: 0,
        md5Url: "",
        dealPrice: 0,
        responseMessage: ""
    };
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
          }
        //   {"timestamp":"2020-07-26T17:23:30.412+0000","status":400,"error":"Bad Request","errors":[{"codes":["NotNull.seckillParameter.userPhone","NotNull.userPhone","NotNull.java.lang.Long","NotNull"],"arguments":[{"codes":["seckillParameter.userPhone","userPhone"],"arguments":null,"defaultMessage":"userPhone","code":"userPhone"}],"defaultMessage":"phone num cannot be null","objectName":"seckillParameter","field":"userPhone","rejectedValue":null,"bindingFailure":false,"code":"NotNull"},{"codes":["NotNull.seckillParameter.md5Url","NotNull.md5Url","NotNull.java.lang.String","NotNull"],"arguments":[{"codes":["seckillParameter.md5Url","md5Url"],"arguments":null,"defaultMessage":"md5Url","code":"md5Url"}],"defaultMessage":"url cannot be null","objectName":"seckillParameter","field":"md5Url","rejectedValue":null,"bindingFailure":false,"code":"NotNull"}],"message":"Validation failed for object='seckillParameter'. Error count: 2","path":"/swag"}
        let swag = {
            seckillSwagId: this.state.seckillSwagId,
            dealPrice: this.state.dealPrice,
            userPhone: parseInt(this.state.phoneNumber),
            md5Url: this.state.md5Url
        };
    
        axios.post(`http://disseckill.jyl69.xyz:8080/swag`,  swag , {
            headers: headers
        })
        .then((response) => {
            console.log(response.data);
            if(response.data.state == 1) {
                this.setState({
                    responseMessage: "Purchase success"
                });
            }
            
          }, (error) => {
            console.log("in error");
            console.log(error.response.data);
            
            console.log(error.response.data.message);
            this.setState({
                responseMessage: error.response.data.message
            });
          });
    };

    exportURL = e => {
        e.preventDefault();
        const url = `http://disseckill.jyl69.xyz:8080/export/url/${this.props.offer.seckillSwagId}`
        axios.get(url)
          .then(response => {
              console.log(response.data);
            // this.props.handleChangeProps(response.data.seckillSwagId, response.data.stockCount);
            this.props.updateMd5URLMapProps(response.data.seckillSwagId, response.data.md5Url, response.data.stockCount);
            this.setState({
                    seckillSwagId: response.data.seckillSwagId,
                    md5Url: response.data.md5Url,
                    dealPrice: response.data.seckill_price
            });

          });
    }
    
    render() {
        return (
            <div className="listContainer">
                    
                    <ResponseBox responseMessage={this.state.responseMessage} />
                    <div className="InputBox">
                        <form onSubmit={this.handleSubmit}>
                            <p>Click "export url" and fill in the form b4 clicking buy</p>
                            <input name="seckillSwagId" type="number" placeholder="Product id" value={this.state.seckillSwagId} onChange={this.onChange}/>
                            <input onChange={this.onChange} name="phoneNumber" type="number" value={this.state.phoneNumber} placeholder="Phone number..23910973664" />
                            <input type="submit" value="Buy" />
                        </form>
                        <div className="tooltip">
                            <span className="tooltiptext">The meaning of "secured url" is not only that the backend can apply different salt of hashing for each product in each sale period so that people cannot reuse the same url to buy in the future, but also this prevents people findout the url ahead of time and span http request to the url before the sale starts.</span>
                            <button onClick={this.exportURL}>Export secured url and get latest stock count</button>
                        </div>
                        

                        <p>Product: {this.props.offer.title}</p>
                        <p>MSRP: {this.props.offer.price}</p>
                        <p>Discounted price: {this.props.offer.seckill_price}</p>
                        <p>Current stock count:{this.props.offer.stockCount}</p>

                    </div>
                    
            </div>

        )
    }
}

export default InputBox