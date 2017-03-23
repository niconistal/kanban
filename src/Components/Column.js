import React from 'react'
import './Styles/ColumnStyle.css'
import { BoardCard } from './Card'

export const Column = ({ name, cards, connectDragSource, connectDragPreview, connectDropTarget }) => {
  return connectDragPreview(
    connectDropTarget(
      <div className='boardcolumn'>
        <h1>{name}</h1>
        <div className='columnContainer'>
          {cards.map((card, key) => <BoardCard key={key} title={card.name} description={card.description} />)}
        </div>
      </div>
    )
  )
}
