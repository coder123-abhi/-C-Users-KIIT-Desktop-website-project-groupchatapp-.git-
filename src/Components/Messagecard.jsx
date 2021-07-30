import React, {useState} from 'react';
import './Messagecard.css';

function Messagecard({username,message,sent})
{
return(
<>
<div className={`message ${sent?'sent':''}`}>
<h5 id="head">{username}</h5>
<p id="para">{message}</p>
</div>
</>
);

}

export default Messagecard;