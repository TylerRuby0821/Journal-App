import React from 'react';
import type { Snippet } from '../types';

interface SnippetListProps {
  snippets: Snippet[];
  onDelete: (id: string) => void;
}

export const SnippetList: React.FC<SnippetListProps> = ({ snippets, onDelete }) => {
  return (
    <div className="mt-6 space-y-4">
      {snippets.map((snippet) => (
        <div key={snippet.id} className="border p-4 rounded shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{snippet.title}</h3>
            <button
              className="text-red-600 hover:underline"
              onClick={() => onDelete(snippet.id)}
            >
              Delete
            </button>
          </div>
          <p className="mt-2 whitespace-pre-line text-sm">{snippet.content}</p>
          <p className="text-xs text-gray-500 mt-1">Saved on {new Date(snippet.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};
