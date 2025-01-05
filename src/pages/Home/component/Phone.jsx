import LeftPhotoLayout from '@/components/Layout/LeftPhotoLayout';
import React from 'react'

const Phone = ({phoneContent}) => {
    const { buttonOne, title, text, buttonTwo, imgUrl } = phoneContent;
    const white="bg-white";
    const textBlack="text-gray-950";
    const bgZinc="bg-zinc-100"
     const imgWidth="w-96"
  return (
    <div>
      <LeftPhotoLayout  buttonOne={buttonOne}  title={title} text={text}  buttonTwo={buttonTwo} imgUrl={imgUrl} className={white} textBlack={textBlack} bgZinc={bgZinc} imgWidth={imgWidth} />
    </div>
  )
}

export default Phone
