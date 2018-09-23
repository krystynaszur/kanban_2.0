// Import Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, EDIT_NOTE } from './NoteActions';

// Initial State
const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.note];

    case UPDATE_NOTE:
      return state.map((note) => {
        return note.id === action.id ? { ...note, ...action.note } : note;
      });

    case EDIT_NOTE:
      return state.map((note) => {
      //  return note.id === action.NoteId ? { ...note, editing: true } : note;
        if (note.id === action.noteId) {
          return Object.assign({}, { ...note, editing: false }, { ...note, editing: true });
        }
        return note;
  });

    case DELETE_NOTE:
  return state.filter((note) => note.id !== action.noteId);

    default:
  return state;
}
}
