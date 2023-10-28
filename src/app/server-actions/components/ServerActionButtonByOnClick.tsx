'use client';
import { Button } from '@mantine/core';

import { getFileNames } from '../server/getPathnames';

export const ServerActionButtonByOnClick = () => {
  const serverAction = async () => {
    const names = await getFileNames(); // use server function
    // eslint-disable-next-line no-console
    console.log(names);
  };

  return <Button onClick={serverAction}>ServerActionButtonByOnClick</Button>;
};
