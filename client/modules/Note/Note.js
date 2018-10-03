import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { bindActionCreators } from 'redux';

import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

// Import Style
import styles from './Note.css';

/*const Note = props =>
  <li className={styles.Note}>{props.children}</li>;*/

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { connectDragSource,
      connectDropTarget,
      isDragging,
      editing,
      children } = this.props;

    // jeśli edytujemy to przepuszczamy komponent (uniemożliwiamy tym samym przeciąganie komponentu edytowanego)
    const dragSource = editing ? a => a : connectDragSource;

    return dragSource(connectDropTarget(
      <li className={styles.Note}
        style={{
          opacity: isDragging ? 0 : 1
        }} >{children}</li>
    ));
  }
}

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id,
      laneId: props.laneId,
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  },
  /*endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    const item = monitor.getItem();
    console.log(item);
    props.moveWithin(item.id, dropResult.listId);
  },*/
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
console.log("Target props id: "+ targetProps.id);
console.log("Target props laneId: "+ targetProps.laneId);
    if (targetProps.id !== sourceProps.id) {
      targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
    }
  },
/*
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    console.log(sourceProps.id);
    targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
    return { moved: true };
  }*/
};

Note.propTypes = {
  children: PropTypes.any,
};

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note);