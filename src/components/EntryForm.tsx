import React, { useState } from 'react';
import type { Entry } from '../types';

interface EntryFormProps {
  onAdd: (entry: Entry) => void;
}

export const EntryForm: React.FC<EntryFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newEntry: Entry = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    onAdd(newEntry);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        className="w-full p-2 border rounded"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        className="w-full p-2 border rounded"
        onChange={(e) => setContent(e.target.value)}
        rows={4}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
};
