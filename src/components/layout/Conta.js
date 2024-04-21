import React from 'react'

export default function Conta() {

    return (
        <div className='flex justify-center w-[max-content] gap-[10px] items-center'>
          <div>
            <div className='bg-[#D9D9D9] w-[40px] h-[40px] rounded-[50%]'>hg</div>
          </div>
          <div className='flex flex-wrap'>
            <span id='qm' className='w-[100%]'>{localStorage.getItem('name')}</span>
            <span id='qn' className='w-[100%]'>{localStorage.getItem('email')}</span>
          </div>
        </div>
      )
    
}
