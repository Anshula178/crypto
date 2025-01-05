import React from 'react'
import Hero from './component/Hero'
import { backupContent, heroContent, phoneContent } from '@/config'
import Phone from './component/Phone'
import Backup from './component/Backup'
import Benefits from './component/Benefits'
import Questions from './component/Questions'

const Home = () => {
  return (
    <>
      <Hero heroContent={heroContent} />
      <Phone phoneContent={phoneContent}/>
      <Backup backupContent={backupContent} />
      <Benefits/>
      <Phone phoneContent={phoneContent}/>
      <Backup backupContent={backupContent} />
      <Questions/>
    </> 
  )
}

export default Home
