import React from 'react'

import Request from '../Request/Request'



const Requests = () => {
  return (
    <div className='requests'>
        <div className="requests-top">
            <h3 className='requsets-top__title'>Заявки</h3>
            <p className='requests-top__count'>Новых заявок 14</p>
        </div>
        <div className="requests-bottom">
            <Request />
            <Request />
            <Request />
            <Request />
            <button className='btn btn-blue requests-btn'>Посмотреть все</button>
        </div>
    </div>
  )
}

export default Requests