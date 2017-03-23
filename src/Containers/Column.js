import Lane from '../components/Lane.jsx'
import lanesActions from '../actions/lanes'
import notesActions from '../actions/notes'
import { connect } from 'react-redux'
import { DragSource, dropTarget } from 'react-dnd'
import * as itemTypes from '../Constants/ItemTypes'

const cardSource = {
  beginDrag: (props) => ({
      id: props.column.id,
  }),
  isDragging: (props, monitor) =>
    props.id === monitor.getItem().id
};

const laneTarget = {
  hover: (targetProps, monitor) => {
    const { id as targetId } = targetProps.column;
    const sourceProps = monitor.getItem();
    const { id as sourceId } = sourceProps;
    const sourceType = monitor.getItemType();
    if((!targetProps.column.cards.length) && sourceType === itemTypes.CARD) {
      targetProps.attachToLane(targetId, sourceId);
    }
  },
}

const collectDragSource = (DnDconnect, monitor) => ({
  connectDragSource: DnDconnect.dragSource(),
  connectDragPreview: DnDconnect.dragPreview(),
  isDragging: monitor.isDragging(),
})

const collectDropTarget = (DnDconnect) => ({
  connectDropTarget: DnDconnect.dropTarget(),
});

const mapStateToProps = (state) => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  onMoveNote(sourceId, targetId) {
    dispatch(ColumnsActions.move('card', sourceId, targetId));
  },

  attachToLane(columnId, cardId) {
    dispatch(columnsActions.attachToColumn(columnId, cardId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DragSource(itemTypes.COLUMN, columnSource, collectDragSource)(
    DropTarget([itemTypes.CARD, itemTypes.COLUMN], laneTarget, collectDropTarget)(Lane)
  )
);
