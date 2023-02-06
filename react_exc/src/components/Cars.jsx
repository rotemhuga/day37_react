import React from "react";

const Cars = (props) => {
    return (
        <div id = "list">
            <div>
                {props.image}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.color}
            </div>
            <div>
                {props.year}
            </div>
        // </div>
    )
}

export default Cars;