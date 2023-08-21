

import React from "react";
// import CardList from "./CardList";

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll',border:'1px solid black',height:'600px'}}>
            {props.children} { /* loades the childeren <CardList /> */}
        </div>
    );
}

export default Scroll;