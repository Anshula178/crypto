import React from 'react'

const LeftPhotoLayout = ({buttonOne, title, text, buttonTwo, imgUrl,className,textBlack,bgZinc,imgWidth}) => {
  return (
    <div className={`${className}  pt-20 pb-28`}>
      <div className="container  mx-auto">
        <div className="grid grid-cols-2 gap-3  mx-2">
          <div className="flex justify-center ">
            <img src={imgUrl} alt="" className={`${imgWidth}`} />
          </div>
          <div className="flex">
            <div className="w-2/3 mx-auto">
              <div className={` rounded-full ${bgZinc} w-max mb-2 px-6 py-3`}>
                <h1 className={`${textBlack}  font-medium text-sm` }>
                  {buttonOne}
                </h1>
              </div>
              <h2 className={`${textBlack} font-bold  text-6xl mb-3`}>
                {title}
              </h2>
              <h2 className={`${textBlack} font-normal leading-normal text-base mb-5`}>
                {text}
              </h2>
              <button className="hover:animate-bounce w-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 md:px-4 py-3 rounded-full text-slate-100 font-medium">
               {buttonTwo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPhotoLayout
