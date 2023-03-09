import React from 'react';
import "../stylesheets/review.css";

function Review(props) {
    return (
        <div className="box-container rounded-4">
            <p>{props.texto}</p>
            <div className="box-user">
                <img className='img-rounded' src={require(`../images/${props.imagen}.jpg`)} width="20%" alt="anime-girl"/>
                <div>
                    <h3 className="text-white">{props.nombre}</h3>
                    <p className="text-white-50">{props.cargo}</p>
                </div>
            </div>
        </div>
    )
}

export default Review;