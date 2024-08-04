import { createReducer } from '@reduxjs/toolkit';
import { addNote, deleteNote, pinNote, Note } from './actions';

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addNote, (state, action) => {
      state.notes.unshift(action.payload); 
    })
    .addCase(deleteNote, (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    })
    .addCase(pinNote, (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) note.pinned = !note.pinned;
    });
});

export default notesReducer;
