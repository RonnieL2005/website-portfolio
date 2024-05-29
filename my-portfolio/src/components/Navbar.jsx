import React from "react";



function Navbar(){
    return(
<nav className="flex bg-white w-full h-14">


    <div className="flex items-center justify-between w-full px-6">


        <div className="font-danfo font-bold text-3xl text-black mr-96">
            Ronnie.Dev
        </div>


        <div className="flex space-x-4">
            <div className="font-Major-Mono-Display font-normal text-xl text-black">
            About
            </div>
            <div className="font-Major-Mono-Display font-normal text-xl text-black">
            Experience
            </div>
            <div className="font-Major-Mono-Display font-normal text-xl text-black">
            Projects
            </div>
            <div className="font-Major-Mono-Display font-normal text-xl text-black">
            Contacts
            </div>
        </div>


    </div>


</nav>

    )
}

export default Navbar;