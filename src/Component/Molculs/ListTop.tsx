import React from 'react'
import FilterCancelBtn from '../Atom/FilterCancelBtn'
import ExportBtn from '../Atom/ExportBtn'

const ListTop = () => {
  return (
    <div className='flex p-4 space-x-4'>
        <FilterCancelBtn/>
        <ExportBtn/>
    </div>
  )
}

export default ListTop