import React from 'react'
import { LuCopy } from "react-icons/lu";

export default function Inputmodal({textValue}) {
    function Copy(){
        var copyText = document.getElementById("inptext");
      
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
      
        navigator.clipboard.writeText(copyText.value);
      }
  return (
    <div className="w-[100%] flex justify-center items-center">
    <div className="cc">
     <input id="inptext" className="w-[70%] bg-transparent outline-none" type="text" value={textValue}/>
     <button onClick={Copy}><LuCopy style={{width:'25px', height:'25px',}}/></button>
    </div>
   </div>
  )
}
