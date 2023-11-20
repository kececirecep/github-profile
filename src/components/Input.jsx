import React from 'react'
import searchLogo from '../img/icon-search.svg'

const Input = ({onChange,onKeyDown}) => {
  return (
    <div className='bg-[#1e2a47] rounded flex items-center justify-between p-2 mt-10'>
        <img src={searchLogo} width="25px" height="24px" alt="" />
        <input onChange={onChange} onKeyDown={onKeyDown} type="text" placeholder='User Search (Press Enter)' className='rounded w-[95%] bg-transparent p-1 outline-none focus:border focus:border-[#0076fb]' />
    </div>
  )
}

export default Input