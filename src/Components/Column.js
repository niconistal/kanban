import React from 'react'
import './Styles/ColumnStyle.css'
import BoardCard from './Card'

export const Column = ({ name, cards, editCard, moveCard, columns, removeCard }) => (
  <div className='boardcolumn'>
    <h1>{name}</h1>
    <div className='columnContainer'>
      {cards.map((card, key) =>
        <BoardCard
          key={key}
          title={card.name}
          id={card.id}
          columnId={card.column}
          description={card.description}
          columns={columns}
          moveCard={moveCard}
          removeCard={removeCard}
          editCard={editCard}
        />)
      }
    </div>
  </div>
)
