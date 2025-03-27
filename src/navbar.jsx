import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({changeTheme, modeState}) => {
    return ( 
        <div className="navbar">
            <div className="title">Winn's Note-App</div>
            <div onClick={changeTheme} className='theme-icon'>
                {modeState === 'light' ? <MdOutlineLightMode/> : <MdDarkMode/> }
            </div>

           
            
        </div>
        
     );
}
 
export default Navbar;