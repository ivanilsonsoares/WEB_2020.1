import React from 'react'

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

export default Enemy;