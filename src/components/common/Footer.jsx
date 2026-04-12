import { Link } from "react-router";

const Footer = () => {

  const year = new Date().getFullYear();


  /* scroll helper */
  const scrollTo = (id)=>{

    const el = document.getElementById(id);

    if(el){

      el.scrollIntoView({
        behavior:"smooth"
      });

    }

  };


  return (

<footer className="

bg-[#f5f3fb]

">
<hr className="border-gray-300"/>
<div className="

max-w-6xl

mx-auto

px-4 sm:px-6 lg:px-8

py-12

space-y-8

">


{/* top */}

<div className="

flex flex-col

md:flex-row

items-start md:items-center

justify-between

gap-6

">


{/* brand */}

<div className="space-y-2">

<h3 className="

text-indigo-600

font-semibold

text-lg

cursor-pointer

">

inToBio

</h3>


<p className="

text-gray-500

text-sm

max-w-xs

">

Build your premium bio page and grow your audience.

</p>

</div>



{/* navigation */}

<div className="

flex flex-wrap

gap-6

text-sm

text-gray-600

">

<button

onClick={()=>scrollTo("features")}

className="hover:text-indigo-600 transition cursor-pointer"

>

Features

</button>


<button

onClick={()=>scrollTo("showcase")}

className="hover:text-indigo-600 transition cursor-pointer"

>

Showcase

</button>


<button

onClick={()=>scrollTo("pricing")}

className="hover:text-indigo-600 transition cursor-pointer"

>

Pricing

</button>


<Link

to="/login"

className="hover:text-indigo-600 transition cursor-pointer"

>

Login

</Link>


<Link

to="/register"

className="hover:text-indigo-600 transition cursor-pointer"

>

Get started

</Link>

</div>



{/* social */}

<div className="

flex items-center

gap-5

text-sm

text-gray-600

">

<a

href="https://twitter.com"

target="_blank"

className="hover:text-indigo-600 transition cursor-pointer"

>

Twitter

</a>


<a

href="https://linkedin.com"

target="_blank"

className="hover:text-indigo-600 transition cursor-pointer"

>

LinkedIn

</a>


<Link

to="/terms"

className="hover:text-indigo-600 transition cursor-pointer"

>

Terms

</Link>


<Link

to="/privacy"

className="hover:text-indigo-600 transition cursor-pointer"

>

Privacy

</Link>

</div>

</div>



{/* bottom */}

<div className="

flex flex-col

md:flex-row

items-center

justify-between

gap-4

text-sm

text-gray-400

">

<p>

© {year} inToBio

</p>


<p>

All rights reserved

</p>

</div>



</div>

</footer>

);

};


export default Footer;