import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import { RootState } from '../redux/store';

const NoteList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
