import React, {useState} from 'react';
import './Chatarea.css';
import Messagecard from './Messagecard.jsx';

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}



function Chatarea()
{
const [message, setMessage]=useState('');
const [messages, setMessages]=useState([]);

const sendmessage=()=>{
const username=localStorage.getItem("username");
const sentMessageData={username:username, message:message, sent:true, k:makeid(5)};
const  newMessage=[...messages, sentMessageData];
setMessages(newMessage);
console.log(messages);

};


    return(
<>
<div className="chat-area-one">
    <div className="title-one">Chat Area</div>
    <div className="chat-area-two">
<input type="text" placeholder="send a message....." value={message} onChange={e=>setMessage(e.target.value)} />
<button id="send" onClick={sendmessage}>Send</button>
{
messages.map(e=>{

    return(
        <Messagecard username={e.username} message={e.message} sent={e.sent} key={e.k}/>
    )
})

}
        </div>

    </div>
</>
    );
}

export default Chatarea;