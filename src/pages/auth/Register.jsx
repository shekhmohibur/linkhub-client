import { useState } from "react";

import { Link, useNavigate } from "react-router";

import {

FiMail,
FiLock,
FiUser,
FiEye,
FiEyeOff

} from "react-icons/fi";

import { FaGoogle } from "react-icons/fa";

import { motion } from "framer-motion";

import { useRegister } from "../../hooks/useRegister";


export default function Register(){

const navigate = useNavigate();

const registerMutation = useRegister();



const [formData,setFormData] = useState({

name:"",
email:"",
password:"",
confirmPassword:""

});



const [showPassword,setShowPassword] = useState(false);

const [showConfirm,setShowConfirm] = useState(false);



const handleChange = e => {

setFormData({

...formData,

[e.target.name]:

e.target.value

});

};



const handleSubmit = async e => {

e.preventDefault();



if(

formData.password !==

formData.confirmPassword

){

return;

}



try{

await registerMutation.mutateAsync({

name: formData.name,

email: formData.email,

password: formData.password

});


navigate("/dashboard/links");

}
catch(err){

console.error(err);

}

};



const error =
registerMutation.error?.response?.data?.error;



return (

<div className="

min-h-screen

flex items-center justify-center

px-4

bg-gradient-to-br

from-indigo-50

via-white

to-purple-50

">


<div className="

absolute inset-0 -z-10

overflow-hidden

">

<div className="

absolute top-0 left-1/2

-translate-x-1/2

w-96 h-96

bg-indigo-200/40

blur-3xl

rounded-full

"/>



<div className="

absolute bottom-0 right-1/4

w-96 h-96

bg-purple-200/40

blur-3xl

rounded-full

"/>

</div>



<motion.div

initial={{ opacity:0, y:20 }}

animate={{ opacity:1, y:0 }}

className="

w-full

max-w-md

"

>


<div className="

bg-white/80

backdrop-blur-xl

rounded-3xl

shadow-xl

p-8

space-y-5

">


<div className="text-center">

<h1 className="

text-3xl

font-bold

bg-gradient-to-r

from-indigo-600

to-purple-600

bg-clip-text

text-transparent

">

inToBio

</h1>



<p className="

text-gray-500

mt-1

">

Create your account

</p>

</div>



{

error && (

<div className="

p-3

rounded-xl

bg-red-50

text-red-600

text-sm

">

{error}

</div>

)

}



<form

onSubmit={handleSubmit}

className="space-y-4"

>


<div>

<label className="

text-sm

text-gray-600

">

Full Name

</label>



<div className="relative">

<FiUser className="

absolute left-3 top-1/2

-translate-y-1/2

text-gray-400

"/>



<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="John Doe"

className="

w-full

pl-10

pr-4

py-3

rounded-xl

bg-gray-50

outline-none

"

required

/>

</div>

</div>



<div>

<label className="

text-sm

text-gray-600

">

Email

</label>



<div className="relative">

<FiMail className="

absolute left-3 top-1/2

-translate-y-1/2

text-gray-400

"/>



<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="you@email.com"

className="

w-full

pl-10

pr-4

py-3

rounded-xl

bg-gray-50

outline-none

"

required

/>

</div>

</div>



<div>

<label className="

text-sm

text-gray-600

">

Password

</label>



<div className="relative">

<FiLock className="

absolute left-3 top-1/2

-translate-y-1/2

text-gray-400

"/>



<input

type={

showPassword

? "text"

: "password"

}

name="password"

value={formData.password}

onChange={handleChange}

placeholder="••••••••"

className="

w-full

pl-10

pr-10

py-3

rounded-xl

bg-gray-50

outline-none

"

required

/>



<button

type="button"

onClick={()=>

setShowPassword(

!showPassword

)

}

className="

absolute right-3

top-1/2

-translate-y-1/2

text-gray-400

cursor-pointer

"

>

{

showPassword

? <FiEyeOff/>

: <FiEye/>

}

</button>

</div>

</div>



<div>

<label className="

text-sm

text-gray-600

">

Confirm password

</label>



<div className="relative">

<FiLock className="

absolute left-3 top-1/2

-translate-y-1/2

text-gray-400

"/>



<input

type={

showConfirm

? "text"

: "password"

}

name="confirmPassword"

value={formData.confirmPassword}

onChange={handleChange}

placeholder="••••••••"

className="

w-full

pl-10

pr-10

py-3

rounded-xl

bg-gray-50

outline-none

"

required

/>



<button

type="button"

onClick={()=>

setShowConfirm(

!showConfirm

)

}

className="

absolute right-3

top-1/2

-translate-y-1/2

text-gray-400

cursor-pointer

"

>

{

showConfirm

? <FiEyeOff/>

: <FiEye/>

}

</button>

</div>

</div>



<button

type="submit"

disabled={

registerMutation.isPending

}

className="

w-full

py-3

rounded-xl

text-white

font-semibold

bg-gradient-to-r

from-indigo-600

to-purple-600

hover:shadow-lg

transition

cursor-pointer

disabled:opacity-50

"

>

{

registerMutation.isPending

?

"Creating..."

:

"Create Account"

}

</button>

</form>



<div className="

flex items-center

gap-3

text-gray-400

text-sm

">

<div className="flex-1 h-px bg-gray-200"/>

or

<div className="flex-1 h-px bg-gray-200"/>

</div>



<button

className="

w-full

py-3

rounded-xl

bg-gray-50

hover:bg-gray-100

flex items-center

justify-center

gap-2

font-medium

cursor-pointer

"

>

<FaGoogle/>

Google

</button>



<p className="

text-center

text-sm

text-gray-500

">

Already have account?

<Link

to="/login"

className="

text-indigo-600

font-semibold

ml-1

cursor-pointer

"

>

Sign in

</Link>

</p>

</div>

</motion.div>

</div>

);

}