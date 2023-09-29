'use client';

import { Button, TextInput } from '@mantine/core';
import { useState, useSyncExternalStore } from 'react';

const storage = {
  setData: (data: string) => {
    localStorage.setItem('test-data', data);
    window.dispatchEvent(new Event('storage'));
  },
  removeData: () => {
    localStorage.removeItem('test-data');
    window.dispatchEvent(new Event('storage'));
  },
  getSnapshot: () => {
    return localStorage.getItem('test-data');
  },
  getServerSnapshot: () => {
    return 'server data';
  },
  subscribe: (listener: () => void) => {
    window.addEventListener('storage', listener);

    return () => window.removeEventListener('storage', listener);
  },
};

export default function UseSyncExternalStorePage() {
  const [input, setInput] = useState('');

  const value = useSyncExternalStore(
    storage.subscribe,
    storage.getSnapshot,
    storage.getServerSnapshot,
  );

  const save = () => {
    if (!input) return;
    storage.setData(input);
    setInput('');
  };

  const remove = () => {
    storage.removeData();
    setInput('');
  };

  return (
    <div>
      <p>Current localStorage data: {value}</p>
      <div className="mt-4 flex gap-4">
        <TextInput
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
        <Button onClick={save}>Save</Button>
        <Button onClick={remove}>Remove</Button>
      </div>
    </div>
  );
}
