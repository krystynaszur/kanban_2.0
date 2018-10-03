import { connect } from 'react-redux';
import Lane from './Lane';
import { updateLaneRequest, editLane, deleteLaneRequest } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

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
};

/*const mapDispatchToProps = {
  editLane,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  deleteLane: deleteLaneRequest,
  };*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);