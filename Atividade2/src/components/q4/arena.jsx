import React from 'react'

function Arena(props) {
    return (
        <div>
            Nome da arena: {props.name}
            <div className="row-md-12">
            {React.Children.map(props.children, personagem => {
                return React.cloneElement(personagem, { ...props });
            })}
            </div>
        </div>
    )
}

export default Arena;