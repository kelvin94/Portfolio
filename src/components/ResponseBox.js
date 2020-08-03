import React from "react"
const ResponseBox = (props) => {
    return ( 
        <div>
                
                Note: You can't repeatedly buy same product with same phone number, the request will not hit the db, caching service will catch you repeatedly buy and return response asap.
                <h3>message from API : {props.message}</h3>
                
                
            </div>
     );
}

export default ResponseBox