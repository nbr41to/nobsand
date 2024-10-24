'use client';
import { Modal } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <Modal opened onClose={router.back}>
      <p className="text-base">Modal!!</p>
    </Modal>
  );
}
