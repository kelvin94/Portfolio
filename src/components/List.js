import React from "react"
import ResponseBox from "./ResponseBox"

import InputBox from "./InputBox"
class List extends React.Component {
    render() {
        return(
            <div >
                
                {this.props.offers.map(offer => (
                    
                    <InputBox 
                        key={offer.seckillSwagId}
                        offer={offer} 
                        handleChangeProps={this.props.handleChangeProps}
                        updateMd5URLMapProps={this.props.updateMd5URLMapProps} 

                    />
                ))}
                

            </div>
        );
    }
}

export default List