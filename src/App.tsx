import { useEffect, useState } from 'react';
import type { Snippet } from './types';
import { SnippetForm } from './components/SnippetForm';
import { SnippetList } from './components/SnippetList';

function App() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('snippets');
    if (stored) {
      setSnippets(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('snippets', JSON.stringify(snippets));
  }, [snippets]);

  const addSnippet = (snippet: Snippet) => {
    setSnippets((prev) => [snippet, ...prev]);
  };

  const deleteSnippet = (id: string) => {
    setSnippets((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Snippet Saver</h1>
      <SnippetForm onAdd={addSnippet} />
      <SnippetList snippets={snippets} onDelete={deleteSnippet} />
    </div>
  );
}

export default App;
