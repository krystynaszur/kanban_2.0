import { connect } from 'react-redux';
import Lane from './Lane';
import { updateLaneRequest, editLane, deleteLaneRequest, moveBetweenLanes } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

//import * as laneActions from './LaneActions';
//import { createNote } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  addNote: createNoteRequest,
  deleteLane: deleteLaneRequest,
  editLane,
  updateLane: updateLaneRequest,
  moveBetweenLanes,
};

/*const mapDispatchToProps = {
  editLane,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  deleteLane: deleteLaneRequest,
  };*/
const noteTarget = {
  /*hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const { id: noteId, laneId: sourceLaneId } = sourceProps;

    if (!targetProps.lane.notes.length) {
      targetProps.moveBetweenLanes(
        targetProps.lane.id,
        noteId,
        sourceLaneId,
      );
    }
  },*/
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const { id: noteId, laneId: sourceLaneId } = sourceProps;

    //if (!targetProps.lane.notes.length) {
      targetProps.moveBetweenLanes(
        targetProps.lane.id,
        noteId,
        sourceLaneId,
      );
    }
 // },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget()
  }))
)(Lane);