import React from 'react'

const Benefits = () => {
    const cardItems=[
        {
            title:"Easy to use",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
        },
        {
            title:"Easy to use",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
        },
        {
            title:"Easy to use",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
        },{
            title:"Easy to use",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
        },{
            title:"Easy to use",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
        },{
            title:"Easy to use",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
        }
    ]
  return (
    <div className=' pt-32 pb-32 bg-zinc-950'>
       <div className='container mx-auto '>
        <div className='flex flex-col items-center mx-auto text-center w-1/2 mb-10'>
        <div className='rounded-full  bg-zinc-500 w-max mb-2 px-6 py-3 '>
                <h1 className=" font-medium text-slate-100 text-sm">
                 #1 crypto wallet
                </h1>
              </div>
        <h2 className="text-slate-100 font-bold leading-tight text-5xl mb-5"> Key benefits of the best new generation wallet</h2>
        <h2 className="text-slate-300 font-normal leading-normal text-base mb-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</h2>
        </div>
        <div className="w-full bg-zinc-900/50 grid grid-cols-1 md:grid-cols-3 gap-y-14 p-20 rounded-lg ">
        {cardItems.map(({title,text},index)=>(
             <div className="flex p-4 " key={index}>
             <div className="flex mr-8">
                 <span className="w-5 h-5 outline rounded-full bg-[#7350C4] outline-[#4a377157] ring-4"></span>
             </div>
             <div className="">
                 <h6 className="text-slate-200 text-2xl font-semibold mb-2">{title}</h6>
                 <p className="text-base text-slate-300">{text}</p>
             </div>
         </div>
        ))}
            
        </div>
    </div>
    </div>
    
  )
}

export default Benefits
