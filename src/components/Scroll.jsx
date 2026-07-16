import React from "react"
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Scroll = ({ bgcolor, bgbox }) => {

    const boxRef1 = useRef(null);
    const sectionRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const sectionRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const sectionRef3 = useRef(null);

    useGSAP(()=>{
        gsap.to(boxRef1.current,{
            rotate:360,
            duration:2,
            scrollTrigger:{
                trigger:sectionRef1.current,
                start:"50% 50%",
                end:"80% 20%",
                scrub:true,
                markers:true
            }
        })
        gsap.to(boxRef2.current,{
            rotate:360,
            duration:2,
            scrollTrigger:{
                trigger:sectionRef2.current,
                start:"top center",
                end:"bottom top",
                scrub:true, // is use controll the rotation final and initial by using the scroll 
                markers:true
            }

        })
        gsap.to(boxRef3.current,{
            rotate:360,
            duration:2,
            scrollTrigger:{
                trigger:sectionRef2.current,
                start:"40%",
                end:"bottom top",
                scrub:true,
                markers:true
            }

        })

    },[])

    return (
        <div>
            <section ref={sectionRef1} className="w-[100vw] h-[100vh] bg-yellow-500 flex justify-center items-center">
                <div ref={boxRef1} className="w-[200px] h-[200px]  bg-red-500 border-2   border-black rounded-md">

                </div>
            </section>
            <section ref={sectionRef2} className="w-[100vw] h-[100vh] bg-green-300 flex justify-center items-center">
                <div ref={boxRef2} className="w-[200px] h-[200px] bg-emerald-800 border-2   border-black rounded-md">

                </div>
            </section>
            <section ref={sectionRef3} className="w-[100vw] h-[100vh] bg-blue-500 flex justify-center items-center">
                <div ref={boxRef3} className="w-[200px] h-[200px]  bg-cyan-400 border-2   border-black rounded-md">

                </div>
            </section>
        </div>
    )
};

export default Scroll;