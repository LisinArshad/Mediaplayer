import React from 'react'

function History() {
  return (
    <>
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Video ID</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Date and Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Illuminati</td>
            <td>https://www.youtube.com/watch?v=tOM-nWPcR4U</td>
            <td>2024-08-27</td>
            <td><button className='btn'><i className="fa-solid fa-trash-can" style={{color: "#ff0000",}} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default History
