import React from 'react'
import './Head.css';

export default function Head(props) {
    return (
        <div>
            <img className="head" src={props.img} alt=""/>
        </div>
    )
}
