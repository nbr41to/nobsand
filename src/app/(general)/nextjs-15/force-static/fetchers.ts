'use server';

export const getTimeForceCache = async () => {
  const response = await fetch('http://localhost:3000/api/get-time', {
    cache: 'force-cache',
    next: {
      tags: ['getTimeForceCache'],
    },
  });
  const data = await response.json();

  return data.time;
};

export const getTimeNoStore = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch('http://localhost:3000/api/get-time', {
    cache: 'no-store',
    next: {
      tags: ['getTimeNoStore'],
    },
  });
  const data = await response.json();

  return data.time;
};

export const getTimeRevalidate1s = async () => {
  const response = await fetch('http://localhost:3000/api/get-time', {
    next: {
      revalidate: 1, // 1s
      tags: ['getTimeRevalidate1s'],
    },
  });
  const data = await response.json();

  return data.time;
};
