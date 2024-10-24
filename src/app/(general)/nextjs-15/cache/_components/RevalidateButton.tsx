'use client';

import { Button } from '@mantine/core';
import { revalidate } from '../actions';

type Props = {
  tag: string;
};

export const RevalidateButton = ({ tag }: Props) => {
  const handleClick = async () => {
    await revalidate(tag);
  };

  return <Button onClick={handleClick}>Revalidate {tag}</Button>;
};
