import { Button } from '@mantine/core';
import { revalidateTag } from 'next/cache';

export const RevalidateButton = ({ tag }: { tag: string }) => {
  const revalidate = async () => {
    'use server';
    revalidateTag(tag);
  };

  return (
    <form action={revalidate}>
      <Button type="submit">{`revalidateTag(${tag})`}</Button>
    </form>
  );
};
