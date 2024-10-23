import { Button } from '@mantine/core';

import { getFileNames } from '@/utils/getPathnames';

import { ClientActionButton } from './components/ClientActionButton';
import { ServerActionButton } from './components/ServerActionButton';
import { ServerActionButtonByOnClick } from './components/ServerActionButtonByOnClick';

export default function ServerActionsPage() {
  // use server の関数は async にする必要がある
  const serverAction = async () => {
    'use server';
    /* バックエンドの処理 */
    const names = await getFileNames();
    // eslint-disable-next-line no-console
    console.log(names);
  };

  return (
    <div>
      <form action={serverAction}>
        <Button type="submit">serverAction</Button>
      </form>

      {/* Client Component */}
      <ClientActionButton />
      <ServerActionButton />
      <ServerActionButtonByOnClick />
    </div>
  );
}
