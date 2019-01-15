import React, {Component} from 'react';
import {styles, itemsObject} from './objects';
import Lists from './lists';

const update = require('immutability-helper')

const initialState = {items: itemsObject}

class OLPage extends Component {
  state = {
    snapToGridWhileDragging: false,
    snapToGridAfterDrop: false,
    items: initialState.items,
  };

  moveList = (dragIndex, hoverIndex) => {
    // Use 'initialState' since state isn't set until render
    const items = this.state.items || initialState.items;
    const dragList = items[dragIndex];
    this.setState(
      update(this.state, {
        items: {
          // Removes moved item from list, put back in array at dropped place
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragList]],
        },
      }),
    )
  };

  render () {
    // const { } = this.props;
    const { items } = this.state;
    return (
      <div style={styles.page}>
        <p>Ordered List Page</p>
        <div style={styles.canvas}>
          {
            items.map(
              ((item, index )=> {
                return (
                  <Lists
                    key={item.name}
                    item={item}
                    index={index}
                    id={item.id}
                    moveList={this.moveList}
                  />
                )
              })
            )
          }
          {/* <CustomDragLayer snapToGrid={snapToGridWhileDragging}/> */}
        </div>

      </div>
    )
  }
}

export default OLPage;