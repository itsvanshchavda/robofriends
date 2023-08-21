import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((robot) => (
        <Card 
            key={robot.id} 
            id={robot.id} 
            name={robot.name} 
            email={robot.email} 
        />
    ));

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;


//PROPS = Using the propes is just never be changed and given the properties
// STATE  = objects that describe your application like value of inpute its changable 

//STATE = PARENT >> PROPS = CHILD => STATES TELLS PROPS TO WHAT TO HAVE 