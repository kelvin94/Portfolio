import React from "react"
class ResponseBox extends React.Component {
    render() {
        // <input type="checkbox" />

        return (
            <div className="ResponseBox">
                <h1>{this.props.responseMessage}</h1>
                
            </div>
        )
    }
}

export default ResponseBox