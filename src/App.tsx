import { useEffect, useState } from 'react';
import type { Entry } from './types';
import { EntryForm } from './components/EntryForm';
import { EntryList } from './components/EntryList';

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('entries');
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry: Entry) => {
    setEntries((prev) => [entry, ...prev]);
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Journal</h1>
      <EntryForm onAdd={addEntry} />
      <EntryList entries={entries} onDelete={deleteEntry} />
    </div>
  );
}

export default App;
