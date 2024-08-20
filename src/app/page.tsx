'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Contact } from 'lucide-react';
export default function Home() {

  const scrollTo = () => {
   const section:any = document.querySelector('#Contact')
   section.scrollIntoView({behavior: 'smooth'})
    
  };
  

      return (
    <div className="bg-[#31363F] min-h-screen">
      <div className="pt-5" id="Home">
        <h1 className="text-[#EEEEEE] text-3xl text-center">HELLO</h1>
        <p className="text-[#EEEEEE] text-center">
          "I’m here to empower your digital journey
        </p>
        <p className="text-[#EEEEEE] text-center">
          with innovative software solutions"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-[#EEEEEE] justify-items-center  " >
        <div className="bg-[#0c5d61] flex flex-col justify-between gap-4 rounded p-4" >
          <h1 className="text-2xl uppercase">Normal user</h1>
          <p className="text-justify">
            Hello!.... If you are a regular user, please click the button below.
            It’s designed just for you.
          </p>
          <div className="flex justify-end w-full mb-4  ">
            <button className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950" 
         onClick={scrollTo}> 
              LETS TALK
            </button>
          </div>
        </div>

        <div className="bg-[#0c5d61]  flex flex-col justify-between gap-4 rounded p-4">
          <h1 className="text-2xl uppercase">Developer</h1>
          <p className="text-justify">
            Ready to build  website with cutting-edge tech? I’m your
            go-to expert! Click below to get started!
          </p>
          <div className="flex justify-end mb-4">
            <button className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
              LETS TALK
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0c5d61] flex flex-col  items-center text-[#EEEEEE] rounded pb-4 ml-4 mr-4" id="About">
        <h1 className="text-2xl uppercase">Skills</h1>
        <div className="flex flex-wrap justify-evenly gap-5">
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            HTML
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            CSS
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            Bootstrap
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            JavaScript
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            Tailwind CSS
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            React
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            Node.js
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            MongoDB
          </span>
          <span className="bg-[#31363F] pt-2 pb-2 pl-4 pr-4 rounded-xl hover:text-green-300 hover:bg-slate-950">
            Git
          </span>
        </div>
      </div>
      <div className="text-[#EEEEEE] hover:text-blue-300 ml-4 mt-3"  id="Contact">
    
        <a href="tel:+917356787133"  className="flex items-center">
       <FontAwesomeIcon icon={faPhone}  className="w-[20px] h-[20px] mr-2"/>
          +91 73567 87133
        </a>
      </div>
      <div className='text-[#EEEEEE] hover:text-blue-300 ml-4 mt-3'>
    
        <a href="mailto:mrak862000@gmail.com" className="flex items-center">
         <FontAwesomeIcon icon={faEnvelope} className="w-[20px] h-[20px] mr-2"/>
           mrak862000@gmail.com
        </a>
      </div>
    </div>
  );
}
