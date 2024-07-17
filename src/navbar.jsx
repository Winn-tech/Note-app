import React from 'react';
// import Switch from 'react-switch';
import Switch from "react-switch";
import { MdDarkMode } from "react-icons/md";
const Navbar = ({mode, modeState}) => {
    return ( 
        <div className="navbar">
            <div className="title">Winn's Note-App</div>

            <div className={modeState? "light-mode": "dark-mode"} >
                {/* <p>{modeState === "Light Theme" ?  <MdDarkMode/>: ""}</p> */}
                 <Switch onChange={()=>mode()} checked={modeState === 'dark'} uncheckedIcon='light' checkedIcon='dark' className='switch'/>
            </div>
            
        </div>
        
     );
}
 
export default Navbar;