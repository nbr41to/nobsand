import { LoadingOverlay } from '@mantine/core';
import Image from 'next/image';
import { Suspense } from 'react';

import { getBookImageById } from '../../server/books';

type Props = {
  id: number;
  title: string;
  width?: number;
  height?: number;
};

const SC = async ({ id, title, width = 200, height = 400 }: Props) => {
  const imageUrl = await getBookImageById(id);

  return (
    <Image src={imageUrl} alt={title} width={width} height={height} priority />
  );
};

export const BookImage = (props: Props) => {
  return (
    <Suspense
      fallback={
        <div
          className="relative grid flex-none place-items-center"
          style={{ width: props.width, height: props.height }}
        >
          <LoadingOverlay visible />
        </div>
      }
    >
      <SC {...props} />
    </Suspense>
  );
};
