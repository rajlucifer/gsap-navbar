import react from "react"
import { useRef } from "react";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Scroll = ({bgcolor,bgbox})=>{

    const boxRef = useRef(null);
    const sectionRef = useRef(null);
   
   

    useGSAP(()=>{
        gsap.to(boxRef.current,{
            rotate:360,
            
            scrollTrigger:{
                trigger:sectionRef.current,
                start:"top center",
                end:"bottom top",
                scrub:true,
                markers:true,
                
            },
        });


    },{scope:sectionRef})
    
    return(
        <section className={`w-[100vw] h-[100vh] ${bgcolor} flex justify-center items-center`}>
            <div ref={boxRef} className={`w-[200px] h-[200px]  ${bgbox} border-2   border-black rounded-md`}>
                
            </div>
        </section>
    )
};

export default Scroll;