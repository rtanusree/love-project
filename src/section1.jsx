import { useState } from 'react';
import './section1.css'
import { useEffect } from 'react';
//import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom"
import Section2 from  './section2'
import Section3 from  './section3'
import Section4 from  './section4'
import Section5 from  './section5'
import Section6 from  './section6'
function Section1(){

   let[image,setimage]=useState("https://images.pexels.com/photos/2983449/pexels-photo-2983449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
   let image2 =[
   "https://images.pexels.com/photos/11215160/pexels-photo-11215160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
   "https://images.pexels.com/photos/2463421/pexels-photo-2463421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/3292701/pexels-photo-3292701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   ]
   useEffect(() => {
    const intervalId = setInterval(() => {
       // settimeout(() => {
            let random=Math.floor(Math.random()* 3)+0;
            console.log(random)
            setimage(image2[random]);
      //  }, 5000);
    }, 5000)
   return () => clearInterval(intervalId);
}, [])

    return(
        <>
       <div className="background" style={{backgroundImage:`url(${image})`}}></div>
       <div className='box'>
       <div className='navbar'>
        <div className='item'>
        <p>home</p>
        <Link to='/about' className='link'>About</Link>
        <p>contact</p>
        <h6 className='round'><h6>g love d</h6></h6>
        <p>contact</p>
        <p>contact</p>
        <p>contact</p>
        </div>
       </div>
      <div className='maincontent'>
        <h2>save the date</h2>
        <p>11.03.2004</p>
        <p>we are getting married <span><FaHeart/></span></p>
      </div>


       </div>
       <Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>
        </>
    )
}
export default Section1