import { Accordion, AccordionContent, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionItem } from '@radix-ui/react-accordion'
import React from 'react'

const Questions = () => {
    const accordionItem=[
        {title:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.",text:" Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns,modals, navbars, and more."},
        {title:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.",text:" Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns,modals, navbars, and more."},
        {title:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.",text:" Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns,modals, navbars, and more."},
        {title:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.",text:" Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns,modals, navbars, and more."}
    ]
        
    
  return (
    <section className="bg-center bg-zinc-950 pt-32 pb-28 ">
    <div className="md:container md:mx-auto">
        <div className="flex flex-col items-center w-1/2 mx-auto text-center">
            <div className="px-6 py-3 bg-zinc-800 w-max rounded-full mb-5">
                <h1 className="text-slate-200 font-medium text-sm">FAQ</h1>
            </div>
            <h2 className="text-slate-100 font-semibold leading-tight text-sm md:text-5xl mb-5">Frequently asked questions</h2>
            <h2 className="text-slate-300 font-normal leading-normal text-base mb-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</h2>
        </div>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-14 p-20 rounded-lg ">
            <Accordion type="multiple">
                {accordionItem.map(({title,text},index)=>(
                      <AccordionItem key={index}>
                      <AccordionTrigger className="text-xl flex items-center justify-between w-full p-5 font-medium text-slate-100 hover:bg-gray-800 gap-3 rounded-t-xl focus:outline-none">
                      {title}
                      </AccordionTrigger>
                      <AccordionContent className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <p className="text-gray-400 mb-2">
                          {text}
                        </p>
                      </AccordionContent>
                      </AccordionItem> 
                ))}
              
            </Accordion>
              <div className="w-full bg-zinc-900/50 grid grid-cols-1 px-10 py-20 rounded-lg mt-5">
                <div className="w-1/2 flex flex-col items-center mx-auto text-center gap-y-3">
                    <h2 className="text-slate-100 font-semibold text-sm md:text-6xl leading-10 mb-5">
                        Bringing crypto to the world together</h2>
                    <h2 className="text-slate-300 font-normal leading-normal text-base mb-5 px-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</h2>
                    <button className="w-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 md:px-4 py-3 rounded-full text-slate-100 font-medium">Start Now</button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Questions
