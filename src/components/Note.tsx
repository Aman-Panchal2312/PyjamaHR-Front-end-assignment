import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, pinNote, Note as NoteType } from '../redux/actions';
import { AppDispatch } from '../redux/store';

interface NoteProps {
  note: NoteType;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePin = () => {
    dispatch(pinNote(note.id));
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };



  
  return (
    <div className="note"
    style={{
      backgroundColor: note.backgroundColor,
      border: note.pinned ? '5px solid black' : '1px solid black',
      borderRadius: note.pinned ? '10px' : '5px',
      height: 'auto',

     
    }}>
      {note.image && <img src={note.image} alt="note" />}
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handlePin}>Pin</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;





