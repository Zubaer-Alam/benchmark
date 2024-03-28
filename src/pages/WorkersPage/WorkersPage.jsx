import React from 'react'
import WorkerForm from './WorkerForm/WorkerForm'

const WorkersPage = () => {
  return (
   <div className=' '>
     <div 
    //  className="bg-[url('../public/images/background.jpg')]  w-full h-screen relative overflow-hidden block z-10  bg-cover bg-no-repeat bg-top  before:content-['']   before:absolute    before:inset-0  before:block before:bg-gradient-to-t before:from-black  before:to-transparent   before:opacity-100  before:z-[-5] ms:mb-10 md:mb-36 lg:mb-36" 
    >
     <div className='py-40 z-20 container mx-auto'>
      <WorkerForm/>
    </div>
     </div>
     
    
   </div>
  )
}

export default WorkersPage