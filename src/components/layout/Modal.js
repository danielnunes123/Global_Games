import { CgClose } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Inputmodal from "./Inputmodal";


const Modal = ({isOpen, isClose}) => {
if (isOpen) {
    return (
        <div className="modal">
          <div className="contentn">
          <div className="w-[100%] flex pl-[600px]"><button  onClick={isClose}><CgClose style={{width:'28px', height:'28px', color:'white'}}/></button></div>
       
           <div className="infw">
            <h1 className="yw">Partilhar Jogo</h1>
            <span className="qw">Selecione uma rede social para compartilhar.</span>
           </div>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <div className="w-[100%] flex flex-wrap gap-[80px]">
            <div className="w-[100%] flex justify-center items-center gap-[100px]">
            <BsFacebook style={{width:'45px', height:'45px', color:'white'}}/> 
            <BsTwitter style={{width:'45px', height:'45px', color:'white'}}/>
            <BsInstagram style={{width:'45px', height:'45px', color:'white'}}/>
            </div>
          <Inputmodal textValue='https://global-games.vercel.app/GTA-V/download'/>
           </div>
          </div>
        </div>
      );
}

return null
};

export default Modal;
