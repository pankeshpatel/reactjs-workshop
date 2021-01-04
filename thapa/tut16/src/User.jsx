import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

// method 1 ...
// const User = ({match}) => {
//     return <h1> This is  User {match.params.name} page </h1>
// };

// method 2 ...
const User = () => {
    // we use useLocation() to find 
    // the current url path...
    const location = useLocation();
    //const {name, fname, lname} = useParams();
    const {fname, lname} = useParams();


    //return <h1> This is  User {name} page </h1>
    // OR

    return (
    <>
        <h1> 
            This is  User {fname} {lname} page 
        </h1>
        <p> My current location is {location.pathname}  </p>
        {
            location.pathname === `/user/pankesh/patel` ? <button> Click Me  </button> : null
        }

        
    </>
    );
};

export default User;