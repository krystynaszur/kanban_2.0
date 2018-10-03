// Import Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, EDIT_NOTE, CREATE_NOTES } from './NoteActions';

import omit from 'lodash/omit';

// Initial State
const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
    case UPDATE_NOTE:
      return { ...state, [action.note.id]: action.note };

    case EDIT_NOTE: {
      console.log("reducer działa dla editnote");
      console.log ("action.id:" + action.noteId);
      const note = { ...state[action.noteId], editing: true };
      console.log("Wartość note editing to: " + note.editing);
      return { ...state, [action.noteId]: note };
    }

    case DELETE_NOTE:
      return omit(state, action.noteId);

    case CREATE_NOTES:
      return { ...action.notes };
      
    default:
      return state;
  }
}
