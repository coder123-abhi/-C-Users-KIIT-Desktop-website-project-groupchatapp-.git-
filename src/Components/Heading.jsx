import React, {useState}from 'react';
import './Heading.css';

function Heading()
{
    const cachedUsername=localStorage.getItem('username')||'anonymous';
    const [username,setUsername]=useState(' ');
    localStorage.setItem('username',username);
    console.log(username);
return(
<>
<div className="heading-bar">
    <div className="heading">
    <h1 className="chat-heading">Chat App</h1>
    </div>
  
    <div className="heading-input">
        <div id="user">
    <label for="username">username:</label>
    <input type="text"  id="username" placeholder="Enter username" value={username} onChange={e=>setUsername(e.target.value)}/>
    </div>
    </div>

    </div>
</>
);

}

export default Heading;