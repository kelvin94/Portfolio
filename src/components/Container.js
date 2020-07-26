import React from "react"
import List from "./List"
import axios from "axios";

import Header from "./Header"

class Container extends React.Component {
    
    state = {
        offers: []
    };

    handleChange = (seckillSwagId, stockCount) => {
        this.setState({
            offers: this.state.offers.map(offer => {
                if(offer.seckillSwagId === seckillSwagId) {
                    offer.stockCount = stockCount;
                }
                return offer;
            })
        });
    };

    updateMd5URL = (seckillSwagId, md5Url, stockCount) => {
        this.setState({
            offers: this.state.offers.map(offer => {
                if(offer.seckillSwagId === seckillSwagId) {
                    offer.stockCount = stockCount;
                    offer.md5Url = md5Url;
                }
                return offer;
            })
        });
    }

    // get all offers
    componentDidMount() {
        axios.get("http://disseckill.jyl69.xyz:8080/swag")
          .then(response => {
              this.setState({
                offers: response.data
              })
          });
    }

    render() {
        return(
            <div>
                <Header/>
                <List 
                    offers={this.state.offers} 
                    handleChangeProps={this.handleChange} 
                    updateMd5URLMapProps={this.updateMd5URL} 
                />
                
            </div>
        );
    }
}

export default Container