import { Loader } from '@mantine/core';

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Loader size="xl" />
      <div className="text-xl font-bold">LOADING...</div>
    </div>
  );
}
