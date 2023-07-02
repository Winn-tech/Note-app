import React from 'react';
import ReactSwitch from 'react-switch';
const Navbar = ({mode, modeState}) => {
    return ( 
        <div className="navbar">
            <div className="title">Winn's Note-App</div>

            <div className={modeState? "light-mode": "dark-mode"} >
                <p>{modeState === "Light Theme" ?  <MdOutlineNightlight/>: "Dark Theme"}</p> <ReactSwitch onChange={()=>mode()} checked={modeState === 'dark'} className='switch'/>
            </div>
            
        </div>
        
     );
}
 
export default Navbar;