import { useState, useRef, useEffect } from "react";
import { NavLink, Outlet } from "react-router";

import Sidebar from "../pages/dashboard/Sidebar";
import BottomNav from "../pages/dashboard/BottomNav";

import {
FiHelpCircle,
FiLogOut,
FiSettings,
FiUser
} from "react-icons/fi";

import useAuth from "../hooks/useAuth";


const DashboardLayout = () => {

const { logout, user } = useAuth();

const [open,setOpen] = useState(false);

const dropdownRef = useRef(null);



/* close dropdown outside click */

useEffect(()=>{

const handleClickOutside = e => {

if(

dropdownRef.current &&

!dropdownRef.current.contains(e.target)

){

setOpen(false);

}

};

document.addEventListener("mousedown",handleClickOutside);

return ()=>document.removeEventListener("mousedown",handleClickOutside);

},[]);



return (

<div className="

min-h-screen

bg-gray-50

">

<div className="

flex

min-h-screen

">


{/* sidebar */}

<aside className="

hidden lg:flex

w-[260px]

bg-white

">

<div className="

w-full

sticky top-0

h-screen

p-6

overflow-y-auto

">

<Sidebar/>

</div>

</aside>



{/* main */}

<div className="

flex-1

flex flex-col

min-h-screen

">



{/* topbar */}

<header className="

lg:hidden

sticky top-0

z-40

px-4

py-3

flex items-center justify-between

bg-white/80

backdrop-blur-xl

">

<h1 className="

text-lg

font-semibold

tracking-tight

">

inToBio

</h1>



{/* profile */}

<div

ref={dropdownRef}

className="relative"

>


<button

onClick={()=>setOpen(!open)}

className="

flex items-center gap-2

cursor-pointer

"

>

<div className="

w-9 h-9

rounded-full

bg-indigo-100

flex items-center justify-center

text-indigo-600

font-semibold

shadow-sm

">

{user?.name?.[0] || "U"}

</div>

</button>



{/* dropdown */}

{

open && (

<div className="

absolute right-0

mt-2

w-48

rounded-xl

bg-white/90

backdrop-blur-xl

shadow-lg

p-1

space-y-1

">


<NavLink

to="/dashboard/profile"

className="

flex items-center gap-2

px-3 py-2

rounded-lg

hover:bg-indigo-50/50

cursor-pointer

"

>

<FiUser/>

Profile

</NavLink>



<NavLink

to="/dashboard/settings"

className="

flex items-center gap-2

px-3 py-2

rounded-lg

hover:bg-indigo-50/50

cursor-pointer

"

>

<FiSettings/>

Settings

</NavLink>



<NavLink

to="/dashboard/help"

className="

flex items-center gap-2

px-3 py-2

rounded-lg

hover:bg-indigo-50/50

cursor-pointer

"

>

<FiHelpCircle/>

Help

</NavLink>



<button

onClick={logout}

className="

flex items-center gap-2

px-3 py-2

rounded-lg

text-red-500

hover:bg-red-50

cursor-pointer

w-full text-left

"

>

<FiLogOut/>

Logout

</button>


</div>

)

}

</div>

</header>



{/* page */}

<main className="

flex-1

w-full

max-w-7xl

mx-auto

p-4

md:p-6

lg:p-10

pb-24

lg:pb-10

">

<Outlet/>

</main>



</div>

</div>



{/* mobile bottom nav */}

<div className="

lg:hidden

fixed bottom-0

left-0 right-0

bg-white/90

backdrop-blur-xl

z-40

">

<BottomNav/>

</div>



</div>

);

};


export default DashboardLayout;