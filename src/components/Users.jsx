import users from "../users.json";
import React, { useState } from 'react';
const Users = () => {
   
   const [ change, setChange ] = useState(0);
  
    const clickIt = () => {
        let ranNumber = Math.floor(Math.random() * 10);
        setChange(ranNumber)
        let bg = ['#B10DC9', '#001f3f', '#3D9970', '#FFDC00', '#F012BE'];

    };
 
    return (
        <div>
            <div className="tarjeta" >
               
            <div className="userName">{users[change].name.title} {users[change].name.first} {users[change].name.last}</div>
            
            <div className="userImg"><img src={users[change].picture.large}></img></div>
            <div className="userEmail">{users[change].email}</div>
            <div className="userPhone">{users[change].phone}</div>
            <div className="userLoc">{users[change].location.city} {users[change].location.state} {users[change].location.country}</div>
            <div className="userBtn">
            <button  onClick={clickIt}>Cambiar</button>
            </div>
            </div>
        </div>
    );
};

export default Users;