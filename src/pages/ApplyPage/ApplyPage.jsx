import React from 'react'
import WorkerForm from './WorkerForm/WorkerForm'

const ApplyPage = () => {
  return (
   <div className=' '>
     <div 
     className="bg-[url('../public/images/applybg.jpg')]  w-full h-screen relative overflow-hidden block z-10  bg-cover bg-no-repeat bg-top  before:content-['']   before:absolute    before:inset-0  before:block before:bg-gradient-to-b  before:from-white before:to-transparent   before:opacity-70  before:z-[-5] " 
    >
     <div className='pt-40 z-20 container mx-auto'>
      <WorkerForm/>
    </div>
     </div>
     
    
   </div>
  )
}

export default ApplyPage