import React from "react";

class Homepage extends React.Component {
    render(){
        return(<div className="Maindiv">
            <div className="SearchBox">
                <input type="text" id="search" />
            </div>
        </div>);
    }
}

export default Homepage;