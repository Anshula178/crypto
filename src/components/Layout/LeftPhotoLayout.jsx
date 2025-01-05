import React from 'react';

const LeftPhotoLayout = ({ buttonOne, title, text, buttonTwo, imgUrl, className, textBlack, bgZinc, imgWidth }) => {
  return (
    <div className={`${className} pt-20 pb-28`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={imgUrl}
              alt=""
              className={`${imgWidth} max-w-full h-auto`}
            />
          </div>

          {/* Text Section */}
          <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-2/3">
              <div className={`rounded-full ${bgZinc} w-max mb-4 px-6 py-3`}>
                <h1 className={`${textBlack} font-medium text-sm`}>
                  {buttonOne}
                </h1>
              </div>
              <h2 className={`${textBlack} font-bold text-3xl md:text-5xl lg:text-6xl mb-4`}>
                {title}
              </h2>
              <h2 className={`${textBlack} font-normal leading-relaxed text-base md:text-lg mb-6`}>
                {text}
              </h2>
              <button className="w-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 rounded-full text-slate-100 font-medium hover:animate-bounce">
                {buttonTwo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPhotoLayout;
