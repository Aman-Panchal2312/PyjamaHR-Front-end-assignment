import { createAction } from '@reduxjs/toolkit';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const PIN_NOTE = 'PIN_NOTE';

export interface Note {
  id: number;
  title?: string;
  content: string;
  pinned: boolean;
  image?: string;
  backgroundColor?: string;
}

export const addNote = createAction<Note>(ADD_NOTE);
export const deleteNote = createAction<number>(DELETE_NOTE);
export const pinNote = createAction<number>(PIN_NOTE);

