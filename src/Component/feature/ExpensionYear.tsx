import React, { useState } from 'react'
import axios from "axios"
import ListTitle from '../Molculs/ListTitle'
import { useDispatch } from 'react-redux'


// const [resData, setResData] = useState()

const ExpensionYear = () => {

  const [listYear, setListYear] = useState<number[]>([]);

  const onClickYear = () => {
    axios.get("http://pc14661:8000/test2/").then((res) => {
      setListYear(res.data)
      console.log(res.data)
    }).catch((err)=>{
      alert(err)
    })
  }

  return (
    <div>
      <button className='btn' onClick={onClickYear}>
        年度</button>
      {/* <button className='btn' onClick={()=>{dispatch(expansionYear())}}>
        展開！</button> */}
  
      {listYear.map((year) => {
        return(
        <p>{year}</p>
      )
      })}
      
    </div>
  )
}

export default ExpensionYear