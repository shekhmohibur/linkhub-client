import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

import { motion } from "framer-motion";

import {
  FiTrendingUp,
  FiMousePointer,
  FiEye,
  FiBarChart2
} from "react-icons/fi";

import { useData } from "../../../contexts/DataContext";



const analyticsData = [
  { day:"Mon", views:120, clicks:40 },
  { day:"Tue", views:210, clicks:90 },
  { day:"Wed", views:160, clicks:60 },
  { day:"Thu", views:300, clicks:120 },
  { day:"Fri", views:260, clicks:110 },
  { day:"Sat", views:180, clicks:70 },
  { day:"Sun", views:220, clicks:95 }
];



const stats = [
  {
    title:"Views",
    value:"1,840",
    growth:"+12%",
    icon:FiEye
  },
  {
    title:"Clicks",
    value:"612",
    growth:"+8%",
    icon:FiMousePointer
  },
  {
    title:"CTR",
    value:"33%",
    growth:"+2%",
    icon:FiTrendingUp
  },
  {
    title:"Top link",
    value:"Portfolio",
    growth:"124 clicks",
    icon:FiBarChart2
  }
];



const topLinks = [
  { title:"Portfolio", clicks:124, percentage:28 },
  { title:"Instagram", clicks:98, percentage:22 },
  { title:"YouTube", clicks:76, percentage:17 },
  { title:"Store", clicks:52, percentage:12 }
];



const StatCard = ({ item }) => {

  const Icon = item.icon;

  return (

<motion.div

initial={{ opacity:0, y:20 }}

animate={{ opacity:1, y:0 }}

className="

bg-white

p-5 md:p-6

rounded-2xl

shadow-sm

hover:shadow-md

transition

"

>

<div className="

flex items-center justify-between

mb-3

">

<Icon

size={22}

className="text-indigo-600"

/>

<span className="

text-xs

font-medium

text-green-600

bg-green-50

px-2 py-1

rounded-lg

">

{item.growth}

</span>

</div>



<p className="

text-sm

text-gray-500

">

{item.title}

</p>



<p className="

text-2xl md:text-3xl

font-semibold

text-gray-900

mt-1

">

{item.value}

</p>

</motion.div>

);

};



const Analytics = () => {

const { loading } = useData();



if(loading){

return (

<div className="

flex items-center justify-center

h-60

">

<div className="

w-10 h-10

rounded-full

border-2

border-indigo-600

border-t-transparent

animate-spin

"/>

</div>

);

}



return (

<div className="

space-y-8 md:space-y-10

">

{/* header */}

<div>

<h1 className="

text-2xl md:text-3xl

font-semibold

text-gray-900

">

Analytics

</h1>



<p className="

text-gray-500

mt-1

text-sm md:text-base

">

Track profile performance and link engagement

</p>

</div>



{/* stats */}

<div className="

grid

grid-cols-2

lg:grid-cols-4

gap-3 md:gap-4

">

{

stats.map(item=>(

<StatCard

key={item.title}

item={item}

/>

))

}

</div>



{/* chart */}

<div className="

bg-white

rounded-3xl

p-5 md:p-8

shadow-sm

">

<div className="

flex items-center justify-between

mb-6

">

<h2 className="

font-semibold

text-gray-900

">

Traffic Overview

</h2>



<span className="

text-xs md:text-sm

text-gray-500

bg-gray-50

px-3 py-1

rounded-lg

">

Last 7 days

</span>

</div>



<div className="

h-[260px]

md:h-[320px]

w-full

">

<ResponsiveContainer

width="100%"

height="100%"

>

<AreaChart

data={analyticsData}

>

<defs>

<linearGradient

id="views"

x1="0"

y1="0"

x2="0"

y2="1"

>

<stop

offset="5%"

stopColor="#4F46E5"

stopOpacity={0.25}

/>

<stop

offset="95%"

stopColor="#4F46E5"

stopOpacity={0}

/>

</linearGradient>



<linearGradient

id="clicks"

x1="0"

y1="0"

x2="0"

y2="1"

>

<stop

offset="5%"

stopColor="#A855F7"

stopOpacity={0.25}

/>

<stop

offset="95%"

stopColor="#A855F7"

stopOpacity={0}

/>

</linearGradient>

</defs>



<CartesianGrid

stroke="#f1f5f9"

vertical={false}

/>



<XAxis

dataKey="day"

tick={{ fontSize:12 }}

/>



<YAxis

tick={{ fontSize:12 }}

/>



<Tooltip

contentStyle={{

borderRadius:"12px",

border:"none",

boxShadow:"0 10px 30px rgba(0,0,0,0.08)"

}}

/>



<Area

type="monotone"

dataKey="views"

stroke="#4F46E5"

strokeWidth={2}

fill="url(#views)"

/>



<Area

type="monotone"

dataKey="clicks"

stroke="#A855F7"

strokeWidth={2}

fill="url(#clicks)"

/>

</AreaChart>

</ResponsiveContainer>

</div>



{/* legend */}

<div className="

flex gap-6

mt-6

text-sm

text-gray-600

">

<div className="flex items-center gap-2">

<div className="

w-2.5 h-2.5

rounded-full

bg-indigo-600

"/>

Views

</div>



<div className="flex items-center gap-2">

<div className="

w-2.5 h-2.5

rounded-full

bg-purple-600

"/>

Clicks

</div>

</div>

</div>



{/* top links */}

<div className="

bg-white

rounded-3xl

p-5 md:p-8

shadow-sm

">

<h2 className="

font-semibold

text-gray-900

mb-5

">

Top performing links

</h2>



<div className="space-y-4">

{

topLinks.map(link=>(

<div

key={link.title}

className="

p-4

rounded-xl

bg-gray-50

hover:bg-indigo-50/40

transition

"

>

<div className="

flex items-center justify-between

mb-2

">

<p className="

font-medium

text-gray-900

">

{link.title}

</p>



<span className="

text-sm

text-gray-500

">

{link.clicks} clicks

</span>

</div>



<div className="

w-full

h-2

bg-gray-200

rounded-full

overflow-hidden

">

<div

style={{ width:`${link.percentage}%` }}

className="

h-full

bg-gradient-to-r

from-indigo-600

to-purple-600

rounded-full

"

/>

</div>

</div>

))

}

</div>

</div>



</div>

);

};



export default Analytics;