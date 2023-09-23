/* https://nextjs.org/docs/app/building-your-application/routing/error-handling */

'use client'; // Error components must be Client Components

import { Button } from '@mantine/core';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>これはカスタムエラーのWrapper</h2>
      <div className="space-y-4 rounded-lg border border-slate-900 bg-black p-4 font-mono font-bold text-red-400 dark:border-white">
        <h2 className="text-xl">message: {error.message}</h2>
        <pre>{error.stack}</pre>
      </div>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
