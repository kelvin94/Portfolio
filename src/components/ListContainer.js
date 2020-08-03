import React from "react"
import ResponseBox from "./ResponseBox"
import  styled  from '@emotion/styled';

import ProductInfoBox from "./ProductInfoBox"
const ListContainer = (props) => {
    const ListContainer = styled.div`
        margin: 0 auto;
        align-items: center;
        
        /* display: flex;
        flex-direction: column;
        justify-content: space-around; */
        border-radius: 15px;
    `
    return ( 
        <ListContainer >
                
                {props.offers.map(product => (
                    
                    <ProductInfoBox 
                        key={product.seckillSwagId}
                        product={product} 
                        // handleChangeProps={this.props.handleChangeProps}
                        // updateMd5URLMapProps={this.props.updateMd5URLMapProps} 

                    />
                ))}
                

        </ListContainer>
     );
}
 
export default ListContainer;