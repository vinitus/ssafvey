import React from 'react';
import style from './HomeCard.module.css'

export default function HomeCard1() {
  return (
    <div className="h-200 w-160 bg-main rounded-t-20 rounded-l-20 relative shadow-md shadow-black m-10">
      <div className="h-200 w-160 bg-clearMain rounded-t-20 rounded-l-20 opacity-30 absolute -left-4 -top-4"/>
      <div className="h-200 w-160 rounded-t-20 rounded-l-20 absolute -left-4 -top-4 text-white p-15 pt-25">
        <div className='text-20 tracking-tighter text-left leading-24 break-keep'>
          IT 플랫폼 사용 실태 조사
        </div>
        <div className='text-10 flex pt-15 pb-10'>
          <img src="./public/icons/house.svg" alt='house' className='mr-5'/>
          <div className='flex items-center'>
            기관명
          </div>
        </div>
        <div className='text-10 flex pb-10'>
          <img src="./public/icons/clock.svg" alt='clock' className='mr-5'/>
          <div className="flex-none text-left">
            <div>
              2023.04.10 -
            </div>
            <div>
              2023.04.13
            </div>
          </div>
        </div>
        <div className='text-10 flex'>
          <img src="./public/icons/people.svg" alt='people' className='mr-5'/>
          <div className='flex items-center'>
            100
          </div>
        </div>
        <div className='text-10 absolute right-10 bottom-10'>
          <div className='w-40 h-25 flex items-center justify-items-center bg-backwhite text-blue rounded-5'>
            <img src="./public/icons/coin.svg" alt='coin' className='-ml-8'/>
            <div className='ml-5'>100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
