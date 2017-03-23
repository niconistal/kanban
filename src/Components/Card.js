import React from 'react'
import './Styles/CardStyle.css'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

export const BoardCard = ({ title, description, connectDragSource, connectDragPreview, connectDropTarget }) => {
  return connectDragPreview(
    connectDropTarget(
      <Card>
        <CardHeader
          title={title}
        />
        <CardText>
          {description}
          {
            connectDragSource(
              <button className="lane__drag" >Move</button>
            )
          }
        </CardText>
      </Card>
    )
  )
}
