import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Menu from "./Menu";
import { GiHamburgerMenu } from "react-icons/gi";
const Hamburger = ({buttonRef})=>{
    const [isopen,setIsopen] = useState(false);
     
    const clicked = ()=>  
        // if(!isopen){
        //     setIsopen(true);


        // }
        // else{
        //     setIsopen(false);
        // }
        setIsopen((prev) => !prev);

    const closeMenu = ()=>{
        setIsopen(false);
        
    }     
    return(
        <div className="relative" >
            <div ref={buttonRef} className="w-[30px] h-[30px] border-2  flex items-center justify-center border-black rounded-md hover:bg-blue-500 hover:text-white" onClick={clicked}>
                <GiHamburgerMenu />
                 
            </div>
            {/* {isopen ?<Menu/> : null} */}
            <Menu isopen={isopen} onClose={closeMenu} />

            
        </div>

    )
};

export default Hamburger;