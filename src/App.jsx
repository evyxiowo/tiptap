import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Ext from './Ext';


function App() {
  const editor = useEditor({
    extensions: [StarterKit, Ext],
    content: '<p>hi type your text here!!!</p>',
  });

  return (
    <div>
      <h1>Type text below </h1>
      <EditorContent editor={editor} />
    </div>
  );
}

export default App;
