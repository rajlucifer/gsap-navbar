import react from "react"

const Scroll = ({bgcolor,bgbox})=>{
    
    return(
        <section className={`w-[100vw] h-[100vh] ${bgcolor} flex justify-center items-center`}>
            <div className={`w-[200px] h-[200px]  ${bgbox} border-2   border-black rounded-md`}>
                
            </div>
        </section>
    )
};

export default Scroll;