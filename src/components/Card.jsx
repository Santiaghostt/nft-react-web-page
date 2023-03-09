import React from 'react';
import '../stylesheets/styles.css';

function Card (props) {
    return (
        <div class="d-flex justify-content-center">
        <main className="d-flex justify-content-center my-5 bgcolor">
        <div className="card w-75 bg-card-color align-items-center p-3">
            <img className="rounded img-size" src={require(`../images/${props.img}.jpg`)} alt="equilibrio"/>
            <div className="card-body px-0">
                <h5 className="card-title text-white letraP mb-3">{props.name}</h5>
                <p className="card-text text-white-50 letraP mb-3 letraSZ">{props.desc}</p>
                <div className="d-flex justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                        <img className="icono" src={require(`../images/${props.imgETH}.svg`)} alt="ethereum"/>
                        <p className="mx-1 text-cyan letraP letraSZ">0.041 ETH</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img className="icono" src={require(`../images/${props.imgCLK}.svg`)} alt="reloj"/>
                        <p className="text-white-50 letraP letraSZ">3 days left</p>
                    </div>
                </div>
                <li className="raya mx-auto"></li>
                <div className="d-flex">
                    <div className="my-3 d-flex">  
                        <img width="15%" className="me-2 avatar-size border border-white rounded-circle" src={require(`../images/${props.imgAVT}.png`)} alt="avatar"/>
                        <p className="me-1 mt-2 text-white-50 letraP letraSZ center">Creation of</p>
                        <p className="mt-2 text-white letraP letraSZ">{props.creator}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
    )
}
export default Card;