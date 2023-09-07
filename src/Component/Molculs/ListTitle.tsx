import React from 'react'

const ListTitle = () => {
  return (
    <div>
      <div className="overflow-x-auto p-3">
        <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
        <tr>
        <th></th> 
        <td>　　タイトル　　</td> 
        <td>担当者</td> 
        <td>金額</td> 
        <td></td> 
        <td>1次判定</td> 
        <td>最終判定</td> 
        <td>月割</td>
        <td>削除</td>
        <th></th> 
        </tr>
        </thead> 
        </table>
      </div>
    </div>
  )
}

export default ListTitle