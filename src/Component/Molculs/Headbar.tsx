import React from 'react'
import Icon from '../Atom/Icon'
import HomeBtn from '../Atom/HomeBtn'
import ReportBtn from '../Atom/ReportBtn'
import ContactBtn from '../Atom/ContactBtn'
import LoggOutBtn from '../Atom/LoggOutBtn'
import Welcome from '../Atom/Welcome'

const Headbar = () => {
  return (
    <div className='flex bg-pink-600 inset-x-0 top-0 h-12 '>
        <div className='flex flex-row flex-nowrap w-1/2 m-auto'>
            <br/>
            <Icon/>
            <br/>
            <HomeBtn/>
            <br/>
            <ReportBtn/>
        </div>
        <div className='w-50'>
            <ul>           </ul>
        </div>
        <div className='flex flex-row flex-nowrap ml-auto m-auto'>
            <br/>
            <ContactBtn/>
            <br/>
            <LoggOutBtn/>
            <br/>
            <Welcome/>
            <br/>
        </div>
    </div>
  )
}

export default Headbar