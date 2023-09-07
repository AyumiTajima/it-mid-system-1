import React from 'react'
import YearChoise from '../Atom/YearChoise'
import NewItemBtn from '../Atom/NewItemBtn'


const Sidebar = () => {
    
  return (
    <div className='w-1/7 bg-pink-300 h-full'>
        <br/>
        <YearChoise/>
        <br/>
        <br/>
        <NewItemBtn/>
        <br/>
        <ul className='font-bold'>案件修正</ul>
        <button className='btn btn-sm btn-outline w-36'>
            申請待ち
        </button>
        <br/>
        <button className='btn btn-sm btn-outline w-36'>
            承認待ち
        </button>
        <br/>
        <button className='btn btn-sm btn-outline w-36'>
            リスト承認
        </button>
        <br/>
        <br/>
        <ul className='font-bold'>判定</ul>
        <button className='btn btn-sm btn-outline w-36'>
            1次判定待ち
        </button>
        <br/>
        <button className='btn btn-sm btn-outline w-36'>
            提案部署承認待ち
        </button>
        <br/>
        <button className='btn btn-sm btn-outline w-36'>
            最終判定待ち
        </button>
        <br/>
        <button className='btn btn-sm btn-outline w-36'>
            主管部署確認待ち
        </button>
        <br/>
        <br/>
        <ul className='font-bold'>月割り登録・修正</ul>
        <button className='btn btn-sm btn-outline w-36'>
            申請待ち
        </button>
        <br/>
        <button className='btn btn-sm btn-outline w-36'>
            承認待ち   
        </button>
        <br/>
        <br/>
        <button className='btn btn-sm btn-ghost w-36'>
            管理者登録
        </button>
        <br/>
    </div>
  )
}

export default Sidebar