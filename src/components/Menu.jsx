import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";


const Menu = ({ isopen,onClose }) => {
    const menuRef = useRef(null);
     

    useGSAP(() => {
        if (isopen) {
            gsap.to(menuRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
            });
        } else {
            gsap.to(menuRef.current, {
                x: 300,
                opacity: 0,
                duration: 0.6,
                ease: "power3.in",
            });
        }
    }, [isopen])

    return (

        <div
            ref={menuRef}
            className="flex flex-col px-[20px] py-[30px] font-mono font-bold bg-white text-black text-[30px] border-2 border-black w-[250px] h-[100vh] absolute top-[-50px] right-[-100px] opacity-0"
            style={{ transform: "translateX(300px)" }}
        >   
            <IoMdCloseCircle  className="absolute top-3 right-4" onClick={onClose}/>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>feedback</h1>
        </div>


    )
};

export default Menu;