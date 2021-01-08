import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] =  useState([
        {
            name:'Elon Musk',
            url: "https://techcrunch.com/wp-content/uploads/2020/02/GettyImages-1175368064.jpg?w=1390&crop=1",
        },
        {
            name:'Jeff Bezos',
            url: "https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale",
        },


    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);

    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");

    };


    return (
        <div className = "tinderCards">
            <div className="tinder_cardContainer">
                {people.map((person) => (
                <TinderCard
                className = "swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
                > 
                <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className = "card"
                >
                    <h3>{person.name}</h3>
                </div>

                </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
