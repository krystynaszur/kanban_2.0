import { connect } from 'react-redux';
import Notes from './Notes';
import {deleteNoteRequest, editNote, updateNoteRequest, moveWithinLane } from '../Note/NoteActions';

/*const mapDispatchToProps = {
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
};

:*/ 
const mapDispatchToProps = {  moveWithinLane, editNote, updateNote: updateNoteRequest, deleteNote: deleteNoteRequest, };
/*
const mapDispatchToProps = { 
  editNote,
  updateNote: updateNoteRequest, 
 // deleteNote: deleteNoteRequest,
  onDelete: deleteNoteRequest,
 };

const mapDispatchToProps = {
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
//  moveWithinLane,
};*/

export default connect(
  null,
  mapDispatchToProps
)(Notes);