import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';
import { AppDispatch } from '../redux/store';

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string | undefined>(undefined);
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (content) {
      dispatch(addNote({
        id: Date.now(),
        title,
        content,
        pinned: false,
        image,
        backgroundColor,
      }));
      setTitle('');
      setContent('');
      setImage(undefined); 
      setBackgroundColor('');
      (document.getElementById("fileInput") as HTMLInputElement).value = "";
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Title</span>
      <input
        type="text"
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span>Content</span>
      <textarea
        
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <span>Choose Image</span>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <span>Choose color</span>
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <span><button type="submit">Add Note</button></span>
    </form>
  );
};

export default NoteForm;

