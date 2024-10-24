import { Button } from '@mantine/core';
import { revalidateTag } from 'next/cache';

export const RevalidateButton = () => {
  const revalidate = async () => {
    'use server';
    revalidateTag('datetime');
  };

  return (
    <form action={revalidate}>
      <Button type="submit">{`revalidateTag('datetime')`}</Button>
    </form>
  );
};
