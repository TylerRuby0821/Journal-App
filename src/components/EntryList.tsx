import React from 'react';
import type { Entry } from '../types';

interface EntryListProps {
  entries: Entry[];
  onDelete: (id: string) => void;
}

export const EntryList: React.FC<EntryListProps> = ({ entries, onDelete }) => {
  return (
    <div className="mt-6 space-y-4">
      {entries.map((entry) => (
        <div key={entry.id} className="border p-4 rounded shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{entry.title}</h3>
            <button
              className="text-red-600 hover:underline"
              onClick={() => onDelete(entry.id)}
            >
              Delete
            </button>
          </div>
          <p className="mt-2 whitespace-pre-line text-sm">{entry.content}</p>
          <p className="text-xs text-gray-500 mt-1">Saved on {new Date(entry.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};
