import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Hamburger = ({buttonRef})=>{
     
    return(
        <div >
            <button ref={buttonRef} className="w-[30px] h-[30px] border-2  flex items-center justify-center border-black rounded-md hover:bg-blue-500 hover:text-white">
                <GiHamburgerMenu />
            </button>
        </div>

    )
};

export default Hamburger;