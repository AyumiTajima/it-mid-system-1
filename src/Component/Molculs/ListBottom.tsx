import React from 'react'
import ListApprovalBtn from '../Atom/ListApprovalBtn'
import DeclineBtn from '../Atom/DeclineBtn'
import JudgementApproval from '../Atom/JudgementApproval'
import RejudgementBtn from '../Atom/RejudgementBtn'
import ListCancelBtn from '../Atom/ListCancelBtn'
import JudgementCompleteBtn from '../Atom/JudgementCompleteBtn'
import ConfirmBtn from '../Atom/ConfirmBtn'

const ListBottom = () => {
  return (
    <div className='flex px-8 space-x-4'>
      <ListApprovalBtn/>
      <DeclineBtn/>
      <ListApprovalBtn/>
      <JudgementApproval/>
      <RejudgementBtn/>
      <ListCancelBtn/>
      <JudgementCompleteBtn/>
      <ConfirmBtn/>
    </div>
  )
}

export default ListBottom