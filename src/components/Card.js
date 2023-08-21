import React from "react";


const Card = ({name , id , email }) => {
   // const  {name , id , email }= props; // ES6 Destructring 
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-4">
            <img src={`https://robohash.org/${id}?200x200`} alt="logo" />

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card