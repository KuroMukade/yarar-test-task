import React from 'react'

import { INotion } from '../Notions/Notions'

const Notion = (props: Partial <INotion>) => {
  return (
    <div className='notion'>
        <a href="#?news" className='notion-title'>{props.title}</a>
        <p className="notion-date">{props.createdAt}</p>
        <p className='notion-preview'>{props.previewText}</p>
    </div>
  )
}

export default Notion