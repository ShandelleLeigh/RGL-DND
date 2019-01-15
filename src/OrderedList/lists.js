import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import {
  DragSource,
	DropTarget,
	DragSourceConnector,
	// ConnectDropTarget,
	// ConnectDragSource,
	// DropTargetMonitor,
	// DropTargetConnector,
	// DragSourceMonitor,
} from 'react-dnd';
import {itemTypes, pageListensTo}  from './objects';
// import { XYCoord } from 'dnd-core';

/* ---------- Drag Source Code: ---------- */
 /**
 *    Drag Collect
 */
const dragCollector = ( connect, monitor ) => ({
  connect: DragSourceConnector,
  connectDragSource: connect.dragSource(),
  monitor: connect.DragSourceMonitor,
  isDragging: monitor.isDragging,
});
/**
 *    Drag Spec
 */
const dragSpec = {
  beginDrag(props, monitor, component) {
    return {
      id: props.id,
      index: props.index,
    }
  },
  isDragging(props, monitor) {
    const item = monitor.getItem()

    // console.log(`Dragging: ${props.id} * ${item}`);
    return;
  },
  endDrag(props, monitor, component) {
    // console.log(`End Drag: ${props.id}`);

  },
};
/* ---------- Drop Target Code: ---------- */
 /**
 *    Drop Collect
 */
const dropCollector = (
  connect,
	monitor,
  // connect: DragSourceConnector,
	// monitor: DragSourceMonitor,
) => ({
  canDrop: monitor.canDrop(),
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: false }),
  itemType: monitor.getItemType(),
  monitorDropTarget: monitor,
});
/**
 * Spec funciton: canDrop, hover, drop
 */
const droptargetSpec = {
  hover(props, monitor, component) {
    if (!component) {
      return null
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = (
      findDOMNode(component)
    ).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    /*
     * Only perform the move when the mouse has crossed half of the items height
     * When dragging downwards, only move when the cursor is below 50%
     * When dragging upwards, only move when the cursor is above 50%
     */
    /* Dragging downwards */
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    /* Time to actually perform the action */
    props.moveList(dragIndex, hoverIndex)

    /**
     * Note: we're mutating the monitor item here!
     * Generally it's better to avoid mutations,
     * but it's good here for the sake of performance
     * to avoid expensive index searches.
     */
    monitor.getItem().index = hoverIndex
    // console.log('hover index: ', hoverIndex);

  },
  // canDrop(props, monitor) {
  //   const pageType = props.type;
  //   const droppedItemType= monitor.getItemType;
  //   return pageAccepts.includes(droppedItemType);
  // }
}
/* ---------- Component Code: ---------- */


const styles = {
  list: {
    width: '40%',
    height: 'fitContent',
    minHeight: '50vh',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    cursor: 'move',
  },
};



class Lists extends Component {
  state = { }

  // moveList = (dragIndex, hoverIndex) => {
  //   // const { lists } = this.state;
  //   console.log('***Lists ***', dragIndex, hoverIndex);

  //   // const dragList = lists[dragIndex];
  //   // let state = Object.assign(
  //   //   this.state, {
  //   //     items: {
  //   //       $splice: [[dragIndex, 1], [hoverIndex, 0, dragList]]
  //   //     }
  //   //   }
  //   // )
  //   // console.log('state: ', state, 'this.state', this.state);


  //   // // this.setState({state})
  // }
  render () {
    const {item, id, index, connectDragSource, connectDropTarget } = this.props;
    const {name} = item;
    const style = Object.assign({}, styles.list, item.style);
    return connectDropTarget(connectDragSource(
      <div
        id={id}
        index={index}
        style={style}
        onDrag={this.props.movelist}
      >
        <p>{name}</p>
        <p>{index}</p>
      </div>
    ))
  };

}

// export default
// DropTarget(pageListensTo, droptargetSpec, dropCollector)
// DragSource(itemTypes.LIST, dragSpec, dragCollector)
//   (Lists);

Lists = DragSource(itemTypes.LIST, dragSpec, dragCollector)(Lists);
Lists = DropTarget(pageListensTo, droptargetSpec, dropCollector)(Lists)
export default Lists
