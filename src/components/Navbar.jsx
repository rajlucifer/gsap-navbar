import react from "react";

const Navbar = ()=>{
    return(
        <div className="bg-white p-[10px] flex  justify-between px-[50px]  mx-[30px] mt-5 py-[10px] border-2 border-black rounded-md">
            <div  className="font-serif text-[20px] font-bold text-yellow-300">APPROX</div>
            <h1 className="font-bold">Home</h1>
            <h1 className="font-bold">About</h1>
            <h1 className="font-bold">Project</h1>
            <h1 className="font-bold">Contact</h1>
            <button className="w-[60px] h-[30px] border-2 border-black rounded-md hover:bg-blue-500 hover:text-white"> Menu</button>


        </div>
    )
};

export default Navbar;
