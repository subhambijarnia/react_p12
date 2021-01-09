import React from 'react';

const Avtlist = (props) => {
    return(
        <div className = "avtstyle ma4 bg-light-green dib pa4 grow tc shadow-4">
            <img src = {`https://joeschmoe.io/api/v1/${props.name}`} alt = "Avatar" />
            <h1> {props.name} </h1>
            <p> {props.work} </p>
        </div>
    )
}

export default Avtlist;