import React from 'react'
import ListTable from '../Molculs/ListTable'
import ListAmount from '../Molculs/ListAmount'
import ListTop from '../Molculs/ListTop'
import ListFilter from '../Molculs/ListFilter'
import ListTitle from '../Molculs/ListTitle'
import ListBottom from '../Molculs/ListBottom'
import ExpensionYear from '../feature/ExpensionYear'

const ListPage = () => {
  return (
    <div className='w-full'>
        <ListTop/>
        <ListFilter/>
        <ListTitle/>
        <ExpensionYear/>
        <ListTable/>
        <ListAmount/>
        <ListBottom/>
    </div>
  )
}

export default ListPage