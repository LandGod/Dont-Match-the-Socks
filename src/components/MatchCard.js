import React from "react";

function MatchCard(props) {
    return (

        <div className="col-2 sock-card mb-3">

                <img className="img-fluid img-thumbnail rounded" src={props.image} alt="Sock" onClick={() => props.clickHandler(props.id)} />

        </div>

    );
}

export default MatchCard;