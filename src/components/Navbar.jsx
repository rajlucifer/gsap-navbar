import react from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { useRef } from "react";
import Hamburger from "./Hamburger";

const Navbar = ()=>{
    const logoRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const hamburgerRef = useRef(null);
   
    
    // now we use the gsap  useGSAP is similar as useEffect 
    useGSAP(()=>{
        const timeLi = gsap.timeline();
        timeLi.from(logoRef.current,{
            y:-30,
            // duration:2,
            opacity:0, // it use to make the opacity 0 means not visible            
            // color:"blue",
        })
        timeLi.from(homeRef.current,{
            y:-30,
            // duration:2,
            opacity:0,
             
             
        })
        timeLi.from(aboutRef.current,{
            y:-30,
            // duration:2,
            opacity:0,
             
             
        })
        timeLi.from(projectRef.current,{
           y:-30,
            // duration:2,
            opacity:0,
             
             
        })
        timeLi.from(contactRef.current,{
            y:-30,
            // duration:2,
            opacity:0,
             
             
        })
        timeLi.from(hamburgerRef.current,{
            x:30,
            // duration:2,
            opacity:0,
             
             
        })


    },[])



    return(
        <div  className="bg-white p-[10px] flex  justify-between items-center px-[50px]  mx-[30px] mt-5 py-[10px] border-2 border-black rounded-md">
            <div ref={logoRef} className="font-serif text-[30px] font-bold text-yellow-300  ">APPROX</div>
            <h1 ref={homeRef} className="text-[25px] font-bold">Home</h1>
            <h1 ref={aboutRef} className="text-[25px]  font-bold">About</h1>
            <h1 ref={projectRef} className="text-[25px] font-bold">Project</h1>
            <h1 ref={contactRef} className="text-[25px] font-bold">Contact</h1>
            <div>
                <Hamburger buttonRef={hamburgerRef} />
            </div>


        </div>
    )
};

export default Navbar;
