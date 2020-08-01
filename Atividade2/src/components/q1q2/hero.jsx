import React from 'react'
import { URL_HERO, URL_ENEMY } from '../../constants'

function Hero(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.name}
            </div>
            <div className="card-body">
                <img className="card-img-top" src={props.img} alt='guilda' width="100" height="100" />
            </div>
        </div>

    )
}

function Enemy(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.name}
            </div>
            <div className="card-body">
                <img className="card-img-top" src={props.img} alt='guilda' width="50" height="100" />
            </div>
        </div>
    )
}

function Arena() {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
                <Hero name = "Baki" img={URL_HERO}/>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3">
                <Enemy name = "Yujiro" img={URL_ENEMY}/>
            </div>
        </div>
    )
}

export default Arena;