import RightPhotoLayout from '@/components/Layout/RightPhotoLayout';
import React from 'react'

const Backup = ({backupContent}) => {
    const { buttonOne, title, text, buttonTwo, imgUrl } = backupContent;
    const white="bg-white";
    const textBlack="text-gray-950";
    const bgZinc="bg-zinc-100"
     const imgWidth="w-96"

  return (
    <div>
      <RightPhotoLayout buttonOne={buttonOne}  title={title} text={text}  buttonTwo={buttonTwo} imgUrl={imgUrl} className={white} textBlack={textBlack} bgZinc={bgZinc} imgWidth={imgWidth} />
    </div>
  )
}

export default Backup
