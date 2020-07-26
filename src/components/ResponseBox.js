import React from "react"
class ResponseBox extends React.Component {
    render() {
        // <input type="checkbox" />
        
        
        return (
            <div className="ResponseBox">
                
                Note: You can't repeatedly buy same product with same phone number, the request will not hit the db, caching service will catch you repeatedly buy and return response asap.
                <h3>Status: {this.props.responseMessage}</h3>
                
                
            </div>
        )
    }
}

export default ResponseBox