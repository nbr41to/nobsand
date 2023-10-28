'use client';
import { Button } from '@mantine/core';

// import { getFileNames } from '@/utils/getPathnames';

export const ClientActionButton = () => {
  const clientAction = () => {
    // const names = getFileNames();
    // console.log(names);
  };

  return <Button onClick={clientAction}>ClientActionButton</Button>;
};
