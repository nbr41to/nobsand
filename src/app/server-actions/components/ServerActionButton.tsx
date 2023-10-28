'use client';
import { Button } from '@mantine/core';
import { useState } from 'react';

import { getFileNames } from '../server/getPathnames';

export const ServerActionButton = () => {
  const [count, setCount] = useState(0);

  const serverAction = async () => {
    // 'use server'; // ClientComponentの中で使うとエラーになるので注意
    const names = await getFileNames(); // ここだけがサーバーサイドで実行される
    setCount(count + 1);
    // eslint-disable-next-line no-console
    console.log(names);
  };

  return (
    <form action={serverAction}>
      <Button type="submit">ServerActionButton ({count})</Button>
    </form>
  );
};
