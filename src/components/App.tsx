import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const App: React.FC = () => {
  return (
    <div className="app">
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
