import React, { useContext } from 'react';
import {FirstName, LastName} from './App';

// second method, using useContext() method.
const ComC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <h1>
            My name is {fname} {lname}
        </h1>

    );

};



// // First method, using createContext() method.

// const ComC = () => {
//     return (
//         <>
//         <FirstName.Consumer>
//         { (fname) => {
//                 return (
//                     <LastName.Consumer>
//                     { (lname) => {
//                         return (
//                         <h1> 
//                             My name is {fname} {lname}
//                         </h1>);
//                     }}
//                     </LastName.Consumer>
//                 );
//             }
 
//         }
//         </FirstName.Consumer>
//         </>);
// };

export default ComC;