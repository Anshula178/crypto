import RightPhotoLayout from "@/components/Layout/RightPhotoLayout";
import React from "react";

const Hero = ({ heroContent }) => {
  const { buttonOne, title, text, buttonTwo, imgUrl } = heroContent;
  const white="bg-black";
    const textBlack="text-slate-100";
    const bgZinc="bg-zinc-500"
     const imgWidth="w-64"
  return (
    <RightPhotoLayout buttonOne={buttonOne}  title={title} text={text}  buttonTwo={buttonTwo} imgUrl={imgUrl} className={white} textBlack={textBlack} bgZinc={bgZinc} imgWidth={imgWidth}   />
  );
};


export default Hero;
